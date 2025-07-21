"use strict";
console.log("#60DaysOfLearning2025");
console.log("Tuples in TS");
let details; // order of arrays also matters in tuple
details = ["saksham", 12, true];
let rgb = [255, 123, 23];
console.log("Details:", details);
console.log("RGB values:", rgb);
console.log("Enums in TS");
var seatChoice;
(function (seatChoice) {
    seatChoice[seatChoice["AISLE"] = 0] = "AISLE";
    seatChoice[seatChoice["MIDDLE"] = 1] = "MIDDLE";
    seatChoice[seatChoice["WINDOW"] = 2] = "WINDOW";
})(seatChoice || (seatChoice = {}));
const hcSeat = seatChoice.AISLE;
var direction;
(function (direction) {
    direction[direction["north"] = 0] = "north";
    direction[direction["south"] = 1] = "south";
    direction[direction["east"] = 2] = "east";
    direction[direction["west"] = 3] = "west";
})(direction || (direction = {}));
let dir = direction.north;
console.log(dir);
console.log(direction[dir]);
console.log("Interface in TS");
const person1 = {
    name: "Saksham",
    email: "Sakshamphuyal@gmail.com",
    userId: 1234,
};
console.log("Person Info:", person1);
console.log("Classes in TS");
class USER {
    constructor(email, name) {
        this.city = "kathmandu"; //cant be accessed below
        this.email = email;
        this.name = name;
    }
}
const saksham = new USER("ps@gmail.com", "saksham");
console.log("USER:", saksham);
class student {
    constructor(naam, syn, username) {
        this.naam = naam;
        this.syn = syn;
        this.username = username;
    }
}
const phuyal = new student("Phuyal", 19, "sp ");
console.log("Student:", phuyal);
console.log("Abstract Class in TS");
class Vehicle {
    stop() {
        console.log("Vehicle stopped");
    }
}
class Car extends Vehicle {
    start() {
        console.log("Car started");
    }
}
const myCar = new Car();
myCar.start();
myCar.stop();
console.log("Generics in TS");
function identity(value) {
    return value;
}
const num = identity(5);
const str = identity("hello");
console.log(num);
console.log(str);
console.log("Generics in Array");
function printarrays(array) {
    array.forEach(element => {
        console.log(element);
    });
}
printarrays([1, 2, 3]);
printarrays(["sak", "sh", "am"]);
