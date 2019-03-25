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

//$server = $DB_DSN;
//$username = $DB_USER;
//$password = $DB_PASSWORD;
//$dbName = $DB_NAME;
//echo $DB_NAME;

try {
    $server = new PDO($DB_DSN, $DB_USER, $DB_PASSWORD);
    $server->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//	$server->query("DROP DATABASE IF EXISTS $DB_NAME");
//	echo $server;
    $server = null;
} catch (PDOException $exception) {
    exit ('Connection to database failed: ' . $exception->getMessage() . PHP_EOL);
}
try {
    $dbQuery = new PDO($DB_DSN . ';dbname=' . $DB_NAME . '', $DB_USER, $DB_PASSWORD);
    $dbQuery->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//	$server->query("DROP DATABASE IF EXISTS $DB_NAME");
//	$server->query("CREATE DATABASE $DB_NAME");
    $dbQuery = null;
} catch (PDOException $exception) {
    exit ('Connection to database failed: ' . $exception->getMessage() . PHP_EOL);
}

try {
    $dbQuery = new PDO($DB_DSN . ';dbname=' . $DB_NAME . '', $DB_USER, $DB_PASSWORD);
    $dbQuery->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sth = $dbQuery->prepare('SELECT * FROM ' . $DB_NAME . '.users');
    $sth->execute();
//    $dbQuery->query('INSERT INTO ' . $DB_NAME . '.superposables (filename) VALUE ("mask-carnival.png")');
    var_dump($sth->fetchAll(PDO::FETCH_ASSOC));
    $dbQuery = null;
} catch (PDOException $exception) {
    exit ('Creating database with tables failed: ' . $exception->getMessage() . PHP_EOL);
}

//INSERT INTO u181725448_cama.superposables (id, filename) VALUES (4, \'dragon_new.png\');
//INSERT INTO u181725448_cama.superposables (id, filename) VALUES (6, \'frankenstein.png\');
//INSERT INTO u181725448_cama.superposables (id, filename) VALUES (7, \'diving-mask.png\');
//INSERT INTO u181725448_cama.superposables (id, filename) VALUES (8, \'mask.png\');
//INSERT INTO u181725448_cama.superposables (id, filename) VALUES (9, \'dragon.png\');
//INSERT INTO u181725448_cama.superposables (id, filename) VALUES (10, \'glass-mask.png\');
//INSERT INTO u181725448_cama.superposables (id, filename) VALUES (11, \'gas-mask.png\');
//INSERT INTO u181725448_cama.superposables (id, filename) VALUES (12, \'skull.png\');
//INSERT INTO u181725448_cama . superposables(id, filename) VALUES(13, \'skullik.png\');')