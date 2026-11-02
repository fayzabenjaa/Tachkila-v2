import { userPlayers, savePlayer } from './stockage.js';
import { playerCard } from './joueurs.js';

const nom = document.querySelector("#player");
const number = document.querySelector("#number");


const playerbtn = document.querySelector('#confirm')



function validation() {
  const inputArray = userPlayers();
  const playername = nom.value;
  const playernumber = number.value;
  const age = Number(document.querySelector("#agenumber").value);
  const status = document.querySelector('#status').value;
  const poste = document.querySelector('input[name="position"]:checked');

  const error = document.querySelector("#error");
  const errorn = document.querySelector("#errorn");
  const errorr = document.querySelector("#errorr");
  const ageerror = document.querySelector("#ageerror");

  error.innerText = "";
  errorn.innerText = "";
  errorr.innerText = "";
  ageerror.innerText = "";

  if (!playername) {
    error.innerText = "Entrez le nom";
    return;
  }

  if (!/^[a-zA-Z]+$/.test(playername)) {
    error.innerText = "Nom invalide";
    return;
  }
  if (!playernumber || playernumber < 1 || playernumber > 99) {
    errorn.innerText = "Number invalide";
    return;
  }
  if (inputArray.some(p => Number(p.number) === Number(playernumber))) {
    errorn.innerText = "number used";
    return;
  }
  if (!poste) {
    errorr.innerText = "chose a poste";
    return;
  }



  const playerRole = poste.value;


  const limits = {
    Gardien: 2,
    Défenseur: 4,
    Milieu: 4,
    Attaquant: 2
  }

  const roleCounter = inputArray.filter(player => player.role === playerRole).length;

  if (roleCounter >= limits[playerRole]) {
    alert("you cant add more")
    return;
  }
  const newPlayer = {
    id: Date.now(),
    name: playername,
    number: playernumber,
    role: playerRole,
    age: age,
    status: status,
    position: "banc",
    captain: false
  };
  inputArray.push(newPlayer);

  savePlayer(inputArray);
  playerCard();
  location.reload();

  console.log(inputArray);

  document.querySelector("#player").value = "";
  document.querySelector("#number").value = "";
  document.querySelector("#agenumber").value = "";
  document.querySelector("#status").value = "enforme";

  document.querySelector("#bgblur").classList.add("hidden");

  poste.checked = false;

}

playerbtn.addEventListener("click", validation)
