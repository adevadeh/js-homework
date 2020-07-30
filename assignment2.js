// Write a function that calculates the force created between two objects in space.
// Then write a function to calculate the acceleration each object would be subjected 
// to through gravitational force. We will then use these functions to computationally 
// determing the falue of 'g' - the acceleration we all experience day to day due
// to Earth's gravity.
//
// Part 1 - Gravitational Force
// Define a function that returns the magnitude of the force given the mass of and the 
// distance betweeen two objects.  
//
// To determine gravitational force, use this formula:
// F = G * (M1 * M2) / d^2
//
// Where G is the universal gravitational constant: 6.674 x 10^-11
// M1 is the mass of one object
// M2 is the mass of another object
// and d is the distance between their centers of mass

const GRAVITATIONAL_CONSTANT = 6.674e-11; 

function GravitationalForce(mass_a, mass_b, distance) {



}

console.log(GravitationalForce(1,1,1));
console.log(GravitationalForce(1e11,1,1));
console.assert(GravitationalForce(1,1,1) == GRAVITATIONAL_CONSTANT);

// Part 2 - Acceleration
// Define a fuction to calculate the acceleration of an object as a function of mass and force
// To determine acceleration, we will use the formula:
// F = Ma or re-arranged to solve for a
// a = F/M

function Acceleration(force, mass) {


} 

console.log(Acceleration(10, 2.5));
console.log(Acceleration(100, 50));
console.assert(Acceleration(1,1) == 1);

// Part 3 - Calculating the value of g
// Using these two functions, calculate the value of g (the amount of acceleration felt 
// on the surface of the earth) to 2 decimals. 
// * Do objects with more mass fall faster (have higher acceleration)? 
// * Why or why not?
// * How high above the earth's surface would an object
//   have to be before having a measurable effect on it's acceleration?
// Use the following for the mass and radius of the earth:

const EARTH_MASS   = 5.972e24; // KG
const EARTH_RADIUS = 6.357e6;  // m

