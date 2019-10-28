 // [Exercises 2] Tantangan Array 1 (Mengakses Nilai dalam Array)

 var input = 'hello world!';

 function balikString(kata) {
 	var kata1 = '';
 	for (var i = kata.length - 1; i >= 0; i--) {
 		kata1 += kata[i];
 	}
 	return kata1 ;
 }

console.log(balikString(input));