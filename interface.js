const openbtn = document.querySelector("#Ajouter");
const popup = document.querySelector("#popup");
const overlay = document.querySelector("#bgblur");
const closebtn = document.querySelector("#X");
const Annuler = document.querySelector("#Annuler");

function openpopup() {
  overlay.classList.remove("hidden");
}
function closepopup() {
  overlay.classList.add("hidden");
}
function Annulerpopup() {
  overlay.classList.add("hidden");
}
if (open && closebtn && Annuler && popup) {
    openbtn.addEventListener("click", openpopup);
closebtn.addEventListener("click", closepopup);
Annuler.addEventListener("click", Annulerpopup);   
}

const Annulermatch = document.querySelector("#Annulermatch");
const Xmatch = document.querySelector('#Xmatch');
const popupmatch = document.querySelector('#popupmatch');
const overlaymatch = document.querySelector('#overlaymatch');
const Ajoutermatchs = document.querySelector('#Ajoutermatchs');

function closepopupmatch () {
    overlaymatch.classList.add("hidden");
}
function openpopupmatch () {
    overlaymatch.classList.remove("hidden");
}
function Annulerpopupmatch () {
    overlaymatch.classList.add("hidden")
}

if (Ajoutermatchs && Xmatch && Annulermatch && overlaymatch) {
    Ajoutermatchs.addEventListener("click", openpopupmatch);
Xmatch.addEventListener("click", closepopupmatch);
Annulermatch.addEventListener("click", Annulerpopupmatch);
}

