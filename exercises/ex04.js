// Create a function called isPalindrome that checks if the elements in the queue form a palindrome
// A palindrome reads the same forwards and backwards (e.g., 1 2 3 2 1)
// Make sure to implement the Queue principle (FIFO)

const Queue = require('../lib/Queue');

function isPalindrome(queue) {
  const elements = [];
  const n = queue.size();

  for (let i = 0; i < n; i++) {
    elements.push(queue.dequeue());
  }

  let result = true;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (elements[i] !== elements[n - 1 - i]) {
      result = false;
      break;
    }
  }

  for (let i = 0; i < n; i++) {
    queue.enqueue(elements[i]);
  }

  return result;
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);

console.log(isPalindrome(queue)); // true