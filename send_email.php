<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = htmlspecialchars($_POST["nama"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $pesan = htmlspecialchars($_POST["pesan"]);
    
    $to = "sakdiyahh845@gmail.com"; 
    $subject = "Pesan Baru dari $nama";
    $body = "Nama: $nama\nEmail: $email\n\nPesan:\n$pesan";
    $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

    if (mail($to, $subject, $body, $headers)) {
        echo "Pesan berhasil dikirim!";
    } else {
        echo "Maaf, terjadi kesalahan saat mengirim pesan.";
    }
} else {
    echo "Akses tidak diizinkan!";
}
?>
