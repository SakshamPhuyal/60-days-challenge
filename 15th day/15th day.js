console.log("Example while loop");
let i=1;
while(i<4){
    console.log("The number is:",i);
    i++;
}
console.log("Example Do-While loop");
let j=1;
do{ 
    if(j%7==0){
    console.log("The number divisible by seven is:",j);}
    j++;
}while(j<50);
console.log("Example of For-of loop");
let string="Saksham";
for(let i of string){
    console.log("i=",i);}
console.log("Example of For-in loop");
let student={
    name:"saksham",
    age:20,
    isPass:true
};
for (let i in student){
    console.log(i);
}
//Creating a game where we guess any random number from a range and ask the user to guess the correct number
let correctNumber=4;
let guessNumber=Number(prompt("Enter your guess number between 1 to 10"));
while (correctNumber!==guessNumber){
    guessNumber=Number(prompt("Your choice is wrong !Enter your another guess number."));
}
console.log("Congratulations! You entered correct number.");