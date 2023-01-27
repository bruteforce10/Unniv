let text1 = document.querySelector("#text1");
let text2 = document.querySelector("#text2");
let text3 = document.querySelector("#text3");
let text4 = document.querySelector("#text4");
let text5 = document.querySelector("#text5");
let text6 = document.querySelector("#text6");
let text7 = document.querySelector("#text7");
let text8 = document.querySelector("#text8");
let text9 = document.querySelector("#text9");

function munculText1() {
  text1.style.display = "block";
  text1.classList.add("animation");
  setTimeout(munculText2, 20);
}

function munculText2() {
  text1.style.display = "none";
  text2.classList.add("animation");
  text2.style.display = "block";
  setTimeout(munculText3, 45);
}

function munculText3() {
  text2.style.display = "none";
  text3.classList.add("animation");
  text3.style.display = "block";
  setTimeout(munculText4, 50);
}
function munculText4() {
  text3.style.display = "none";
  text4.classList.add("animation");
  text4.style.display = "block";
  setTimeout(munculText5, 35);
}
function munculText5() {
  text4.style.display = "none";
  text5.classList.add("animation");
  text5.style.display = "block";
  setTimeout(munculText6, 20);
}
function munculText6() {
  text5.style.display = "none";
  text6.classList.add("animation");
  text6.style.display = "block";
  setTimeout(munculText7, 35);
}
function munculText7() {
  text6.style.display = "none";
  text7.classList.add("animation");
  text7.style.display = "block";
  setTimeout(munculText8, 33);
}
function munculText8() {
  text7.style.display = "none";
  text8.classList.add("animation");
  text8.style.display = "block";
  setTimeout(munculText9, 45);
}
function munculText9() {
  text8.style.display = "none";
  text9.classList.add("animation");
  text9.style.display = "block";
  setTimeout(munculText10, 35);
}
function munculText10() {
  text9.style.display = "none";
  text10.classList.add("animation");
  text10.style.display = "block";
}

const tombolMulai = document.querySelector("#tombolMulai");
const pertanyaanPertama = document.querySelector("#pertanyaanPertama");
const kecuali = document.querySelector("#pertanyaanPertama h3 span");
const jawabPertama = document.querySelector("#jawabPertama");
const jawabKedua = document.querySelector("#jawabKedua");
const jawabKetiga = document.querySelector("#jawabKetiga");

tombolMulai.onclick = function () {
  text10.style.display = "none";
  pertanyaanPertama.style.display = "block";
  muncul();
};

let muncul = function () {
  (jawabPertama, jawabKedua).onclick = function () {
    kecuali.classList.add("pertanyaan");
    kecuali.style.display = "inline";
    jawabKetiga.style.display = "none";
    setTimeout(hadir, 2000);
  };
};

let hadir = function () {
  pertanyaanPertama.setAttribute("data-bs-target", "#exampleModal");
  pertanyaanPertama.setAttribute("data-bs-toggle", "modal");
  setTimeout(jawab, 3000);
};

let jawab = function () {
  pertanyaanPertama.click();
};

setTimeout(munculText1, 2000);

// const button = document.querySelector("#jwbPertama");
// const buttonMau = document.querySelector("#mauBanget");
// const container = document.querySelector(".container");

// console.dir(buttonMau);

// function jawab() {
//   alert("I LOVE YOU");
// }

// button.addEventListener("mouseover", function () {
//   let x = Math.floor(Math.random() * 300) + 1;
//   let y = Math.floor(Math.random() * 100) + buttonMau.offsetTop;

//   this.style.left = x + "px";
//   this.style.top = y + "px";
// });

// // https://www.youtube.com/watch?v=GJrR58QGenw

// const inputJujur = document.querySelector("#inputJujur");

// inputJujur.addEventListener("change", function () {
//   this.value = "TIDAK DONG";
// });

// const berubah = document.querySelector("#berubah span");
// const range = document.querySelector("#range");

// range.addEventListener("change", function () {
//   berubah.innerHTML = "<b>SAYANG</b>";
// });
