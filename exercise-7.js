 // [Exercises 7 (Auto)] Hitung Jumlah Kata
 // Logic Challenge - Menghitung Jumlah Kata

function hitungJumlahKata(kalimat) {
  // you can only write your code here!
   var perKata = kalimat.split(' ');
   return perKata.length;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5