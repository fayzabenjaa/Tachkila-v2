import { userPlayers, savePlayer } from "./stockage.js";
let inputArray = userPlayers();

function updateplayernumber() {
  console.log(document.querySelectorAll(".positionSelect").length);
  let allplayers = document.querySelector("#playersn");
  allplayers.innerText = `${inputArray.length} joueur(s)`;
}
export function playerCard(players = inputArray) {
  const playerContainer = document.querySelector(".player-card");
  playerContainer.innerHTML = ``;
  const roles = {
    Gardien: {
      short: "GB",
      color: "yellow-500",
      bg: "bg-[#111827]",
    },
    Défenseur: {
      short: "DEF",
      color: "blue-500",
      bg: "bg-[#101F3D]",
    },
    Milieu: {
      short: "MIL",
      color: "green-500",
      bg: "bg-[#0B2926]",
    },
    Attaquant: {
      short: "ATT",
      color: "red-500",
      bg: "bg-[#3B1717]",
    },
  };

  players.forEach((player, i) => {
    const role = roles[player.role];

    if (!role) {
      return;
    }

    const statusColor =
      player.status === "blessé"
        ? "bg-red-900 text text-red-400"
        : "bg-[#0B2926] text-green-500";

    playerContainer.innerHTML += `
        <article class="bg-slate-800 rounded-2xl m-2">
                <div class="flex">
                    <div class="flex gap-2 justify-start">
                        <div>
                            <p
                                class="text-${role.color} flex justify-center items-center w-10 h-10 rounded-full border-2 border-${role.color} font-bold m-2">
                                ${player.number}
                            </p>
                        </div>
                        <div>
                            <p class="text-white">${player.name}</p>
                            <p class="${role.bg} rounded-2xl p-1 w-10 flex justify-center text-${role.color}">
                                ${role.short}
                            </p>
                        </div>
                    </div>
                    <button data-id="${player.id}"
                        class="status-btn ${player.captain ? "bg-purple-600 text-white " : "text-white"} border border-slate-700 rounded-2xl w-10 ml-auto m-2 hover:bg-slate-700 transition-color">
                        C
                    </button>
                </div>
                <p class="text-gray-400 p-2">àge : ${player.age} ans</p>
                <div class="lg:grid lg:grid-cols-2 m-2">
                    <p class="${statusColor} text-green-500 rounded-2xl p-2 w-20">
                        ${player.status}
                    </p>
                    <div class="text-gray-400 flex lg:gap-5 justify-end max-sm:gap-2">
                        <button data-id="${player.id}" class="edit-btn  border-slate-700 rounded-2xl p-1.5 hover:bg-slate-700 transition-color">
                            edit
                        </button>
                        <button data-id="${player.id}" class="delete-btn border border-slate-700 rounded-2xl p-1.5 hover:bg-slate-700 transition-color">
                            delet
                        </button>
                    </div>
                </div>
            </article>
        `;
  });

  deletplayer();
  editplayer();
  captainplayer();
  updateplayernumber(players);
}
// delete button
function deletplayer() {
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const playerID = Number(this.dataset.id);

      inputArray = inputArray.filter((player) => player.id !== playerID);

      savePlayer(inputArray);
      playerCard();
    });
  });
}
//edit button
let indexedit = null;
function editplayer() {
  document.querySelectorAll(".edit-btn").forEach((btn) => {
    btn.addEventListener("click", function () {

      document.querySelector("#bgblur").classList.remove("hidden");

      const editConfirm = document.querySelector("#confirm");
      editConfirm.textContent = "Enregistre";

      const editId = Number(this.dataset.id);

      const selectedplayer = inputArray.find((player) => player.id == editId);

      const player = document.querySelector('#player');
      const number = document.querySelector('#number');

        player.value = selectedplayer.nom;
        number.value = selectedplayer.number;

        indexedit = editId;

        const newPlayer = player.value;
            const newNumber = number.value;
            console.log(inputArray)
        editConfirm.addEventListener('click', (event)=> {
            event.preventDefault();
            
        })
    });
  });
}
// status btn
function captainplayer() {
  document.querySelectorAll(".status-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = Number(this.dataset.id);
      const selectPlayer = inputArray.find((player) => player.id === id);
      const newCaptainState = !selectPlayer.captain;

      inputArray.forEach((player) => {
        player.captain = player.id === id && newCaptainState;
      });

      savePlayer(inputArray);
      playerCard();
    });
  });
}

const Ajouterbtn = document.querySelector("#Ajouter");
// Ajouterbtn.addEventListener("click", playerCard);

//recherch filtre
const allplayers = document.querySelector("#allplayers");
const allgb = document.querySelector("#allgb");
const alldef = document.querySelector("#alldef");
const allmil = document.querySelector("#allmil");
const allatt = document.querySelector("#allatt");

function filterPlayers(position) {
    let filterPlayers = []
    if (position === 'tous') {
        filterPlayers = inputArray;
        playerCard();
    }else {
        filterPlayers = inputArray.filter((player)=> player.role === position)
        playerCard(filterPlayers);
    }
    console.log(
        "selected position:", position,
        "filtered players:", filterPlayers.length,
    );
}

function allplayersf() {
  allplayers.classList.add("bg-green-600");
  allgb.classList.remove("bg-green-600");
  alldef.classList.remove("bg-green-600");
  allmil.classList.remove("bg-green-600");
  allatt.classList.remove("bg-green-600");
  filterPlayers("tous");
}
function allgbf() {
  allplayers.classList.remove("bg-green-600");
  allgb.classList.add("bg-green-600");
  alldef.classList.remove("bg-green-600");
  allmil.classList.remove("bg-green-600");
  allatt.classList.remove("bg-green-600");
  filterPlayers("Gardien");
}
function alldeff() {
  allplayers.classList.remove("bg-green-600");
  allgb.classList.remove("bg-green-600");
  alldef.classList.add("bg-green-600");
  allmil.classList.remove("bg-green-600");
  allatt.classList.remove("bg-green-600");
  filterPlayers("Défenseur");
}
function allmilf() {
  allplayers.classList.remove("bg-green-600");
  allgb.classList.remove("bg-green-600");
  alldef.classList.remove("bg-green-600");
  allmil.classList.add("bg-green-600");
  allatt.classList.remove("bg-green-600");
  filterPlayers("Milieu");
}
function allattf() {
  allplayers.classList.remove("bg-green-600");
  allgb.classList.remove("bg-green-600");
  alldef.classList.remove("bg-green-600");
  allmil.classList.remove("bg-green-600");
  allatt.classList.add("bg-green-600");
  filterPlayers("Attaquant");
}


allplayers.addEventListener("click", allplayersf);
allgb.addEventListener("click", allgbf);
alldef.addEventListener("click", alldeff);
allmil.addEventListener("click", allmilf);
allatt.addEventListener("click", allattf);

const search = document.querySelector("#search");

search.addEventListener('input', ()=> {
    const recherche = search.value.toLowerCase();
    const results = inputArray.filter((player)=> {
        return player.name.toLowerCase().includes(recherche);
    })
    playerCard(results);
})

playerCard();
