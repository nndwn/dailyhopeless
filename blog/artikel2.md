---
title : "Perbedaan gameObject.transform.position += Time.deltaTime dan Translate() dalam Unity"
date : "2023-07-27"
category: "blog"
slug : "Perbedaan-game-object-translate"
head : "blog"
keyword: "unity,Translate Function,game developer, API Unity"
---

# Perbedaan gameObject.transform.position += Time.deltaTime dan Translate() dalam Unity

Ada beberapa perbedaan antara gameObject.transform.position += Time.deltaTime dan Translate() dalam Unity:

## 1. Pemakaian

gameObject.transform.position += Time.deltaTime digunakan untuk mengubah posisi dari komponen Transform secara langsung. Anda mengakses komponen Transform dari gameObject dan mengubah properti position dengan menambahkan nilai pergerakan ke dalam komponen tersebut.

Translate() adalah sebuah fungsi yang ada pada komponen Transform. Anda memanggil fungsi ini untuk menggerakkan objek dengan menyediakan nilai pergerakan sebagai parameter.

## 2.Relative vs. Absolute

gameObject.transform.position += Time.deltaTime merupakan pergerakan absolute, artinya, objek akan bergerak ke posisi tertentu dalam dunia 3D berdasarkan perubahan langsung pada koordinatnya.

Translate() dapat menggerakkan objek secara relative atau absolute, tergantung pada nilai parameter relativeTo. Jika Anda menggunakan Space.Self, objek akan bergerak relatif terhadap arah depan (sumbu Z) dari posisinya sendiri. Jika Anda menggunakan Space.World, objek akan bergerak relatif terhadap sumbu dunia 3D.

## 3.Perhitungan

gameObject.transform.position += Time.deltaTime mengharuskan Anda melakukan perhitungan sendiri untuk menghasilkan nilai pergerakan yang tepat. Anda perlu menggabungkan input pergerakan, kecepatan, dan Time.deltaTime untuk mencapai pergerakan yang konsisten terlepas dari perubahan frame rate.
Translate() secara otomatis menangani perhitungan Time.deltaTime untuk Anda. Anda hanya perlu memberikan nilai pergerakan dan fungsi ini akan menghitung pergerakan yang tepat berdasarkan waktu yang berlalu sejak render terakhir.

## 4.Keterbacaan dan kemudahan penggunaan

Translate() umumnya lebih mudah dibaca dan lebih mudah digunakan karena Anda hanya perlu memberikan vektor pergerakan dan menyebutkan apakah pergerakan dilakukan relatif terhadap objek itu sendiri atau terhadap dunia 3D.

gameObject.transform.position += Time.deltaTime bisa lebih rumit dan memerlukan perhitungan tambahan, membuat kode menjadi lebih kompleks, terutama ketika Anda ingin mengatur banyak pergerakan dan efek sekaligus.

## Kesimpulan

Secara keseluruhan, kedua pendekatan dapat digunakan untuk menggerakkan objek, dan keduanya memiliki situasi di mana mereka lebih sesuai tergantung pada kompleksitas pergerakan yang Anda inginkan. Jika Anda menginginkan pergerakan sederhana atau hanya perlu menggerakkan objek secara langsung ke posisi tertentu, gameObject.transform.position += Time.deltaTime bisa menjadi pilihan yang masuk akal. Namun, jika Anda membutuhkan lebih banyak fleksibilitas dan kemudahan, serta menginginkan pergerakan relatif atau menggabungkan dengan efek-efek lain, Translate() adalah pilihan yang lebih disarankan.