export { };

let w1 = "hello";
let w2 = " world!";

function s(w1: string, w2: string) {
  return w1.concat(w2);
}

const result = s(w1, w2); // concatenate two strings - 'hello', 'world', using the function above

console.log(result); // Expected output: "hello world"
