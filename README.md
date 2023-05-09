## NAMA PESERTA

Adi Widyawan

## POSISI

IT Web Developer

## JAWABAN

### Soal 1

`cd soal-1`
`node script.js x y`

Contoh:

`node script.js 0 3`

### Soal 2

`php -S localhost:8000 -t soal-2`

Buka `http://localhost:8000` di web browser.

### Soal 3

PHP 7.4.33
Laravel 8.6
MySQL 8.0

`composer create-project laravel/laravel:^8.0 --prefer-dist soal-3`

Jalankan `php artisan key:generate --ansi` untuk generate `APP_KEY` di `.env` local.

Copy `.env.example` menjadi `.env` dan ubah kredensial untuk database sesuaikan dengan local.

Buat database di MySQL.

`php artisan migrate` untuk menjalankan database migration.

`php artisan server --port 8000` untuk menjalankan server local.

**API**

Base URL `http://localhost:8000/api`

`GET /staffs`

`POST /staffs`

`GET /staffs/:id`

`PUT /staffs/:id`

`DELETE /staffs/:id`
