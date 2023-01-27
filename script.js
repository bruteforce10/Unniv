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
  setTimeout(munculText2, 2000);
}

function munculText2() {
  text1.style.display = "none";
  text2.classList.add("animation");
  text2.style.display = "block";
  setTimeout(munculText3, 4500);
}

function munculText3() {
  text2.style.display = "none";
  text3.classList.add("animation");
  text3.style.display = "block";
  setTimeout(munculText4, 5000);
}
function munculText4() {
  text3.style.display = "none";
  text4.classList.add("animation");
  text4.style.display = "block";
  setTimeout(munculText5, 3500);
}
function munculText5() {
  text4.style.display = "none";
  text5.classList.add("animation");
  text5.style.display = "block";
  setTimeout(munculText6, 2000);
}
function munculText6() {
  text5.style.display = "none";
  text6.classList.add("animation");
  text6.style.display = "block";
  setTimeout(munculText7, 3500);
}
function munculText7() {
  text6.style.display = "none";
  text7.classList.add("animation");
  text7.style.display = "block";
  setTimeout(munculText8, 3300);
}
function munculText8() {
  text7.style.display = "none";
  text8.classList.add("animation");
  text8.style.display = "block";
  setTimeout(munculText9, 4500);
}
function munculText9() {
  text8.style.display = "none";
  text9.classList.add("animation");
  text9.style.display = "block";
  setTimeout(munculText10, 3500);
}
function munculText10() {
  text9.style.display = "none";
  text10.classList.add("animation");
  text10.style.display = "block";
}

setTimeout(munculText1, 2000);

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
  jawabKetiga.setAttribute("data-bs-target", "#exampleModalToggle");
  jawabKetiga.setAttribute("data-bs-toggle", "modal");
  setTimeout(jawab, 300);
};

let jawab = function () {
  jawabKetiga.click();
};


const buttonPertanyaanKedua = document.querySelector('#tombolPertanyaanKedua');
const pertanyaanKedua = document.querySelector('#pertanyaanKedua');

buttonPertanyaanKedua.onclick = function() {
  pertanyaanPertama.style.display="none";
  pertanyaanKedua.style.display = "block";
}

const inputJujur = document.querySelector("#inputJujur");

inputJujur.addEventListener("change", function () {
  this.value = "RAJIN BAIK & TIDAK SOMBONG";
  setTimeout(hadir2, 2000);
});

let hadir2 = function() {
  pertanyaanKedua.setAttribute("data-bs-target", "#exampleModalToggle2");
  pertanyaanKedua.setAttribute("data-bs-toggle", "modal");
    setTimeout(jawab2, 300);
}


let jawab2 = function () {
  pertanyaanKedua.click();
};


const buttonPertanyaanKetiga = document.querySelector('#tombolPertanyaanKetiga');
const pertanyaanKetiga = document.querySelector('#pertanyaanKetiga');
const buttonPertanyaanKeempat = document.querySelector('#tombolPertanyaanKeempat');

const pertanyaanKeempat = document.querySelector('#pertanyaanKeempat');

buttonPertanyaanKeempat.onclick = function() {
  pertanyaanKetiga.style.display = "none";
  pertanyaanKeempat.style.display = "block";

}




buttonPertanyaanKetiga.onclick = function() {
  pertanyaanKedua.style.display = "none";
  pertanyaanKetiga.style.display="block";
}





const button = document.querySelector("#jwbPertama");
const buttonMau = document.querySelector("#mauBanget");

button.addEventListener("mouseover", function () {
  let x = Math.floor(Math.random() * 300) + 1;
  let y = Math.floor(Math.random() * 100) + buttonMau.offsetTop;

  this.style.position = "absolute";
  this.style.left = x + "px";
  this.style.top = y + "px";
});

const berubah = document.querySelector("#berubah");
const range = document.querySelector("#range");

range.addEventListener("change", function () {
  berubah.innerHTML = "Seberapa Sayang Sama Aku &#9829";
  setTimeout(hadiahKamu, 1000);
});

const hadiahTerakhir = document.querySelector('#hadiahTerakhir');

let hadiahKamu = function() {
    pertanyaanKeempat.style.display="none";
    hadiahTerakhir.style.display="block";
}





// // https://www.youtube.com/watch?v=GJrR58QGenw



