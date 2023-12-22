<?php
$firstname=$_REQUEST['firstname'];
$secondtname=$_REQUEST['secondname'];
$address=$_REQUEST['address'];


if (isset ($_POST['btnset']))

{
    $host="localhost";
    $user="root";
    $password="";
    $db="gm_tech_98";

    $conn=mysqli_connect($host,$user,$password, $db);
    $insert="insert into technologtech_98 values ('$firstname',$secondtname,$address)";
    mysqil_query($conn,$insert);

    if ($conn){
        echo("<h1 style ='color:green;'>yourregistration is done !,/h1">);
    }
    else{

        echo("<h1 style ='color:red;'>your registration is failed !,/h1">);
    }
    
   

}