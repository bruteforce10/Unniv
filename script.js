const button = document.querySelector("#jwbPertama");
const buttonMau = document.querySelector("#mauBanget");
const container = document.querySelector(".container");

console.dir(buttonMau);

function jawab() {
  alert("I LOVE YOU");
}

button.addEventListener("mouseover", function () {
  let x = Math.floor(Math.random() * 300) + 1;
  let y = Math.floor(Math.random() * 100) + buttonMau.offsetTop;

  this.style.left = x + "px";
  this.style.top = x + "px";
});

// https://www.youtube.com/watch?v=GJrR58QGenw
