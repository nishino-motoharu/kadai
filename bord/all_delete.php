<?php require('dbconnect.php'); ?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php
    $all_delete = $db->prepare('DELETE FROM posts');
    $all_delete->execute();
    echo 'すべて削除しました';
    ?>
    <a href="index.php">投稿一覧</a>
</body>