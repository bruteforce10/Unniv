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
  this.style.top = y + "px";

});

// https://www.youtube.com/watch?v=GJrR58QGenw

const inputJujur = document.querySelector('#inputJujur');

inputJujur.addEventListener('change', function() {
  this.value = "TIDAK DONG";
})


const berubah = document.querySelector('#berubah span');
const range = document.querySelector('#range');

range.addEventListener('change', function(){
  berubah.innerHTML = "<b>SAYANG</b>";
})







