# Contact Form PHP Native

Ini adalah proyek sederhana untuk membuat form kontak menggunakan PHP native. Proyek ini memungkinkan pengguna untuk mengirimkan nama, email, dan pesan mereka melalui formulir yang kemudian akan diproses dan disimpan dalam basis data.

## Fitur

- Formulir kontak dengan validasi dasar
- Penyimpanan data ke dalam database menggunakan PHP native
- Pesan konfirmasi setelah pengiriman berhasil


## Instalasi

1. Konfigurasi koneksi database pada file `process.php` di line 3 sampai 6:

    ```php
    <?php
    define('DB_HOST', 'localhost');
    define('DB_USER', 'root');
    define('DB_PASS', 'password');
    define('DB_NAME', 'database_name');
    ?>
    ```

2. Jangan lupa di import database yang bernama `contact_form_db.sql` terlebih dahulu

3. Pastikan server web Anda mengarahkan ke direktori proyek ini.

## Penggunaan

1. Akses aplikasi melalui browser dengan mengunjungi URL yang mengarah ke direktori proyek ini.
2. Isi formulir kontak dengan nama, email, dan pesan Anda.
3. Klik tombol "Submit" untuk mengirimkan formulir. Jika berhasil, pesan akan disimpan dalam database dan Anda akan menerima pesan konfirmasi.

## Struktur Proyek

Berikut adalah struktur direktori dari proyek ini:

