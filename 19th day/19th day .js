alert("Hello!");
console.log(window.innerWidth);
const title = document.getElementById("title");
title.style.color = "blue";
const texts = document.getElementsByClassName("text");
for (let i = 0; i < texts.length; i++) {
  texts[i].style.fontWeight = "bold";
}
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs.length);
const heading = document.querySelector(".main-heading");
heading.textContent = "Updated Heading!";
const allTexts = document.querySelectorAll(".text");
allTexts.forEach((el) => {
  el.style.backgroundColor = "yellow";
});