const Ajoutermatchs = document.querySelector('#Ajoutermatchs');
let matchs = [];

export function matchCard () {
    const  matchCard = document.querySelector('#match-card');
    matchCard.innerHTML = ``;

  const adversaire = document.querySelector('#adversaire').value;
  const date = document.querySelector('#date').value;
  const heure = document.querySelector('#heure').value;
  const lieu = document.querySelector('#lieu').value;
  const local = document.querySelector('input[name="position"]:checked');

  const match = {
    id: matchs.length,
    adversaire: adversaire,
    date: date,
    heure: heure,
    lieu: lieu,
    local: local,
  }

    matchCard.innerHTML += `       <div
        class="flex m-1 bg-slate-800 border-slate-700 rounded-2xl mt-4 text-white"
      >
        <article class="flex justify-start">
          <div
            class="m-5 flex flex-col justify-center items-center bg-slate-900 p-3 rounded-2xl text-gray-400"
          >
            <p>SAM</p>
            <p class="text-white font-bold">10</p>
            <p>oct</p>
            <p>${heure}</p>
          </div>
          <div
            class="text-gray-400 m-2 lg:m-10 flex flex-col lg:justify-center"
          >
            <p>${local}</p>
            <h2 class="text-white font-bold">Atlas FC vs ${adversaire}</h2>
            <div class="flex flex-col">
              <img src="" alt="" />
              <p>stade ${lieu}</p>

              <div class="lg:hidden flex flex-col justify-center items-center">
                <button class="matchScore text-white m-1 bg-blue-600 rounded-2xl p-2">Saisir le score</button>
                <a
                  href="composition.html"
                  class="bg-slate-700 p-1 rounded-2xl m-1"
                  >voir la composition</a
                >
                <div class="flex flex-row ml-auto justify-end">
                  <button class="bg-slate-900 p-1 rounded-2xl m-1">edit</button>
                  <button class="bg-slate-900 p-1 rounded-2xl m-1">
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
              <button id="matchScore" class="bg-blue-600 rounded-2xl p-2">Saisir le score</button>
            </div>
            <a href="composition.html" class="bg-slate-700 p-2 rounded-2xl"
              >voir la composition</a
            >
          </div>
          <div class="max-sm:hidden flex justify-center items-center">
            <button class="bg-slate-900 p-2 rounded-2xl m-5">edit</button>
            <button class="bg-slate-900 p-2 rounded-2xl m-5">delet</button>
          </div>
        </article>
      </div>`;
}