<?php

    if (!$_POST["DB_USER"] || $_POST["DB_PASSWORD"] == "" || $_POST["DB_NAME"] == "" ||
        $_POST["submit"] != "OK") {
        header('Location: /install?msqlogin=root&error=occured');
        exit ('Installing failed: empty field in form occured');
    }

    $server = "mysql:host=localhost";
    $username = $_POST["DB_USER"];
    $password = $_POST["DB_PASSWORD"];
    $dbname = $_POST["DB_NAME"];

    file_put_contents('database.php', "<?php \$DB_DSN = '$server';
            \$DB_USER = '$username';
            \$DB_PASSWORD = '$password';
            \$DB_NAME = '$dbname'; ?>");
    include('./database.php');

    try {
        $server = new PDO($DB_DSN, $DB_USER, $DB_PASSWORD);
        $server->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $server->query("DROP DATABASE IF EXISTS $DB_NAME");
        $server->query("CREATE DATABASE $DB_NAME");
        $server = null;
    } catch (PDOException $exeption) {
        header('Location: ../install_form.php?msqlogin=root&error=badinput');
        exit ('Connection failed: ' . $exeption->getMessage());
    }

    try {
        $db = new PDO($DB_DSN.';dbname='.$DB_NAME, $DB_USER, $DB_PASSWORD);
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $db->query("CREATE TABLE IF NOT EXISTS users (
                uid INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, 
                username VARCHAR(32) NOT NULL,
                password VARCHAR(128) NOT NULL,
                email TEXT NOT NULL,
                hash VARCHAR(128) NOT NULL,
                active BOOLEAN NOT NULL DEFAULT FALSE
                )");
    } catch (PDOException $exeption) {
        echo 'User db creation failed: ' . $exeption->getMessage();
    }

    try {
        $db->query("CREATE TABLE IF NOT EXISTS photo (
                id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, 
                postdate TIMESTAMP NOT NULL,
                author_id INT(11) UNSIGNED NOT NULL,
                count_like int(11) default 0
                )");
    } catch (PDOException $exeption) {
        echo 'Photos db creationfailed: ' . $exeption->getMessage();
    }

    try {
        $db->query("CREATE TABLE IF NOT EXISTS comments (
                id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, 
                postdate TIMESTAMP NOT NULL,
                author_id INT(11) UNSIGNED NOT NULL
                )");
    } catch (PDOException $exeption) {
        echo 'Comments db creationfailed: ' . $exeption->getMessage();
    }

    try {
        $db->query("CREATE TABLE IF NOT EXISTS likes (
                id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, 
                author_id INT(11) UNSIGNED NOT NULL
                )");
    } catch (PDOException $exeption) {
        echo 'Like db creationfailed: ' . $exeption->getMessage();
    }
    $db = null;

//    header('Location: ../index.php');
    echo "Installed";
    /*
     * create table comments
(
  id           int auto_increment,
  postdate     datetime default current_timestamp() not null,
  comment_text text                                 not null,
  author_id    int                                  not null,
  post_id      int                                  not null,
  constraint comments_id_uindex
  unique (id)
)
  charset = latin1;

alter table comments
  add primary key (id);

create table likes
(
  id        int auto_increment
    primary key,
  author_id int not null,
  post_id   int not null
)
  charset = latin1;

create table posts
(
  id        int auto_increment
    primary key,
  postdate  datetime default current_timestamp() not null,
  author_id int                                  not null,
  filename  varchar(128)                         not null
)
  charset = latin1;

create table superposables
(
  id       int auto_increment
    primary key,
  filename varchar(64) default 'NULL' null
);

create table users
(
  id            int auto_increment
    primary key,
  username      varchar(16)                          not null,
  password      varchar(128)                         not null,
  email         varchar(320)                         not null,
  register_time datetime default current_timestamp() not null,
  is_activated  tinyint(1) default '0'               not null,
  hash          varchar(48)                          not null,
  send_mail     tinyint(1) default '1'               not null
)
  charset = latin1;

     */