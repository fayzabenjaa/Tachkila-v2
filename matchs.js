const Ajoutermatchs = document.querySelector('#Ajoutermatchs');
let matchs = [];

export function matchCard () {
    const  matchCard = document.querySelector('#match-card');
    matchCard.innerHTML = ``;

  const adversaire = adversaireinput.value;
  const date = dateinput.value;
  const heure = heureinput.value;
  const lieu = lieuinput.value;
  const local = document.querySelector('input[name="position"]:checked');

    matchCard.innerHTML += ` <article id="match-card" class="flex justify-start">
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
                <h1 class="text-green-500 font-bold">3-1</h1>
                <p>victiore</p>
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
        </article>`;
}