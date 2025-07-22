console.log("TypeScript");
// Basic data types in TypeScript
let message: string = "#60DaysOfLearning2025";
let day: number = 50;
let isGoing: boolean = true;
let techsCompleted: string[] = ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React"];
console.log("Challenge:", message);
console.log("Day:", day);
console.log("Techs Completed:", techsCompleted);
// Functions in TS
console.log("Functions in TypeScript");
function add(a: number, b: number): number {
  return a + b;}
function greet(name: string): void {
  const message = `Hello, ${name}!`.toUpperCase();
  console.log(message);}
const sum = add(5, 10);
greet("Saksham");
console.log("Sum is:", sum);
// Objects, Types, Readonly and Optional Properties
console.log("Objects, Types, Readonly, and Optional Properties in TypeScript");
type User = {
  readonly id: number;
  name: string;
  age: number;
  isActive: boolean;
  city?: string; // optional
};
const user1: User = {
  id: 1,
  name: "Saksham",
  age: 20,
  isActive: true
  // city is not provided
};
console.log(user1);
// Function using object as parameter
console.log("Function Using Object as Parameter");
function printUser(user: { name: string; age: number }) {
  console.log(`${user.name} is ${user.age} years old`);}
printUser({ name: "Saksham", age: 21 });
// Arrays in TypeScript
console.log("Arrays in TypeScript");
const superheroes: string[] = ["Batman", "Ironman"];
superheroes.push("Spiderman");
const marks: Array<number> = [90, 78];
marks.push(30);
console.log("Superheroes:", superheroes);
console.log("Marks:", marks);
// Union types
console.log("Union Types in TypeScript");
let score: number | string = 33;
console.log(score);
score = "45";
console.log(score);
type user = { name: string; id: number };
type admin = { username: string; id: number };
let saksham: user | admin = { name: "Saksham", id: 23 };
console.log(saksham);
saksham = { username: "Ram", id: 334 };
console.log(saksham);

function getId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toLowerCase());
  } else {
    console.log("ID:", id + 2);
  }
}
getId("HELLO");
getId(10);

const inf: (string | number)[] = ["1", "2", 3];
console.log(inf);
