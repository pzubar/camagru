<?php
/**
 * Created by PhpStorm.
 * User: Admin
 * Date: 13.11.2018
 * Time: 21:05
 */
ini_set('display_errors', 1);
error_reporting(E_ALL);

function debug($str) {
    echo '<pre>';
    var_dump($str);
    echo '<pre>';
    exit;
}