<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\SMTP;
  use PHPMailer\PHPMailer\Exception;

  require 'PHPMailer/Exception.php';
  require 'PHPMailer/PHPMailer.php';
  require 'PHPMailer/SMTP.php';

  $mail = new PHPMailer(true);

  // Записываем в переменные поля форм по атрибуту name

  $userName = $_POST['user-name'];
  $userPhone = $_POST['user-phone'];
  $userEmail = $_POST['user-email'];

  //Скрытые поля
  $userHiddenImg = $_POST['user-hidden-img'];
  $userHiddenText = $_POST['user-hidden-text'];

  //Шаблон письма
  $mailTemplate = "
                    <div style='background-color: darkgray;'>
                      <img src='$userHiddenImg' style='width: 200px; height: 200px;  object-fit: cover;'>
                      <p>$userHiddenText.</p>
                      <p style='color: red; font-family: arial, helvetica, sans-serif; font-size: 30px; line-height: 120%;'>Имя: $userName.</p>
                      <p>Телефон: $userPhone.</p>
                      <p>Почта: $userEmail.</p>
                    </div>
                  ";

  try {
    //Server settings
    $mail->SMTPDebug  = SMTP::DEBUG_SERVER;
    $mail->CharSet    = "utf-8";
    $mail->isSMTP();
    $mail->Host       = 'smtp.yandex.ru';                       //SMTP сервер, зависит от почты отправки
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'ligaatest@yandex.ru';                  //SMTP имя пользователя (почта с которой отправляем письмо)
    $mail->Password   = '';                     //SMTP password (для яндех и мэйл ру генерируем по ссылке в инструкции, для gmail это пороль от почты)
    $mail->SMTPSecure = 'ssl';                                  //Шифрование
    $mail->Port       = 465;                                    //Порт

    //Recipients
    $mail->setFrom('ligaatest@yandex.ru');                       //Откуда отправляем
    $mail->addAddress('ligamailtest@gmail.com');                 //Куда отправляем


    //Content
    $mail->isHTML(true);                                         //Письмо в формате HTML для использования тегов
    $mail->Subject = "Заявка с сайта example.com";               //Тема письмы
    $mail->Body = $mailTemplate; //Тело письмы

    $mail->send();
    echo 'Письмо отправлено!';
  } catch (Exception $e) {
    echo "Письмо не отправлено!. Ошибка отправки: {$mail->ErrorInfo}";
  }
?>
