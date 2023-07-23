---
title : "Fungsi dari IComparable pada unity"
date : "2023-07-23"
category: "blog"
slug : "Fungsi-dari-IComparable-pada-unity"
head : "blog"
keyword: "unity,IComparable,game developer, API Unity"
---


# Fungsi dari IComparable pada unity

Di Unity, IComparable adalah sebuah antarmuka (interface) yang termasuk dalam .NET Framework dan berfungsi untuk memberikan kemampuan perbandingan terhadap objek-objek yang dapat dibandingkan. Antarmuka ini digunakan dalam pemrograman berorientasi objek untuk memungkinkan pengurutan dan perbandingan objek-objek berdasarkan kriteria tertentu.

Dalam konteks Unity, IComparable digunakan untuk memberikan kemampuan perbandingan pada kelas-kelas yang mengimplementasikan antarmuka ini. Dengan mengimplementasikan IComparable dapat memberikan aturan khusus untuk membandingkan objek-objek tersebut.

Contoh penggunaan IComparable dalam Unity adalah saat Anda memiliki kelas objek yang ingin diurutkan berdasarkan suatu atribut atau properti tertentu. Misalnya, Anda memiliki kelas Player dengan atribut "Score" yang menunjukkan skor pemain. Anda ingin mengurutkan list pemain berdasarkan skor tertinggi ke terendah. Dalam situasi seperti ini, Anda bisa mengimplementasikan IComparable di kelas Player untuk menyediakan aturan perbandingan berdasarkan skor:

```
using System;

public class Player : IComparable<Player>
{
    public string Name { get; set; }
    public int Score { get; set; }

    public Player(string name, int score)
    {
        Name = name;
        Score = score;
    }

    // Implementasi metode CompareTo dari IComparable
    public int CompareTo(Player other)
    {
        // Membandingkan berdasarkan skor
        // Jika skor this lebih besar, kembalikan nilai positif
        // Jika skor this lebih kecil, kembalikan nilai negatif
        // Jika skor this sama dengan skor other, kembalikan 0
        return Score.CompareTo(other.Score);
    }
}

```

Setelah Anda mengimplementasikan IComparable pada kelas Player, Anda dapat menggunakan fungsi-fungsi pengurutan bawaan, seperti List.Sort() untuk mengurutkan daftar pemain berdasarkan skor mereka.

```
List<Player> players = new List<Player>();
players.Add(new Player("John", 100));
players.Add(new Player("Alice", 85));
players.Add(new Player("Bob", 120));

players.Sort();

foreach (var player in players)
{
    Debug.Log(player.Name + " - " + player.Score);
}
```

Hasil keluaran dari contoh di atas akan mengurutkan pemain berdasarkan skor dari yang tertinggi ke terendah:

```
Bob - 120
John - 100
Alice - 85
```

Dengan menggunakan IComparable, Anda dapat dengan mudah mengurutkan objek-objek Anda berdasarkan kriteria tertentu sesuai kebutuhan dalam proyek Unity Anda.

