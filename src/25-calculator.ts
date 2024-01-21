export { };

function add(x: number, y: number): number {
    return x + y;
}

function subtract(x: number, y: number): number {
    return x - y;
}

function sum(arr: number[]): number {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        num += element
    }
    return num;
}

function multiply(arr: number[]): number {
    var result = 1;
    for (let i = 0; i < arr.length; i++) {
        result *= arr[i];
    }

    return result;
}

function power(x: number, y: number): number {
    //Nezinu vai var izmantot Math. metodes
    return Math.pow(x, y);
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
