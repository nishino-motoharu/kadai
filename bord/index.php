<?php require('dbconnect.php'); ?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>西野の掲示板</title>
</head>
<body>
<header>
    <h1>西野の掲示板</h1>
    <a class="post" href="input.html"><strong>新規投稿</strong></a>
</header>
<div class="container">
<?php
    $messages = $db->query('SELECT * FROM posts');
    while ($message = $messages->fetch()): ?>
        <?php print($message['message']); ?>
        <br>
        <?php print('投稿ID:' . $message['id']); ?>
        <?php print('投稿者名:' . $message['name']); ?>
        <?php print('投稿日時：' . $message['modified']); ?>
        <a href="delete.php?id=<?php print($message['id']); ?>">削除</a>
        <br>
        <hr>
    <?php endwhile; ?>
    <a href="all_delete.php">すべて削除</a>
</div>
</body>
</html>