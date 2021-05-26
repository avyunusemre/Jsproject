const btnOn = document.querySelector(".on");
const btnOff = document.querySelector(".off");
const btnKir = document.querySelector(".kir");
const img = document.querySelector(".img");

const textbox = document.querySelector(".textbox");
const checkbox = document.querySelector(".checkbox");

//butona tıklayınca ışık yansın
btnOn.addEventListener("click", () => {
  img.src = "./img/lamba_on.gif";
});

btnOff.addEventListener("click", () => {
  img.src = "./img/lamba_off.gif";
});

btnKir.addEventListener("click", () => {
  const audio = new Audio("./img/audio.mp3");
  audio.play();
  setTimeout(kir, 4000);
});

function kir() {
  img.src = "./img/lamba_kir.gif";
}
//resmin üzerine gelince de ampül yansın
img.addEventListener("mouseover", () => {
  img.src = "./img/lamba_on.gif";
});

img.addEventListener("mouseout", () => {
  img.src = "./img/lamba_off.gif";
});

//büyük checkbox'ı işaretli ise girilen yazı büyük olsun
textbox.addEventListener("keyup", () => {
  checkbox.checked
    ? (textbox.value = textbox.value.toUpperCase())
    : (textbox.value = textbox.value.toLowerCase());
});

//HTML'de input-div
const sonDiv = document.querySelector(".input-div");
const h1 = document.createElement("h1");
const text = document.createTextNode("Programlama dilleri");
h1.appendChild(text);
sonDiv.after(h1);
h1.style.marginTop = "20px";
h1.style.color = "red";
h1.style.textAlign = "left";

const ekleBtn = document.querySelector(".ekle");
const silBtn = document.querySelector(".sil");
const liste = document.querySelector(".liste");

ekleBtn.addEventListener("click", () => {
  const satir = document.querySelector(".dil").value;

  const yeniLi = document.createElement("li");

  const textNode = document.createTextNode(satir);

  if (satir != "") {
    yeniLi.appendChild(textNode);

    liste.appendChild(yeniLi);
  }

  document.querySelector(".dil").value = "";
});

silBtn.addEventListener("click", () => {
  liste.removeChild(liste.lastElementChild);
});
