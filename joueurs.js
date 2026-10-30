const playerbtn = document.querySelector('#confirm');

function playercard() {
  const playerCard = document.querySelector("#player-card");
  playerCard.innerHTML = ` `;

  for (let i = 0; i < inputArray.length; i++) {
    const player = inputArray[i];

    if (player.role == "Gardien") {
      playerCard.innerHTML += `
      <div class="relative w-full max-w-[350px] border-[#d4a32f] rounded-2xl border border-[#344155] bg-[#1e293b] p-4 m-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="text-[#d4a32f]">${player.number}</div>

            <div>
              <h2 class="text-gray-300">${player.name}</h2>
              <p class="text-sm text-[#d4a32f]">${player.role}</p>
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
      //show

      function GardienTrn() {
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
      // GardienTrn();

      function gb(player, position) {
        const target = document.querySelector(`#${position}`);

        if (!target) return;

        GardienTrn();
      }
      const positionSelects = document.querySelectorAll(".positionSelect");

      positionSelects.forEach((positionSelect, index) => {
        positionSelect.addEventListener("change", function () {
          const gardien = inputArray.filter(
            (player) => player.role === "Gardien",
          );

          const playerIndex = Number(positionSelect.dataset.playerIndex);
          const player = inputArray[playerIndex];

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
      //DELET

      //edit button
      
      
    } else if (player.role == "Défenseur") {
      playerCard.innerHTML += `
      <div class="relative w-full max-w-[350px] border-blue-500 rounded-2xl border border-[#344155] bg-[#1e293b] p-4 m-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="text-blue-500 ">${player.number}</div>

            <div>
              <h2 class="text-gray-300">${player.name}</h2>
              <p class="text-sm text-blue-500">${player.role}</p>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <button data-id="${player.id}" class="edit-btn text-[#c17a62]">edit</button>
            <button data-id="${player.id}" class="delete-btn text-gray-500">delete</button>
          </div>
        </div>
      </div>
      <div id="Dpositions" class="relative mt-3">
          <select data-player-index="${i}" class="positionSelect w-full rounded-lg border border-[#344155] bg-[#1e293b] px-4 py-3 pr-10 text-sm text-gray-300">
            <option value="banc">Sur le banc</option>
            <option value="DG">DG - Défenseur gauche</option>
            <option value="DC1">DC - Défenseur central 1</option>
            <option value="DC2">DC - Défenseur central 2</option>
            <option value="DD">DD - Défenseur droit</option>
          </select>
        </div>
    `;
      //SECOND WAY

      function dg(player, position) {
        const target = document.querySelector(`#${position}`);

        if (!target) return;

        target.innerHTML = `

  <p class="text-blue-400 font-bold">${player.number}</p>
  <p class="text-gray-400 text-xs">${player.name}</p>
`;

        target.classList.remove("border-dashed");
      }

      const positionSelects = document.querySelectorAll(".positionSelect");

      positionSelects.forEach((positionSelect, index) => {
        positionSelect.addEventListener("change", function () {
          const defenders = inputArray.filter(
            (player) => player.role === "Défenseur",
          );

          const playerIndex = Number(positionSelect.dataset.playerIndex);
          const player = inputArray[playerIndex];

          if (!player) return;
          if (player.position !== "banc") {
            const oldPosition = document.querySelector(`#${player.position}`);

            if (oldPosition) {
              oldPosition.innerHTML = `
          <p class="text-blue-400 font-bold">${player.position}</p>
          <p class="text-gray-400 text-xs">Libre</p>
        `;
              oldPosition.classList.add("border-dashed");
            }
          }

          player.position = positionSelect.value;

          if (player.position !== "banc") {
            dg(player, player.position);
          }
        });
      });
      //deletbtn
    } else if (player.role == "Milieu") {
      playerCard.innerHTML += `
      <div class="relative w-full max-w-[350px] border-green-500 rounded-2xl border border-[#344155] bg-[#1e293b] p-4 m-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="text-green-500">${player.number}</div>

            <div>
              <h2 class="text-gray-300">${player.name}</h2>
              <p class="text-sm text-green-500">${player.role}</p>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <button data-id="${player.id}" class="edit-btn text-[#c17a62]">edit</button>
            <button data-id="${player.id}" class="delete-btn text-gray-500">delete</button>
          </div>
        </div>
      </div>
      <div id="Mpositions" class="relative mt-3">
          <select data-player-index="${i}" class="positionSelect w-full rounded-lg border border-[#344155] bg-[#1e293b] px-4 py-3 pr-10 text-sm text-gray-300">
            <option value="banc">Sur le banc</option>
            <option value="MG">MG - Milieu gauche</option>
            <option value="MC1">MC - Milieu central 1</option>
            <option value="MC2">MC - Milieu central 2</option>
            <option value="MD">MD - Milieu droit</option>
          </select>
        </div>
    `;
      function mg(player, position) {
        const target = document.querySelector(`#${position}`);

        if (!target) return;

        target.innerHTML = `

  <p class="text-green-400 font-bold">${player.number}</p>
  <p class="text-gray-400 text-xs">${player.name}</p>
`;

        target.classList.remove("border-dashed");
      }

      const positionSelects = document.querySelectorAll(".positionSelect");

      positionSelects.forEach((positionSelect, index) => {
        positionSelect.addEventListener("change", function () {
          const Milieu = inputArray.filter(
            (player) => player.role === "Milieu",
          );

          const playerIndex = Number(positionSelect.dataset.playerIndex);
          const player = inputArray[playerIndex];

          if (!player) return;
          if (player.position !== "banc") {
            const oldPosition = document.querySelector(`#${player.position}`);

            if (oldPosition) {
              oldPosition.innerHTML = `
          <p class="text-green-400 font-bold">${player.position}</p>
          <p class="text-gray-400 text-xs">Libre</p>
        `;
              oldPosition.classList.add("border-dashed");
            }
          }

          player.position = positionSelect.value;

          if (player.position !== "banc") {
            mg(player, player.position);
          }
        });
      });
    } else if (player.role == "Attaquant") {
      playerCard.innerHTML += `
      <div class="relative w-full max-w-[350px] border-red-500 rounded-2xl border border-[#344155] bg-[#1e293b] p-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="text-red-500">${player.number}</div>

            <div>
              <h2 class="text-gray-300">${player.name}</h2>
              <p class="text-sm text-red-500">${player.role}</p>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <button data-id="${player.id}" class="edit-btn text-[#c17a62]">edit</button>
            <button data-id="${player.id}" class="delete-btn text-gray-500">delete</button>
          </div>
        </div>
      </div>
      <div id="Apositions" class="relative mt-3">
          <select data-player-index="${i}" class="positionSelect w-full rounded-lg border border-[#344155] bg-[#1e293b] px-4 py-3 pr-10 text-sm text-gray-300">
            <option value="banc">Sur le banc</option>
            <option value="BU1">BU1 - Buteur 1</option>
            <option value="BU2">BU2 - Buteur 2</option>
          </select>
        </div>
    `;
      function du(player, position) {
        const target = document.querySelector(`#${position}`);

        if (!target) return;

        target.innerHTML = `

  <p class="text-red-400 font-bold">${player.number}</p>
  <p class="text-gray-400 text-xs">${player.name}</p>
`;

        target.classList.remove("border-dashed");
      }

      const positionSelects = document.querySelectorAll(".positionSelect");

      positionSelects.forEach((positionSelect, index) => {
        positionSelect.addEventListener("change", function () {
          const attaquant = inputArray.filter(
            (player) => player.role === "Attaquant",
          );

          const playerIndex = Number(positionSelect.dataset.playerIndex);
          const player = inputArray[playerIndex];

          if (!player) return;
          if (player.position !== "banc") {
            const oldPosition = document.querySelector(`#${player.position}`);

            if (oldPosition) {
              oldPosition.innerHTML = `
          <p class="text-red-400 font-bold">${player.position}</p>
          <p class="text-gray-400 text-xs">Libre</p>
        `;
              oldPosition.classList.add("border-dashed");
            }
          }

          player.position = positionSelect.value;

          if (player.position !== "banc") {
            du(player, player.position);
          }
        });
      });
    }
  }

  //deletbtn
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const playerID = Number(this.dataset.id);

      inputArray = inputArray.filter((player) => player.id !== playerID);

      savePlayer();
      playercard();
    });
  });
  updateplayernumber();
}

