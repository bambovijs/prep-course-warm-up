export {};

/**
 * Note : The Pythagorean Theorem tells us that the relationship in every right triangle is:
 * c2 = a2 + b2, where c is the hypotenuse and a, b are two legs of the triangle.
 *
 * https://en.wikipedia.org/wiki/Pythagorean_theorem
 *
 * You should be able to deduce which function arguments are which sides of a triangle
 * and name them in your function accordingly.
 */

const pythagoreanTheorem = (x: number, y: number) => {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
};

console.log(pythagoreanTheorem(2, 4)); // Expected result: 4.47213595499958
console.log(pythagoreanTheorem(3, 4)); // Expected result: 5

// c^2 = a^2 + b^2
// c^2 = 4 + 16 
// c^2 = 20 
// c = 4,472135954999579

// c^2 = a^2 + b^2
// c^2 = 9 + 16
// c^2 = 25
// c = 5