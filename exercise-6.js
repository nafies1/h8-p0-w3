 // [Exercises 6 (Auto)] Palindrome Angka
 // Logic Challenge - Number Palindrome

 function angkaPalindrome(num) {
  // you can only write your code here!
  	num++;
  	angkaString = String(num);
  	while(angkaString != angkaTerbalik){
  		var angkaTerbalik = '';
  		for (var i = angkaString.length-1 ; i >=0 ; i--) {
  			angkaTerbalik += angkaString[i];
  		}
  		if (angkaString == angkaTerbalik){
  			return angkaTerbalik;
  		}
  		var angkaNumber = Number(angkaString);
  		angkaNumber++;
  		angkaString = String(angkaNumber);
  	}
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001