"use strict";
console.log("TypeScript");
// Basic data types in TypeScript
let message = "#60DaysOfLearning2025";
let day = 50;
let isGoing = true;
let techsCompleted = ["Html", "CSS", "JavaScript", "Tailwind CSS", "React"];
console.log("Challenge:", message);
console.log("Day:", day);
console.log("Techs completed:", techsCompleted);
console.log("Functions in TS");
function add(a, b) {
    return a + b;
}
function greet(name) {
    const message = `Hello, ${name}!`.toUpperCase();
    console.log(message);
}
const sum = add(5, 10);
greet("Saksham");
console.log("Sum is:", sum);
console.log("Objects,Type,Readonly and Optional property in TS");
const user1 = {
    id: 1,
    name: "Saksham",
    age: 20,
    isActive: true
    // city is not provided (optional)
};
console.log(user1);
console.log(" Function Using Object as Parameter");
function printUser(user) {
    console.log(`${user.name} is ${user.age} years old`);
}
printUser({ name: "Saksham", age: 21 });
console.log("Arrays in TS");
const superheroes = ["Batman", "Ironman"];
superheroes.push("Spiderman");
const marks = [90, 78];
marks.push(30);
console.log("Superheroes:", superheroes);
console.log("Marks:", marks);
console.log("Union in TS");
let score = 33;
console.log(score);
score = "45";
console.log(score);
let saksham = { name: "Saksham", id: 23 };
console.log(saksham);
saksham = { username: "Ram", id: 334 };
console.log(saksham);
function getId(id) {
    if (typeof id === "string") {
        console.log(id.toLowerCase());
    }
    else {
        console.log("ID:", id + 2);
    }
}
getId("HELLO");
getId(10);
const inf = ["1", "2", 3];
console.log(inf);
