console.log("Array");
/*(applying loops in Array) For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
All items have an offer of 10% OFF on them. Change the array to store final price after
applying offer.*/
let prices = [250, 645, 300, 900, 50 ];
console.log("The price of given items:\n",prices);
for (let i = 0; i < prices.length; i++) {
  let discount = prices[i] * 0.10;
  prices[i] = prices[i] - discount;
}
console.log("The discounted price of given items:",prices);

let name1=["Ram","Hari","Sam"];
let name2=["Sita","Gita","Ramita"];
let name3=name1.concat(name2);
console.log("First name list:",name1);
console.log("Second name list:",name2);
console.log("Merged name list:",name3);
console.log(name1.slice(1,2));
name1.splice(1,1,"Saroj")
console.log(name1)

//Function
console.log("Function");
 let a=4;
 let b=5;
 console.log("Two numbers are",a,"and",b);
function add(){
   
    console.log("Sum is:",a+b);
}
function product(){
    console.log("product is:",a*b)
}
add();
product();

function countVowels(str) {
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