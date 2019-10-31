// [Exercises 15] Mengelompokkan Hewan
// Logic Challenge - Mengelompokkan Hewan

function groupAnimals(animals) {
  // you can only write your code here!
  animals.sort();
  var arrayAkhir = [];
  var arrayKelompok = [];
  var hurufAwal = animals[0][0];
  for (var i = 0; i < animals.length; i++) {
  	if (animals[i][0] === hurufAwal) {
  		arrayKelompok.push(animals[i]);
  	} else {
  		arrayAkhir.push(arrayKelompok);
  		arrayKelompok = [];
  		hurufAwal = animals[i][0];
  		arrayKelompok.push(animals[i])
  	}
  }
  arrayAkhir.push(arrayKelompok);
  return arrayAkhir;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

// Diberikan sebuah function groupAnimals(arr) yang 
// menerima satu parameter berupa array yang berisi string. 
// Function akan me-return array multidimensi dimana 
// array tersebut berisikan kategori/kelompok array yang 
// dikumpulkan sesuai dengan abjad depannya. Abjad harus 
// berurut dari a-z (jika ada). Untuk kasus ini, anggap saja 
// semua text lowercase.

// Contoh jika animals adalah 
// ["ayam", "kucing", "bebek", "bangau", "zebra"]

// maka akan menampilkan output: 
// [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

// Urutan hewan dalam array setiap pengelompokan huruf tidak penting.