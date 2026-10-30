const playerbtn = document.querySelector("#confirm");

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


function updateplayernumber() {
    console.log(document.querySelectorAll(".positionSelect").length);
    let allplayers = document.querySelector("#playersn");
    allplayers.innerText = `${inputArray.length} joueur(s)`;
}
function playerCard() {
    const playerCard = document.querySelector("#player-card");
    playerCard.innerHTML = ``;
    const roles = {
        Gardien: {
            short: "GB",
            color: "yellow",
            bg: "bg-[#111827]",
        },
        Défenseur: {
            short: "DEF",
            color: "blue",
            bg: "bg-[#101F3D]",
        },
        Milieu: {
            short: "MIL",
            color: "green",
            bg: "bg-[#0B2926]",
        },
        Attaquant: {
            short: "ATT",
            color: "red",
            bg: "bg-[#3B1717]",
        },
    };

    inputArray.forEach((player, i) => {
        const role = roles[player.role];

        if (!role) {
            return;
        }

        const statusColor =
            player.status === "blessé"
                ? "bg-red-900 text text-red-400"
                : "bg-[#0B2926] text-green-500";

        playerCard.innerHTML += `
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
                            <p class="${role.bg} rounded-2xl p-1 w-10 flex justify-center text-${role.color}-300">
                                ${role.short}
                            </p>
                        </div>
                    </div>
                    <button data-id="${player.id}"
                        class="status-btn ${player.captain ? 'bag-yallow-500 text-black' : 'text-white'} border border-slate-700 rounded-2xl w-10 ml-auto m-2">
                        C
                    </button>
                </div>
                <p class="text-gray-400 p-2">àge : ${player.age} ans</p>
                <div class="lg:grid lg:grid-cols-2 m-2">
                    <p class="${statusColor} text-green-500 rounded-2xl p-2 w-20">
                        ${player.status}
                    </p>
                    <div class="text-gray-400 flex lg:gap-5 justify-end max-sm:gap-2">
                        <button data-id="${player.id}" class="edit-btn  border-slate-700 rounded-2xl p-1.5">
                            edit
                        </button>
                        <button data-id="${player.id}" class="delete-btn border border-slate-700 rounded-2xl p-1.5">
                            delet
                        </button>
                    </div>
                </div>
            </article>
        `;
        document.querySelectorAll(".delete-btn").forEach((btn) => {
            btn.addEventListener("click", function () {
                const playerID = Number(this.dataset.id);

                inputArray = inputArray.filter((player) => player.id !== playerID);

                savePlayer();
                playercard();
            });
            updateplayernumber();
        });
        document.querySelectorAll('.status-btn').forEach(btn => {
            btn.addEventListener("click", function () {
                const id = Number(this.dataset.id);
                inputArray.forEach(player => {
                    player.captain = player.id === id;
                });

                savePlayer();
                playerCard();
            })
        })

    });
}



import { validation } from "./validation.js";
playerbtn.addEventListener("click", validation);


const Ajouterbtn = document.querySelector("#Ajouter");
Ajouterbtn.addEventListener("click", playercard);

//recherch filtre
const allplayers = document.querySelector("#allplayers");
const allgb = document.querySelector("#allgb");
const alldef = document.querySelector("#alldef");
const allmil = document.querySelector("#allmil");
const allatt = document.querySelector("#allatt");

function allplayersf() {
    allplayers.classList.add("bg-green-600");
    allgb.classList.remove("bg-green-600");
    alldef.classList.remove("bg-green-600");
    allmil.classList.remove("bg-green-600");
    allatt.classList.remove("bg-green-600");
}
function allgbf() {
    allplayers.classList.remove("bg-green-600");
    allgb.classList.add("bg-green-600");
    alldef.classList.remove("bg-green-600");
    allmil.classList.remove("bg-green-600");
    allatt.classList.remove("bg-green-600");
}
function alldeff() {
    allplayers.classList.remove("bg-green-600");
    allgb.classList.remove("bg-green-600");
    alldef.classList.add("bg-green-600");
    allmil.classList.remove("bg-green-600");
    allatt.classList.remove("bg-green-600");
}
function allmilf() {
    allplayers.classList.remove("bg-green-600");
    allgb.classList.remove("bg-green-600");
    alldef.classList.remove("bg-green-600");
    allmil.classList.add("bg-green-600");
    allatt.classList.remove("bg-green-600");
}
function allattf() {
    allplayers.classList.remove("bg-green-600");
    allgb.classList.remove("bg-green-600");
    alldef.classList.remove("bg-green-600");
    allmil.classList.remove("bg-green-600");
    allatt.classList.add("bg-green-600");
}

allplayers.addEventListener("click", allplayersf);
allgb.addEventListener("click", allgbf);
alldef.addEventListener("click", alldeff);
allmil.addEventListener("click", allmilf);
allatt.addEventListener("click", allattf);
