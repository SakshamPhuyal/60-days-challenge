console.log("#60DaysOfLearning2025");
console.log("Tuples in TS")
let details:[string,number,boolean]// order of arrays also matters in tuple
details=["saksham", 12,true]
let rgb:[number,number,number]=[255,123,23];
console.log("Details:", details);
console.log("RGB values:", rgb);
console.log("Enums in TS");
enum seatChoice {
    AISLE,
    MIDDLE,
    WINDOW
}
const hcSeat = seatChoice.AISLE
enum direction {
    north,
    south,
    east,
    west
}
let dir=direction.north
console.log(dir);
console.log(direction[dir]);
console.log("Interface in TS");
interface person {
  name: string;
  email: string;
  userId: number;
  relative?: string; // optional
}
const person1: person = {
  name: "Saksham",
  email: "Sakshamphuyal@gmail.com",
  userId: 1234,
};

console.log("Person Info:", person1);
console.log("Classes in TS");
class USER{
    email:string
name: string
private readonly city:string="kathmandu"//cant be accessed below
    constructor(email:string,name:string){
        this.email=email;
        this.name=name;
    }
}
const saksham=new USER("ps@gmail.com","saksham");
console.log("USER:", saksham);
 class student{
    constructor(
        public naam:string,
        public syn:number,
        private username:string
    ){}}
 const phuyal=new student("Phuyal",19,"sp ");
 console.log("Student:", phuyal);
 console.log("Abstract Class in TS");
 abstract class Vehicle {
  abstract start(): void;
  stop() {
    console.log("Vehicle stopped");
  }}
class Car extends Vehicle {
  start() {
    console.log("Car started");
  }}
const myCar = new Car();
myCar.start();
myCar.stop();
console.log("Generics in TS");
function identity <type>(value:type):type{
    return value;
}
const num=identity<number>(5)
const str=identity<string>("hello")
console.log(num); 
console.log(str);
console.log("Generics in Array");
function printarrays <type>(array: type[]):void{
    array.forEach(element => {
        console.log(element)
    });
}
printarrays<number>([1,2,3]);
printarrays<string>(["sak","sh","am"]);
