 // [Exercises 8 (Auto)] Pasangan Angka Terbesar
 // Logic Challenge - Pasangan Angka Terbesar

 function pasanganTerbesar(num) {
  // you can only write your code here!
  var angkaString = String(num);
  var angkaArray = angkaString.split('');
  var angkaBaruArray = [];
  var angkaBaruArrayNumber = [];
  for (var i = 0; i < angkaArray.length-1; i++){
  	angkaBaruArray.push(angkaArray[i]+angkaArray[i+1]);
  }

  for (var j = 0; j < angkaBaruArray.length; j++){
  	angkaBaruArrayNumber.push(Number(angkaBaruArray[j]));
  }
  return Math.max(...angkaBaruArrayNumber);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99