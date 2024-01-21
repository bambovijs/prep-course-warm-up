export { };

const repeatString = (text: string, x: number) => {
    return x > 0 ? text.repeat(x) : "";
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
