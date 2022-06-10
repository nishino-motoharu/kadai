<?php require('dbconnect.php')?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>西野の掲示板</title>
</head>
<body>
    <?php
    $message = $_POST['message'];
    $name = $_POST['name'];
    if(strlen($message) >= 1 && strlen($message) <= 200){
        $statement = $db->prepare('INSERT INTO posts (message,name) values(?,?)');
        $statement->execute(array($_POST['message'],$_POST['name']));

        echo '投稿を送信しました';
    }else{
        echo '投稿エラー: 200文字以内で入力してください';
    }
    ?>
    <a href="index.php">投稿一覧へ</a>
</body>
</html>