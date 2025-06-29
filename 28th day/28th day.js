console.log("JS Inheritance")
class Animal {
  constructor(name) {
    this.name = name;}
  speak() {
    console.log(`${this.name} makes a sound.`);}}
class Dog extends Animal {
  constructor(name, breed) {
    super(name); 
    this.breed = breed;}
  speak() {
    console.log(`${this.name} barks. It's a ${this.breed}.`);}}
const animal = new Animal("Animal");
animal.speak();
const myDog = new Dog("Kali", "Bhote Kukur");
myDog.speak();
console.log("Error Hamdling in JS");
function checkVotingAge(age) {
  try {
    if (isNaN(age)) {
      throw new Error("Please enter a valid number");}
    if (age < 0) {
      throw new Error("Age cannot be negative");}
    if (age >= 18) {
      console.log(" You are eligible to vote.");
} else {
      console.log(" You are not eligible to vote.");   }
  } catch (error) {
    console.log(" Error:", error.message);}
}
checkVotingAge(20);
checkVotingAge(15);
checkVotingAge("abc");
checkVotingAge(-3);