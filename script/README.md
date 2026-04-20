# Sript explain

## dataProses.js
data proses ini memproses data csv menjadi 2d array sehingga dapat lebih mudah digunakan proses data ini langung berjalan ketika file laporan diupload dan memproses data menjadi array.

### define delimeter
https://github.com/JoshDavZ/Daily-Report/blob/1164d57156b2cd4075ce628db007d492bb6791c4/script/dataProses.js#L4-L14
code ini melihat file csv untuk menentukan delimeter yang dipakai dalam file. code ini akan memastikan delimeter yang dipakai berdasarkan delimeter pertama yang ditemukan sehingga data pertama tidak boleh memiliki titik(.), koma(,), dan titik-koma(;).

### split line
https://github.com/JoshDavZ/Daily-Report/blob/1164d57156b2cd4075ce628db007d492bb6791c4/script/dataProses.js#L16-L38
code ini akan memotong data berdasarkan kolom yang ditandai oleh delimeter

### mengambil baris pertama dan membagi data perkolom
https://github.com/JoshDavZ/Daily-Report/blob/1164d57156b2cd4075ce628db007d492bb6791c4/script/dataProses.js#L42-L43

### split data perbaris dan menjadi array
https://github.com/JoshDavZ/Daily-Report/blob/1164d57156b2cd4075ce628db007d492bb6791c4/script/dataProses.js#L47

### map data value
https://github.com/JoshDavZ/Daily-Report/blob/1164d57156b2cd4075ce628db007d492bb6791c4/script/dataProses.js#L48-L67

## dataFilter.js
### filterByColumn(csvData, columnTitle, searchChar, mode = 'include')
https://github.com/JoshDavZ/Daily-Report/blob/1164d57156b2cd4075ce628db007d492bb6791c4/script/dataFilters.js#L9-L23

### filterByMultipleColumns(csvData, conditions)
conditions(array): Array of {column, char, mode} 
* column = kolom yang ingin di filter
* char = kata yang ingin di filter
* mode = ('exact', 'include', 'exclude')
https://github.com/JoshDavZ/Daily-Report/blob/1164d57156b2cd4075ce628db007d492bb6791c4/script/dataFilters.js#L30-L48

### function SeverityFilter(csvData, SeverityType = [])
filter khusus severity digunakan untuk menunjukkan sesuai dengan severity yang dibutuhkan
https://github.com/JoshDavZ/Daily-Report/blob/1164d57156b2cd4075ce628db007d492bb6791c4/script/dataFilters.js#L58-L73

### Sort(sorting, reference, sortBy, sortReference = null)
https://github.com/JoshDavZ/Daily-Report/blob/1164d57156b2cd4075ce628db007d492bb6791c4/script/dataFirters.js#L83-L102

## RenderTable.js
file ini membangun tabel dari awal mulai dari tabel warraper, row table, dan table cell. masing-masing row dan cell dapat diubah sesuai keinginan. file dimulai dengan
https://github.com/JoshDavZ/Daily-Report/blob/1164d57156b2cd4075ce628db007d492bb6791c4/script/RenderTable.js#L5-L11
code ini memastikan container untuk tabel sudah ada pada file index.html

https://github.com/JoshDavZ/Daily-Report/blob/1164d57156b2cd4075ce628db007d492bb6791c4/script/RenderTable.js#L12-L23
code ini memastikan tabel bersih dan tidak ada tabel sebelumnya yang masuk

### bars(val, target, destinatio) 
fungsi ini dipakai pada rendering bar dalam cell durasi. fungsi ini menampilkan jika durasi semakin mendekati target maka bar merah akan semakin panjang. Jika durasi melebihi target bar akan sepenuhnya merah.
https://github.com/JoshDavZ/Daily-Report/blob/1164d57156b2cd4075ce628db007d492bb6791c4/script/RenderTable.js#L189-L199

## utility.js
https://github.com/JoshDavZ/Daily-Report/blob/1164d57156b2cd4075ce628db007d492bb6791c4/script/utility.js#L1-L11
code ini menampilkan waktu saat ini


## main.js
menggunakan semua fungsi untuk menampilkan/menjalankan seluruh logika
