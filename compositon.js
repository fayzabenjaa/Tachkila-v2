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
  function GardienTrn(player, target) {
        const GB = document.querySelector("#GB");
        GB.classList.remove("border-dashed");
        GB.innerHTML = `
        <div class="col-start-1 col-span-2 row-start-4 row-span-3 h-full bg-[#111827] border-2 border-yellow-500 rounded-2xl">
                        <div class="flex items-center justify-center h-full gap-2">
                            <span
                                class="flex items-center justify-center w-10 h-10 rounded-full border-2 border-yellow-500 text-yellow-500 font-bold">${player.number}</span>
                            <div>
                                <p class="text-yellow-500 text-xs font-bold">GB</p>
                                <p class="text-white font-bold text-sm">${player.name}</p>
                            </div>
                        </div>
                    </div>`;
      }
    function gb(player, position) {
        const target = document.querySelector(`#${position}`);

        if (!target) return;

        GardienTrn(player, target);
      }
      const positionSelects = document.querySelectorAll(".positionSelect");
      positionSelects.forEach((positionSelect, index) => {
        positionSelect.addEventListener("change", function () {
          const gardien = players.filter(
            (player) => player.role === "Gardien",
          );

          const playerIndex = Number(positionSelect.dataset.playerIndex);
          const player = players[playerIndex];

          if (!player) return;
          if (player.position !== "banc") {
            const oldPosition = document.querySelector(`#${player.position}`);

            if (oldPosition) {
              oldPosition.innerHTML = `
          <p class="text-yellow-400 font-bold">${player.position}</p>
          <p class="text-gray-400 text-xs">Libre</p>
        `;
              oldPosition.classList.add("border-dashed");
            }
          }
          player.position = positionSelect.value;

          if (player.position !== "banc") {
            gb(player, player.position);
          }
        });
      });



  upgradePlayerNumber(userPlayers)
}
compositionPlayer();

function upgradePlayerNumber () {
  console.log(document.querySelectorAll(".positionSelect").length);
  let allplayers = document.querySelector("#playersn");
  allplayers.innerText = `${players.length} joueur(s)`;
}

