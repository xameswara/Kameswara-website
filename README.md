# Aplikasi Manajemen Tugas dengan Integrasi Kalender

Aplikasi ini adalah sebuah sistem manajemen tugas sederhana yang diintegrasikan dengan kalender, dibuat menggunakan Flask, SQLAlchemy, dan WTForms.

## Fitur Utama

1. Menambahkan tugas baru dengan judul, deskripsi, dan tanggal jatuh tempo
2. Melihat daftar semua tugas
3. Menampilkan tugas dalam tampilan kalender

## Persyaratan

- Python 3.7+
- Flask
- Flask-SQLAlchemy
- Flask-WTF

## Instalasi

1. Clone repositori ini:
   ```
   git clone https://github.com/username/task-manager-calendar.git
   cd task-manager-calendar
   ```

2. Buat dan aktifkan virtual environment:
   ```
   python -m venv venv
   source venv/bin/activate  # Untuk Unix atau MacOS
   venv\Scripts\activate  # Untuk Windows
   ```

3. Instal dependensi yang diperlukan:
   ```
   pip install -r requirements.txt
   ```

## Menjalankan Aplikasi

1. Jalankan aplikasi dengan perintah:
   ```
   python app.py
   ```

2. Buka browser dan akses `http://localhost:5000`

## Penggunaan

1. Halaman Utama: Menampilkan daftar semua tugas yang telah dibuat.
2. Tambah Tugas: Klik "Tambah Tugas" di menu navigasi untuk menambahkan tugas baru.
3. Kalender: Klik "Kalender" di menu navigasi untuk melihat tugas dalam tampilan kalender.

## Pengembangan Selanjutnya

- Implementasi fitur edit dan hapus tugas
- Menambahkan autentikasi pengguna
- Meningkatkan tampilan kalender dengan library JavaScript seperti FullCalendar
- Menambahkan fitur pengingat untuk tugas yang mendekati tenggat waktu

