<?php

$host = "localhost";
$user = "root";
$pass = "R3c0rd!DF@";

$database = "ajax_test_db";

$connection_string = 'mysql:host=' . $host . ';dbname=' . $database;

$pdo = new PDO($connection_string, $user, $pass);
