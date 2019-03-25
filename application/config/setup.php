<?php
/**
 * Created by PhpStorm.
 * User: pzubar
 * Date: 3/24/19
 * Time: 3:54 PM
 */

require_once "database.php";

if (!$DB_DSN || !$DB_USER || !$DB_PASSWORD || !$DB_NAME)
	exit ('Setup failed, please, use valid database.php' . PHP_EOL);

try {
	$dbQuery = new PDO($DB_DSN, $DB_USER, $DB_PASSWORD);
	$dbQuery->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$dbQuery = null;
} catch (PDOException $exception) {
	exit ('Connection to database failed: ' . $exception->getMessage() . PHP_EOL);
}

try {
	$dbQuery = new PDO($DB_DSN . ';dbname=' . $DB_NAME . '', $DB_USER, $DB_PASSWORD);
	$dbQuery->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$dbQuery->query("DROP TABLE IF EXISTS comments");
	$dbQuery->query("DROP TABLE IF EXISTS likes");
	$dbQuery->query("DROP TABLE IF EXISTS posts");
	$dbQuery->query("DROP TABLE IF EXISTS superposables");
	$dbQuery->query("DROP TABLE IF EXISTS users");
	$dbQuery = null;
} catch (PDOException $exception) {
	exit ('Tables drop failed: ' . $exception->getMessage() . PHP_EOL);
}

try {
	$dbQuery = new PDO($DB_DSN . ';dbname=' . $DB_NAME . '', $DB_USER, $DB_PASSWORD);
	$dbQuery->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$dbQuery->query("CREATE TABLE comments (
		  id           int(11) unsigned unique auto_increment primary key,
		  postdate     datetime default current_timestamp() not null,
		  comment_text text                                 not null,
		  author_id    int(11) unsigned                     not null,
		  post_id      int(11) unsigned                     not null
		)"
	);
	$dbQuery->query("CREATE TABLE likes (
		  id        int(11) unsigned unique auto_increment primary key,
		  author_id int(11) unsigned not null,
		  post_id   int(11) unsigned not null
		)"
	);
	$dbQuery->query("CREATE TABLE posts (
		  id        int(11) unsigned unique auto_increment primary key,
		  postdate  datetime default current_timestamp() not null,
		  author_id int(11) unsigned                     not null,
		  filename  varchar(128)                         not null
		)"
	);
	$dbQuery->query("CREATE TABLE superposables (
		  id        int(11) unsigned unique auto_increment primary key,
		  filename varchar(64) default 'NULL' null
		)"
	);
	$dbQuery->query("CREATE TABLE users (
		  id            int(11) unsigned unique auto_increment primary key not null,
		  username      varchar(16)                          not null,
		  password      varchar(128)                         not null,
		  email         varchar(320)                         not null,
		  register_time datetime default current_timestamp() not null,
		  is_activated  tinyint(1) default '0'               not null,
		  hash          varchar(48)                          not null,
		  send_mail     tinyint(1) default '1'               not null
		)"
	);
	$dbQuery = null;
} catch (PDOException $exception) {
	exit ('Tables create failed: ' . $exception->getMessage() . PHP_EOL);
}

try {
	$dbQuery = new PDO($DB_DSN . ';dbname=' . $DB_NAME . '', $DB_USER, $DB_PASSWORD);
	$dbQuery->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$dbQuery->query('INSERT INTO superposables (filename) VALUES ("mask-carnival.png"), ("dragon_new.png"), ' .
		'("frankenstein.png"), ("diving-mask.png"), ("mask.png"), ("dragon.png"), ("glass-mask.png"), ("gas-mask.png"), ("skull.png"), ("skullik.png")');
	$dbQuery = null;
} catch (PDOException $exception) {
	exit ('Creating database with tables failed: ' . $exception->getMessage() . PHP_EOL);
}
