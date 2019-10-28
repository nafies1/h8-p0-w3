// [Exercises 4] Tantangan Array 3 (Array Join, Split, Slice, Splice, Sort)
// Menggunakan Built-in Function pada Array

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(arr) {
	arr.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
	arr.splice(4, 1, "Pria", "SMA Internasional Metro");
	return arr ;
}

console.log(dataHandling2(input)); 

var tanggal = input[3].split("/");

var month;
switch (tanggal[1]) {
  case '01':
    month = "Januari";
    break;
  case '02':
    month = "Februari";
    break;
  case '03':
    month = "Maret";
    break;
  case '04':
    month = "April";
    break;
  case '05':
    month = "Mei";
    break;
  case '06':
    month = "Juni";
    break;
  case '07':
    month = "Juli";
  case '08':
    month = "Agustus";
    break;
  case '09':
    month = "September";
    break;
  case '10':
    month = "Oktober";
    break;
  case '11':
    month = "November";
    break;
  case '12':
    month = "Desember";
}

console.log(month);

tanggal.sort(function(a, b) { return b - a });

console.log(tanggal);

var tanggal1 = input[3].split("/").join('-');
console.log(tanggal1);

var nama = input[1];

console.log(nama.slice(0,15));

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */