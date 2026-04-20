# Daily-Report
Data yang perlu ditambahkan dalam report => STO DATABASE,BRANCH DATABASE,AREA DATABASE

## Index.html
### Link Requiered file
https://github.com/JoshDavZ/Daily-Report/blob/ada9526fab3d7c631d2131815172b18dd4ff33f5/index.html#L4-L12
https://github.com/JoshDavZ/Daily-Report/blob/ada9526fab3d7c631d2131815172b18dd4ff33f5/index.html#L88-L91

### Menampilkan Logo
Bagian ini dapat di edit sesuai kebutuhan tampilan logo

* src="[menunjuk lokasi gambar]"
* style="[mengedit ukuran dan penempatan logo]"
https://github.com/JoshDavZ/Daily-Report/blob/ada9526fab3d7c631d2131815172b18dd4ff33f5/index.html#L16-L20

### Title Report
https://github.com/JoshDavZ/Daily-Report/blob/ada9526fab3d7c631d2131815172b18dd4ff33f5/index.html#L22-L31

Text yang ingin di tampilkan dapat diubah pada bagian
<h1></h1>

<sript>renderDateTime();</script>
memanggil fungsi dari script/utility.js
https://github.com/JoshDavZ/Daily-Report/blob/655e1a813c3eabf8821f346657a9bdfa18ec181e/script/utility.js#L1-L11
yang secara otomatis menampilkan tanggal dan jam saat membuka dashboard

### Severity Counter / Floating Box
https://github.com/JoshDavZ/Daily-Report/blob/ada9526fab3d7c631d2131815172b18dd4ff33f5/index.html#L33-L48
Bagian ini akan menunjukkan jumlah tiket dengan severity tertentu dan jika di click akan filter data berdasarkan severity yang dipilih

box harus berada didalam wrapper karena ada logika css yang berjalan

### Tabel
https://github.com/JoshDavZ/Daily-Report/blob/ada9526fab3d7c631d2131815172b18dd4ff33f5/index.html#L79-L84

Bagian ini menampilkan tombol yang akan digunakan untuk memasukkan file csv untuk menjadi laporan harian dan setelah dimasukkan web akan membuat tabel menampilkan semua tiket dengan severity
* Premium Preventive 
* Premium
* Critical
* Major
* Minor (durasinya diatas 12 jam) 
* Low (durasinya diatas 20 jam)