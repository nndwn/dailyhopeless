---
title : "Perbedaan Update, Fixed Update, Late Update pada Unity"
date : "2023-07-29"
category: "blog"
slug : "Perbedaan-update-fixed-update-late-update"
head : "blog"
keyword: "unity,update,fixed update, Late Update,game developer, API Unity"
---

# Perbedaan Update, Fixed Update, Late Update pada Unity

Di Unity, terdapat tiga metode yang berbeda untuk mengatur pembaruan (update) pada script yang melekat pada objek dalam permainan. Ketiga metode tersebut adalah Update, FixedUpdate, dan LateUpdate. Masing-masing memiliki tujuan dan waktu pemanggilan yang berbeda. Berikut adalah perbedaan antara ketiganya:

## Update

*   Update dipanggil setiap frame saat permainan sedang berjalan.
*   Metode ini cocok untuk mengatur logika permainan yang tergantung pada waktu, seperti pergerakan objek berdasarkan input pemain atau efek yang memerlukan pembaruan cepat.
*   Biasanya digunakan untuk mengendalikan hal-hal yang berubah setiap frame, sehingga update yang dilakukan akan sering.

## FixedUpdate


*   FixedUpdate dipanggil secara teratur dengan interval waktu yang tetap.
*   Metode ini cocok untuk mengatur fisika permainan, karena pemanggilannya konsisten dan independen dari kecepatan frame per detik (FPS).
*   Fisika yang diatur dalam FixedUpdate akan menjadi lebih konsisten pada berbagai platform dengan FPS yang berbeda.

## LateUpdate

*   LateUpdate dipanggil setelah semua pembaruan pada frame saat ini selesai dieksekusi.
*   Metode ini cocok untuk mengatur logika yang harus diterapkan setelah semua Update dilakukan, misalnya untuk mengikuti atau menyesuaikan posisi kamera setelah objek berpindah posisi.
*   LateUpdate berguna ketika Anda ingin memastikan bahwa semua pembaruan frame sebelumnya telah dilakukan sebelum Anda menerapkan logika Anda.

## Kesimpulan

*   Gunakan Update untuk logika permainan umum dan pembaruan setiap frame.
*   Gunakan FixedUpdate untuk mengatur fisika karena pemanggilannya tetap pada interval waktu tertentu.
*   Gunakan LateUpdate untuk mengatur logika yang membutuhkan akses terhadap hasil pembaruan pada frame saat ini dan diinginkan agar diterapkan setelah semua pembaruan selesai dilakukan.