<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail -> CharSet = 'UTF-8';
    $mail -> IsHTML(true);
t
    $mail -> setFrom('trident.it.ua@gmail.com');
    $mail -> addAddress('trident.it.ua@gmail.com');
    $mail -> Subject = 'Заказ'

    $body = '<h1>Заказ</h1>';
    $body = '<p>Имя:'.$_POST['name'].'</p>';
    $body = '<p>Почта:'.$_POST['emeil'].'</p>';
    $body .= '<p>Телевон:'.$_POST['phon'].'</p>';

    $mail -> Body = $body;

    if(!$mail -> send()) {
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>