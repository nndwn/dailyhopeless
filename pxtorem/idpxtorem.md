---
title : "Menggunakan unit rem pada font-size"
date: "2023-03-10"
lang : "id"
slug : "menggunakan-unit-rem-pada-font-size"
head : "converter px and rem"
---

Pada CSS, banyak unit atau satuan ukuran yang berbeda yang dapat digunakan pada sebuah halaman web
seperti px, wv, ch, em, rem dan lainnya, tetapi dari sekian banyak unit tersebut hanya unit rem yang tepat untuk mengatur ukuran font secara responsive, rem adalah acronim dari root em yang memungkinkan mengatur gaya teks secara responsive berdasarkan root html pada sebuah browser, artinya satuan ini dapat menyesuaikan ukuran font yang terdapat pada browser secara bawaan.

Dasarnya semua browser modern memiliki nilai ukuran font yang sama yaitu 16px, tetapi ukuran bawaan itu masih menggunakan unit pixel, unit pixel sangat tidak di anjurkan dalam mengatur ukuran dalam website karena sifatnya tetap atau fixed, berbeda dengan unit rem yang sifatnya menyesuaikan atau relative, sehingga dengan menggunakan unit rem ukuran bawaan itu dapat menjadi satu nilai, seperti berikut ini :

    1 rem = 16px
    2 rem = 32 px

Ukuran 16px pada ukuran font tidak harus menjadi 1 rem , user dapat mengatur ukuran font pada browser mereka tentukan sendiri dan bisa saja menjadi 18px menjadi 1 rem ,  hal ini berhubungan dengan aksesibilitas user.

## Kesimpulan

Jadi pengembang tidak perlu repot lagi memikirkan ukuran font di berbagai layar penguna karena pada dasarnya rem mengikutin ukuran bawaan pada pengaturan browser. selain itu kita tidak perlu khawatir lagi perubahan ukuran jika font terdapat didalam parent karena ukuran rem berdasarkan root html pada halaman situs.