console.log("Learning Objects in JS");
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  start: function () {
    console.log("Car started");
  }
};
console.log(car.brand);
console.log("Learning Class in JS");
car.start();    
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  start() {
    console.log(`${this.brand} ${this.model} started`);
  }
  printDetails() {
    console.log( `This car you watching is ${this.brand} ${this.model} made on ${this.year}`);
}
}
const car1 = new Car("Lamborgini", "Urus", 2023);
const car2 = new Car("Ford", "Mustang", 2024);
const car3= new Car("Toyota", "Supra", 2025)
car1.start();
car2.start(); 
car3.printDetails();