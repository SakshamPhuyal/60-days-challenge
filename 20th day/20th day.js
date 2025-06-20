let heading=document.querySelector("h1");
let para=document.querySelector("p");
let divs=document.querySelectorAll(".box");
heading.innerText="New heading";
para.innerHTML="<i>Welcome from Leapfrog Technology ";
divs[0].innerText="I accessed Div 1";
divs[1].innerText="I accessed Div 2";
divs[2].innerText="I accessed Div 3";
//Creating a button and prepending it.
const btn = document.createElement("button");
btn.innerText = "click me";
btn.style.backgroundColor = "red";
btn.style.color = "white";
document.body.prepend(btn);
//Creating a button and appending it
const butn = document.createElement("button");
butn.innerText = "click me";
document.body.append(butn);
//Creating a button before first box
const buttn = document.createElement("button");
buttn.innerText = "click me";
const firstbox = document.querySelector(".box");
firstbox.before(buttn);
//Creating a button after first box
const newbutton = document.createElement("button");
newbutton.innerText = "click me";
firstbox.after(newbutton);