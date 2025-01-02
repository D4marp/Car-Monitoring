# Aplikasi Pemesanan Kendaraan

## Daftar Username dan Password

Berikut adalah daftar username dan password yang digunakan dalam aplikasi ini:

| Username             | Password    | Keterangan |
| -------------------- | ----------- | ---------- |
| admin@example.com    | admin123    | Admin      |
| approver@example.com | approver123 | Approver   |

## Spesifikasi Sistem

### Versi Database

-   **MySQL**: 8.0.23

### Versi PHP

-   **PHP**: 8.2.12

### Framework yang Digunakan

-   **Laravel**: 11.x
-   **Inertia.js**: 0.11.x
-   **Laravel Breeze**: 1.x

## Panduan Penggunaan Aplikasi

### 1. Persiapan Lingkungan

Sebelum memulai, pastikan bahwa Anda memiliki persyaratan berikut:

-   **PHP 8.2.12** atau yang lebih baru.
-   **MySQL 8.0.23** atau yang lebih baru.
-   **Node.js** dan **NPM** untuk mengelola dependensi frontend.

### 2. Instalasi

Ikuti langkah-langkah berikut untuk menginstal aplikasi ini:

1. **Clone Repository**

    ```bash
    git clone https://github.com/username/repository-name.git
    cd repository-name
    ```

2. **Instal Dependensi PHP** Instal dependensi PHP menggunakan Composer:

    ```bash
    composer install
    ```

3. **Instal Dependensi Frontend** Instal dependensi frontend menggunakan NPM:

    ```bash
    npm install
    ```

4. **Salin** File .env **Salin** file .env.example menjadi .env

    ```bash
    cp .env.example .env
    ```

5. **Konfigurasi Database**

    ```bash
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=nama_database
    DB_USERNAME=root
    DB_PASSWORD=
    ```

6. **Generate Kunci Aplikasi**

    ```bash
    php artisan key:generate
    ```

7. **Migrasi Database**

    ```bash
    php artisan migrate
    ```

8. **Generate Seeder**

    ```bash
    php artisan db:seed
    ```

9. **Jalankan Server**

    ```bash
    npm run dev
    php artisan ser
    ```

### 3. Penggunaan Aplikasi

-   Login: Masukkan username dan password untuk masuk ke aplikasi.
-   Dashboard Admin: Admin dapat mengelola pemesanan kendaraan, kendaraan yang tersedia, serta melihat grafik penggunaan kendaraan, dan juga export.
-   Dashboard Approver: Approver dapat mengapprove order yang sudah dibuat admin.
