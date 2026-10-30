
const playerbtn = document.querySelector('#confirm')

function validation () {
    const player = document.querySelector('#player');
const number = document.querySelector('#number');
const age = document.querySelector('#agenumber');

const playername = player.value;
const playernumber = number.value;


const numbererror = document.querySelector('#errorn');
const nameerror = document.querySelector('#error');

if (playernumber == "" && playername == "") {
    nameerror.innerText = "entre nom";
    numbererror.innerText = "entre numbre";
  } else if (playername == "") {
    nameerror.innerText = "entre nom";
    numbererror.classList.add("hidden");
  } else if (playernumber == "") {
    numbererror.innerText = "entre numbre";
    nameerror.classList.add("hidden");
  } else if (!/^[a-zA-Z]+$/.test(playername)) {
    nameerror.innerText = "les numéros ne sont pas valides";
  } else {
    nameerror.classList.add("hidden");
    numbererror.classList.add("hidden");
    const playerRole = poste.value;

    const limits = {
      Gardien:1,
      Défenseur:4,
      Milieu:4,
      Attaquant:2
    }
    const roleCounter = inputArray.filter(player => player.role === playerRole).length;

    if (roleCounter >= limits[playerRole]){
      alert("you cant add more")
      return;
    }
    nputArray.push({
      id: Date.now(),
      name: playername,
      number: playernumber,
      role: playerRole,
      position: "banc",
    });
    savePlayer();
    playercard();
    console.log(inputArray);
    for (let i = 0; i < inputArray.length; i++) {
      const li = document.createElement("li");
      li.innerText = inputArray[i];
    }
    if (nom) {
      nom.value = "";
    } else {
      console.error("Input element not found.");
    }
    if (number) {
      number.value = "";
    } else {
      console.error("Input element not found.");
    }

    overlay.classList.add("hidden");
  }
}
playerbtn.addEventListener('click', validation);

