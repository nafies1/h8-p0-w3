// Latihan Pengelompokan Hewan dan Filter duplikat 
// tanpa built-in function filter

function kelompokHewan(arrHewan) {
	var arrayBinatang = [];
	for (var i = 0; i < arrHewan.length; i++) {
		var hewan = arrHewan[i];
		var statusHewan = true;
		for (var j = 0; j < arrayBinatang.length; j++) {
			if (hewan == arrayBinatang[j] && i != j){
				statusHewan = false;
			}
		}
		if (statusHewan) {
			arrayBinatang.push(hewan);
		}
	}
	return arrayBinatang;
}



// TEST CASES
console.log(kelompokHewan(['ayam', 'babi', 'bebek' , 'bebek', 'sapi', 'sapi', 'cacing', 'ayam', 'cacing']));

// Output 
// ['ayam', 'babi', 'bebek', 'sapi', 'cacing']