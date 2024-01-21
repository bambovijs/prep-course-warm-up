export { };

/**
 * Loop over the array and for each alive writer print out the following:
 * "Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."
 */

const writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  }
];
// For loops
for (let i = 0; i < writers.length; i++) {
  const element = writers[i];

  if (element.alive) {
    console.log(`Hi, my name is ${element.firstName} ${element.lastName}. I am ${element.age} years old, and work as a ${element.occupation}.`)
  }
}

//Arrow function ar map, bet izvada masīvu ar elementiem.
let result = writers
  .filter(writer => writer.alive === true)
  .map(writer => `Hi, my name is ${writer.firstName} ${writer.lastName}. I am ${writer.age} years old, and work as a ${writer.occupation}.`);
console.log(result);