// [Exercises 5 (Auto)] Palindrome
// Logic Challenge - Palindrome

function palindrome(kata) {
  // you can only write your code here!
  	var kataTerbalik = '';
 	for (var i = kata.length - 1; i >= 0; i--) {
 		kataTerbalik += kata[i];
 	}
 	return kataTerbalik === kata ;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false