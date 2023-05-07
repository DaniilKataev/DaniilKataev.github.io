<?php 
echo var_dump($_POST);      //Получаем POST запрос
$name = $_POST['name'];     //имя пользователя
$email = $_POST['email'];   //почта
$text = $_POST['text'];     //сообщение пользовтеля
//подключаем файл и создаем объект сообщения
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
//Кодировка сообщения
$mail->CharSet = 'utf-8';

$mail->isSMTP();                                      // использование техн. SMTP
$mail->Host = 'smtp.mail.ru';                         // url почты
$mail->SMTPAuth = true;                               // авторизация
$mail->Username = 'kataevwebdev@mail.ru';             // наш логин
$mail->Password = 'reJmXL8DYi2mQ8LcyALN';             // пароль для внешних ресурсов
$mail->SMTPSecure = 'ssl';                            // тип подключения
$mail->Port = 465;                                    // порт сервера
 
$mail->setFrom('kataevwebdev@mail.ru', 'Web-разработчик Даниил Катаев');   // От кого письмо 
$mail->addAddress('dkataev1@vk.com');                 // получаетль
$mail->isHTML(true);                                  // тип сообщения - html

$mail->Subject = 'Заявка с сайта';          //заголовок и сообщение
$mail->Body    = '                          
		Пользователь оставил данные <br> 
        Имя: ' . $name . ' <br>
        E-mail: ' . $email . '<br>
        Сообщение: ' . $text . '';

$sendToDeveloper = $mail->send();       //отправка сообщения

if(!$sendToDeveloper) { //если произошла ошибка, то возвращаем на клиент ошибку
    return false;
} else {                //в случае успешной отправки сообщение разработчику 
                        //составляем сообщение для клиента и отправляем ему на почту
    $mail->clearAllRecipients();   //удаляем из объекта адрес разработчика                  
    $mail->addAddress($email);     //добавляем адресс клиента
    $mail->Subject = 'Web-разработчик Даниил Катаев';
    $mail->Body    = '
            Ваше сообщение успешно отправлено! <br> 
            Разработчик с Вами свяжется в самое ближайшее время';
    if(!$mail->send()) {
        return false;
    } else {
        return true;
    }
    return true;
}
?>

