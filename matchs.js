const Ajoutermatchs = document.querySelector('#Ajoutermatchs');
import { getMatchs, saveMatchs } from "./stockage.js";
let matchs = getMatchs();


export function matchCard () {

  const adversaire = document.querySelector('#adversaire').value;
  const date = document.querySelector('#date').value;
  const heure = document.querySelector('#heure').value;
  const lieu = document.querySelector('#lieu').value;
  const local = document.querySelector('input[name="position"]:checked')?.value;

  const match = {
    id: Date.now(),
    adversaire: adversaire,
    date: date,
    heure: heure,
    lieu: lieu,
    local: local,
  }
  matchs.push(match)
  saveMatchs(matchs);
  displaycard();
}

function displaycard () {
    const  matchCard = document.querySelector('#match-card');
    matchCard.innerHTML = ``;

    matchs.forEach((match)=> {
      matchCard.innerHTML += ` <div
        class="flex m-1 bg-slate-800 border-slate-700 rounded-2xl mt-4 text-white"
      >
        <article class="flex justify-start">
          <div
            class="m-5 flex flex-col justify-center items-center bg-slate-900 p-3 rounded-2xl text-gray-400"
          >
            <p>SAM</p>
            <p class="text-white font-bold">10</p>
            <p>oct</p>
            <p>${match.heure}</p>
          </div>
          <div
            class="text-gray-400 m-2 lg:m-10 flex flex-col lg:justify-center"
          >
            <p>${match.local}</p>
            <h2 class="text-white font-bold">Atlas FC vs ${match.adversaire}</h2>
            <div class="flex flex-col">
              <img src="" alt="" />
              <p>stade ${match.lieu}</p>

              <div class="lg:hidden flex flex-col justify-center items-center">
                <button class="matchScore text-white m-1 bg-blue-600 rounded-2xl p-2">Saisir le score</button>
                <a
                  href="composition.html"
                  class="bg-slate-700 p-1 rounded-2xl m-1"
                  >voir la composition</a
                >
                <div class="flex flex-row ml-auto justify-end">
                  <button data-id="${match.id}" class="editMatch bg-slate-900 p-1 rounded-2xl m-1">edit</button>
                  <button data-id="${match.id}" class="deletMatch bg-slate-900 p-1 rounded-2xl m-1">
                    delet
                  </button>
                </div>
              </div>

            </div>
            
          </div>
        </article>
        <article class="flex ml-auto justify-end">
          <div class="max-sm:hidden flex flex-col justify-center gap-4 items-center">
            <div>
              <button id="${match.id}" class="scorebtn bg-blue-600 rounded-2xl p-2">Saisir le score</button>
            </div>
            <a href="composition.html" class="bg-slate-700 p-2 rounded-2xl"
              >voir la composition</a
            >
          </div>
          <div class="max-sm:hidden flex justify-center items-center">
            <button data-id="${match.id}" class="editMatch bg-slate-900 p-2 rounded-2xl m-5">edit</button>
            <button data-id="${match.id}" class="deletMatch bg-slate-900 p-2 rounded-2xl m-5">delet</button>
          </div>
        </article>
      </div>`;
  })
      deletMatchs();
  }

function deletMatchs () {
  document.querySelectorAll(".deletMatch").forEach((btn) => {
    btn.addEventListener("click", function () {
      const matchId = Number(this.dataset.id);

      matchs = matchs.filter((match) => match.id !== matchId);
      saveMatchs(matchs);
      displaycard();
    });
  });
}

// function score () {
//   document.querySelectorAll(".scorebtn").forEach((btn) => {
//     btn.addEventListener("click", function () {
//       const matchId = Number(this.dataset.id);

//     })
// }

