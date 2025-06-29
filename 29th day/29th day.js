console.log("Asynchronous programming in JS");
console.log("Start");
setTimeout(() => {
  console.log("Bye Bye after five seconds");
}, 5000);

console.log("End");
console.log("Callback in JS");
function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}
function sayBye() {
  console.log("Goodbye!");
}
greet("Saksham", sayBye);
console.log("Callback Hell in JS");
setTimeout(() => {
  console.log("Task 1");
  setTimeout(() => {
    console.log("Task 2");
    setTimeout(() => {
      console.log("Task 3");
      setTimeout(() => {
        console.log("Task 4");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);