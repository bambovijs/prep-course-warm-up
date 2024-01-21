export {};

/**
 * Implement a function which takes two integers and returns the sum of every number between (inclusive), for example:
 *
 *  - 1, 4 will return 1 + 2 + 3 + 4 which is 10
 */

const sumAll = function(start: number, end: number): number {
    let numberArray: number = 0;

    for (let i = start; i <= end; i++) {
        numberArray = numberArray + start;
        start++;
        // console.log(numberArray);
    }

    return numberArray;
};

console.log(sumAll(1, 4)); // Expected output: 10
