let age = Number(prompt("Enter your age:"));
console.log("Your age is:",age);
//if statement
/*if (age >= 18) { console.log("You are an adult.");}
//if-else statement
if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You are too young to vote.");
} */
//else-if Statement
if(age<18){
    console.log("You are Junior")
}
else if( age>55){
    console.log("You are senior");
}
else{
    console.log("you are Youth")
}
//Ternary Operator
let result= age>18?"Can vote":"Can't vote";
console.log(result);
//simple example of for loop
/*for(i=0;i<10;i++){
    console.log("Saksham");
} */
for (let i = 1; i <= 3; i++) {
  let marks = Number(prompt(`Enter marks for subject ${i}:`));
  if (marks >= 40) {
    console.log(`Subject ${i}:PASS`);
  } else {
    console.log(`Subject ${i}:FAIL`);
  }
}