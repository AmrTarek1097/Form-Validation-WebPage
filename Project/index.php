<?php

$firstName=$_POST["fName"];
$lastName=$_POST["lName"];
$phone=$_POST["phone"];
$email=$_POST["email"];

var_dump($firstName, $lastName, $phone, $email);



//Database connection

$conn = new mysqli ('localhost', 'root' , '', 'formdb');
if($conn->connect_errno){
    die('connecion faild :' .$conn->connect_errno);
}else{
    $stmt = $conn->prepare("insert into registration(firstName, lastName, phone, email) values(?, ?, ?, ?)");
    $stmt->bind_param("ssis",$firstName,$lastName,$phone,$email);
    $stmt->execute();
    echo ". . .registration successfully. . .";
    $stmt->close();
    $conn->close();
}   
