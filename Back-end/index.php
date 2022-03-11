<?php
header('Access-Control-Allow-Origin: *');
include("pdo.php");

if (isset($_REQUEST['register'])) {
    $userName = $_REQUEST['userName'];
    // $userPass = @password_hash($_REQUEST['userPass'], PASSWORD_BCRYPT);
    $userPass = $_REQUEST['userPass'];

    $sql = $pdo->prepare("INSERT INTO user (userId, userName, userPass) VALUES (NULL, '{$userName}', '{$userPass}')");
    $sql->execute();
}


if (isset($_REQUEST['registeredData'])) {
    header("content-type:application/json");
    $sql = $pdo->prepare("SELECT * FROM user");
    $sql->execute();

    $fetch = $sql->fetchAll(PDO::FETCH_OBJ);

    $res_json = json_encode($fetch);

    print($res_json);
}
