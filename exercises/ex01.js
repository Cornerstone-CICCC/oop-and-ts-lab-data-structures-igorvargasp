// Create a function called calcDistance that calculates the distance between two unique elements
// Make sure to implement Stack principle (LIFO)

const Stack = require('../lib/Stack')

function calcDistance(stack, a, b) {
  const temp = new Stack();
  let posA = -1;
  let posB = -1;
  let pos = 0;

  while (!stack.isEmpty()) {
    const element = stack.pop();
    if (element === a) posA = pos;
    if (element === b) posB = pos;
    temp.push(element);
    pos++;
  }

  while (!temp.isEmpty()) {
    stack.push(temp.pop());
  }

  return Math.abs(posA - posB);
}

const students = new Stack()
students.push("John")
students.push("Joe")
students.push("Jane")
students.push("Jill")
students.push("Jim")

const distance = calcDistance(students, "Joe", "Jim")
console.log(distance) // 3
const distance2 = calcDistance(students, "Joe", "Jill")
console.log(distance2) // 2