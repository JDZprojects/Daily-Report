# Sript explain

## dataProses.js
data proses ini memproses data csv menjadi 2d array sehingga dapat lebih mudah digunakan proses data ini langung berjalan ketika file laporan diupload dan memproses data menjadi array.

### define delimeter
https://github.com/JoshDavZ/Daily-Report/blob/ada9526fab3d7c631d2131815172b18dd4ff33f5/script/dataProses.js#L4-L14
code ini melihat file csv untuk menentukan delimeter yang dipakai dalam file. code ini akan memastikan delimeter yang dipakai berdasarkan delimeter pertama yang ditemukan sehingga data pertama tidak boleh memiliki titik(.), koma(,), dan titik-koma(;).

### split line
https://github.com/JoshDavZ/Daily-Report/blob/ada9526fab3d7c631d2131815172b18dd4ff33f5/script/dataProses.js#L16-L41
code ini akan memotong data berdasarkan kolom yang ditandai oleh delimeter

* mengambil baris pertama dan membagi data perkolom
https://github.com/JoshDavZ/Daily-Report/blob/ada9526fab3d7c631d2131815172b18dd4ff33f5/script/dataProses.js#L45-L46

* split data perbaris dan menjadi array
https://github.com/JoshDavZ/Daily-Report/blob/ada9526fab3d7c631d2131815172b18dd4ff33f5/script/dataProses.js#L51

* map data value
https://github.com/JoshDavZ/Daily-Report/blob/ada9526fab3d7c631d2131815172b18dd4ff33f5/script/dataProses.js#L54-L77

## dataFilter.js
* filterByColumn(csvData, columnTitle, searchChar, mode = 'include')
https://github.com/JoshDavZ/Daily-Report/blob/ada9526fab3d7c631d2131815172b18dd4ff33f5/script/dataFilters.js#L9-L23

* filterByMultipleColumns(csvData, conditions)
conditions(array): Array of {column, char, mode} 
    column = kolom yang ingin di filter
    char = kata yang ingin di filter
    mode = ('exact', 'include', 'exclude')
https://github.com/JoshDavZ/Daily-Report/blob/ada9526fab3d7c631d2131815172b18dd4ff33f5/script/dataFilters.js#L31-L49

* function SeverityFilter(csvData, SeverityType = [])
filter khusus severity digunakan untuk menunjukkan sesuai dengan severity yang dibutuhkan

https://github.com/JoshDavZ/Daily-Report/blob/ada9526fab3d7c631d2131815172b18dd4ff33f5/script/dataFilters.js#L61-L78

* Sort(sorting, reference, sortBy, sortReference = null)
https://github.com/JoshDavZ/Daily-Report/blob/ada9526fab3d7c631d2131815172b18dd4ff33f5/script/dataFilters.js#L89-L109

## RenderTable.js
file ini membangun tabel dari awal mulai dari tabel warraper, row table, dan table cell. masing-masing row dan cell dapat diubah sesuai keinginan. file dimulai dengan
https://github.com/JoshDavZ/Daily-Report/blob/e9c7c6050baddaefd2ed8e2d6fe38dd25ab581de/script/RenderTable.js#L5-L11
code ini memastikan container untuk tabel sudah ada pada file index.html

https://github.com/JoshDavZ/Daily-Report/blob/e9c7c6050baddaefd2ed8e2d6fe38dd25ab581de/script/RenderTable.js#L13-L25
code ini memastikan tabel bersih dan tidak ada tabel sebelumnya yang masuk

* bars(val, target, destinatio) 
fungsi ini dipakai pada rendering bar dalam cell durasi. fungsi ini menampilkan jika durasi semakin mendekati target maka bar merah akan semakin panjang. Jika durasi melebihi target bar akan sepenuhnya merah.
https://github.com/JoshDavZ/Daily-Report/blob/e9c7c6050baddaefd2ed8e2d6fe38dd25ab581de/script/RenderTable.js#L218-L228

## utility.js
https://github.com/JoshDavZ/Daily-Report/blob/ada9526fab3d7c631d2131815172b18dd4ff33f5/script/utility.js#L1-L20
code ini menampilkan waktu saat ini


## main.js
menggunakan semua fungsi untuk menampilkan/menjalankan seluruh logika

