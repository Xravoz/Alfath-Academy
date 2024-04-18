<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // قم بتغيير البريد الإلكتروني إلى البريد الذي ترغب في إرسال البيانات إليه
    $to_email = "gg20205959@gmail.com";
    
    // استقبال البيانات من النموذج
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // تهيئة المحتوى البريدي
    $subject = "رسالة جديدة من " . $name;
    $body = "اسم: " . $name . "\n";
    $body .= "البريد الإلكتروني: " . $email . "\n\n";
    $body .= "رسالة:\n" . $message;

    // إرسال البريد
    if (mail($to_email, $subject, $body)) {
        echo "تم إرسال الرسالة بنجاح!";
    } else {
        echo "حدث خطأ أثناء إرسال الرسالة.";
    }
} else {
    echo "هذا النموذج يتعامل مع طلبات POST فقط.";
}
?>