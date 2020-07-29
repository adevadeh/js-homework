// Write a function power(x,n) such that power(x,n) returns x to the nth power
// Write a 4 tests to show that the function ir performing correctly

// Part 1 - Function
// Fill in the following function definition


function power(x, n) {
  if (n==0){
    return 1;
  }
  let c=x;
  for(i=0; i< n; i++) {
    c=c*x;
  }
  return c;
}



console.log(power(1,1));
console.log(power(2,2));
console.log(power(3,3));
console.log(power(4,4));


// Part 2 - Testing
// Add 4 more tests to show that the function is working properly

console.log(power(3,0))
