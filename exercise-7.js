 // [Exercises 7 (Auto)] Hitung Jumlah Kata
 // Logic Challenge - Menghitung Jumlah Kata

// function hitungJumlahKata(kalimat) {
//   // you can only write your code here!
//    var perKata = kalimat.split(' ');
//    return perKata.length;
// }

function hitungJumlahKata(kalimat) {
	var arrayKata = [];
	var kata = '';
	for (var i = 0; i < kalimat.length; i++) {
		if (kalimat[i] != ' '){
			kata += kalimat[i];
		} else {
			if (kata != '') {
				arrayKata.push(kata);
			}
			kata = '';
		}
	}
	if (kata != '') {
		arrayKata.push(kata);
	}
	return arrayKata;
}

// TEST CASES
console.log(hitungJumlahKata('    I have a     dream    ')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
['I', 'Have']