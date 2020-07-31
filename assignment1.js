console.log('\n-- Assignment 1 --');
// Write a function power(x,n) such that power(x,n) returns x to the nth power (n is an integer).
// Write 4 tests to show that the function is performing correctly.

// Part 1 - Function
// Fill in the following function definition:

function power(x, n) {
  return Math.pow(x, n);
}

console.log('\nPart 1 - Function:');
console.log('\n1^1:');
console.log(power(1,1));
console.log('\n2^2:');
console.log(power(2,2));
console.log('\n3^3:');
console.log(power(3,3));
console.log('\n4^4:');
console.log(power(4,4));


// Part 2 - Testing
// Add 4 more tests to show that the function is working properly

const errorMsg = 'Math assertion failed.';

console.log('\nPart 2 - Testing:');

console.log('\n4^0.5 = 2');
console.assert(power(4,0.5) == 2, errorMsg);

console.log('\n7^-2 = 0.02040816326530612 (1/49)');
console.assert(power(7,-2) == 0.02040816326530612, errorMsg);

console.log('\n5^2 = 25');
console.assert(power(5,2) == 25, errorMsg);

console.log('\n-7^0.5 = NaN');
// console.log(power(-7,0.5)); // NaN
console.assert(isNaN(power(-7,0.5)), errorMsg);

// Part 3 - Properties of Exponents
// Use your function to show examples of the product property and the power property of exponents.
//
// * Product Property of Exponents
//   a^n * a^m == a^(n+m)
//
// * Power Property of Exponents
//   (a^n)^m == a^(n*m)

console.log('\n\nPart 3 - Properties of Exponents:');

// Test 2^3 * 2^5 == 2^(3+5) - - Product Property of Exponents
console.log('\n2^3 * 2^5 == 2^(3+5)');
console.log('\n2^3:');
console.log(power(2,3));
console.log('\n2^5:');
console.log(power(2,5));
console.log('\n2^(3+5):');
console.log(power(2,8));
console.log('\n' + power(2,3) + ' * ' + power(2,5) + ' = ' + power(2,(3+5)))
console.assert((power(2,3) * power(2,5)) == power(2,(3+5)), errorMsg);

//    (2^4)^6 == 2^(4*6) - - Power Property of Exponents
console.log('\n(2^4)^6 == 2^(4+6)');
console.log('\n2^4:');
console.log(power(2,4));
console.log('\n2^6:');
console.log(power(2,6));
console.log('\n2^(4*6):');
console.log(power(2,(4*6)));
console.log('\n(' + power(power(2,4),6) + ') = ' + power(2,(4*6)))
console.assert(power(power(2,4),6) == power(2,(4*6)), errorMsg);
