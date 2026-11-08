import { userPlayers, savePlayer } from "./stockage.js";

let players = userPlayers();

function compositionPlayer () {
    const compositionPlayer = document.querySelector("#compositionPlayer")
    compositionPlayer.innerHTML=``;
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
    const role = roles[player.role]
  if (!role){
    return;
  }
  compositionPlayer.innerHTML += `
  <div class="relative w-full max-w-[350px] border-${role.color} rounded-2xl border border-[#344155] bg-[#1e293b] p-4 m-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="text-${role.color}">${player.number}</div>

            <div>
              <h2 class="text-gray-300">${player.name}</h2>
              <p class="text-sm text-${role.color}">${player.role}</p>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <button data-id="${player.id}" id="editbtn" class="edit-btn text-[#c17a62]">edit</button>
            <button data-id="${player.id}" class="delete-btn text-gray-500">delete</button>
          </div>
        </div>
      </div>
      <div id="Dpositions" class="relative mt-3">
          <select data-player-index="${i}" class="positionSelect w-full rounded-lg border border-[#344155] bg-[#1e293b] px-4 py-3 pr-10 text-sm text-gray-300">
            <option value="banc">Sur le banc</option>
            <option value="GB">GB - Gardien</option>
          </select>
        </div>
  `;
  });
  upgradePlayerNumber(userPlayers)
}
compositionPlayer();

function upgradePlayerNumber () {
  console.log(document.querySelectorAll(".positionSelect").length);
  let allplayers = document.querySelector("#playersn");
  allplayers.innerText = `${players.length} joueur(s)`;
}