import { validation } from "./validation.js";
playerbtn.addEventListener('click', validation)

const Ajouterbtn = document.querySelector('#Ajouter');
Ajouterbtn.addEventListener('click', playercard)

//recherch filtre
const allplayers = document.querySelector('#allplayers');
const allgb = document.querySelector('#allgb');
const alldef = document.querySelector('#alldef');
const allmil = document.querySelector('#allmil');
const allatt = document.querySelector('#allatt');

function allplayersf () {
    allplayers.classList.add('bg-green-600');
    allgb.classList.remove('bg-green-600');
    alldef.classList.remove('bg-green-600');
    allmil.classList.remove('bg-green-600');
    allatt.classList.remove('bg-green-600');
}
function allgbf () {
    allplayers.classList.remove('bg-green-600');
    allgb.classList.add('bg-green-600');
    alldef.classList.remove('bg-green-600');
    allmil.classList.remove('bg-green-600');
    allatt.classList.remove('bg-green-600');
}
function alldeff () {
    allplayers.classList.remove('bg-green-600');
    allgb.classList.remove('bg-green-600');
    alldef.classList.add('bg-green-600');
    allmil.classList.remove('bg-green-600');
    allatt.classList.remove('bg-green-600');
}
function allmilf () {
    allplayers.classList.remove('bg-green-600');
    allgb.classList.remove('bg-green-600');
    alldef.classList.remove('bg-green-600');
    allmil.classList.add('bg-green-600');
    allatt.classList.remove('bg-green-600');
}
function allattf () {
    allplayers.classList.remove('bg-green-600');
    allgb.classList.remove('bg-green-600');
    alldef.classList.remove('bg-green-600');
    allmil.classList.remove('bg-green-600');
    allatt.classList.add('bg-green-600');
}

allplayers.addEventListener('click', allplayersf);
allgb.addEventListener('click', allgbf);
alldef.addEventListener('click', alldeff);
allmil.addEventListener('click', allmilf);
allatt.addEventListener('click', allattf);


