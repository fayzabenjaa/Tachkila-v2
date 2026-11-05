import { matchCard } from './matchs.js'

const submitmatch = document.querySelector('#submitmatch');


function validationmatch () {
  const errorAdversaire = document.querySelector('#errorAdversaire');
  const errorDate = document.querySelector('#errorDate');
  const errorHeure = document.querySelector('#errorHeure');
  const errorlieu = document.querySelector('#errorlieu');
  const errorLocation = document.querySelector('#errorLocation');

  errorAdversaire.innerText = "";
  errorDate.innerText = "";
  errorHeure.innerText = "";
  errorlieu.innerText = "";
  errorLocation.innerText = "";

  const matchs = [];

  const adversaire = document.querySelector('#adversaire').value;
  const date = document.querySelector('#date').value;
  const heure = document.querySelector('heure').value;
  const lieu = document.querySelector('#lieu').value;
  const local = document.querySelector('input[name="position"]:checked');

  const matchCard = document.querySelector('#match-card');
  matchCard.innerHTML = ``;
  
  if (!adversaire) {
    errorAdversaire.innerText = "entrez l'adversaire";
    return;
  }
  if (!/^[a-zA-Z]+$/.test(adversaire)) {
    errorAdversaire.innerText = "Nom invalide";
    return;
  }
  if (!date) {
    errorDate.innerText = "entrez la date";
    return;
  }
  if (!heure) {
    errorHeure.innerText = "entrez la date";
    return;
  }
  if (!lieu) {
    errorlieu.innerText = "entrez le lieu"
    return;
  }
  if (!/^[a-zA-Z]+$/.test(lieu)) {
    errorlieu.innerText = "lieu invalide";
    return;
  }
  if (!errorLocation){
    errorLocation.innerText = "entrez le lieu"
    return;
  }
  const match = {
    id: matchs.length,
    adversaire: adversaire,
    date: date,
    heure: heure,
    lieu: lieu,
    local: local,
  }
  console.log(match);

  matchs.push(match)
  matchCard();

  console.log(matchs);

  document.querySelector('#adversaire').value = "";
  document.querySelector('#date').value = "";
  document.querySelector('heure').value = "";
  document.querySelector('#lieu').value = "";
  document.querySelector('input[name="position"]:checked') = "";

  const overlaymatch = document.querySelector('#overlaymatch');
  overlaymatch.classList.add("hidden");

}

submitmatch.addEventListener('click', validationmatch);

