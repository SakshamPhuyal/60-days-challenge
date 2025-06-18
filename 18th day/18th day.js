console.log("Arrow function");
const welcome = () => {
    console.log("Welcome from Leapfrog Technology");
}
welcome();
console.log("To check number of vowels in the given word using arrow function");
const countVowels=(str)=> {
  let count = 0;
  const vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log("Number of vowels in Leapfrog is:",countVowels("Leapfrog"));
console.log("forEach Loop in Arrays");
console.log("For a given array of numbers printing the square of each value using the forEach loop.")
const numbers = [2, 4, 6, 8, 10];
console.log("Squares of numbers:");
numbers.forEach((num) => {
  console.log(num * num);
}
);
console.log("Showcasing use of for each loop by combining hello with names in array ");
const names = ["Ram", "Sita", "Gita", "Hari"];

names.forEach((name) => {
  console.log("Hello, " + name + "!");
});
console.log("Array method map val*2");
let newNumbers=numbers.map((val)=>{
    return val*2;
});
console.log(newNumbers);
console.log("Array method Filter val%3===0");
let newNumber=newNumbers.filter((val)=>{
    return val % 3==0;
});
console.log(newNumber);
//Sum using reduce method
const total = numbers.reduce((sum, num) => {
  return sum + num;
}, 0);
console.log("Total is:", total);
