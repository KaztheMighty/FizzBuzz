//Print to 100.
//Every multiple of 3, you say Fizz.
//Every multiple of 5, you say Buzz.
//If it's a multiple of both, print FizzBuzz.

/*I made these variables so it's easier to change if I ever want to change
the numbers I want to check */
var x = 3;
var y = 5;


for (var i = 1; i <= 100; i++){
	//We check for both first, since the number may be a multiple of both.
	if ((i % x == 0) && (i % y == 0)){
		console.log("FizzBuzz");

	} else if (i % x == 0) {
		console.log("Fizz");

	} else if (i % y == 0) {
		console.log("Buzz");

	/*If we get to this point we know that the code hasn't been run for 
	any of the previous if statements so we can just print out the current
	i iteration*/
	} else {
		console.log(i);
	}
}
