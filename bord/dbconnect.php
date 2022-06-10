<?php
try{
    $db = new PDO('mysql:dbname=bord;host=localhost; charset=utf8mb4','root','');
} catch(PDOException $e){
    echo '接続エラー:' . $e->getMessage();
}
?>