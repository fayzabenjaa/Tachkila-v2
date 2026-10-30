import {userPlayers,savePlayer} from './stockage.js';
import {playerCard} from './joueurs.js';

const playerbtn = document.querySelector('#confirm')

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

function validation() {


    const playername = nom.value;
    const playernumber = number.value;
    const age = Number(document.querySelector("#agenumber").value);
    const status = document.querySelector('#status').value;
    const poste = document.querySelector('input[name="position"]:checked');

    const error = document.querySelector("#error");
    const errorn = document.querySelector("#errorn");
    const errorr = document.querySelector("#errorr");
    const ageerror = document.querySelector("#ageerror");

    if (playernumber == "" && playername == "") {
        error.innerText = "entre nom";
        errorn.innerText = "entre numbre";
    } else if (playername == "") {
        error.innerText = "entre nom";
        errorn.classList.add("hidden");
    } else if (playernumber == "") {
        errorn.innerText = "entre numbre";
        error.classList.add("hidden");
    } else if (!/^[a-zA-Z]+$/.test(playername)) {
        error.innerText = "les numéros ne sont pas valides";
    } else {
        error.classList.add("hidden");
        errorn.classList.add("hidden");
        const playerRole = poste.value;


        const limits = {
            Gardien: 1,
            Défenseur: 4,
            Milieu: 4,
            Attaquant: 2
        }

        const roleCounter = inputArray.filter(player => player.role === playerRole).length;

        if (roleCounter >= limits[playerRole]) {
            alert("you cant add more")
            return;
        }
        inputArray.push(newPlayer);

        savePlayer();
        playerCard();

        console.log(inputArray);

        document.querySelector("#player").value = "";
        document.querySelector("#number").value = "";
        document.querySelector("#agenumber").value = "";
        document.querySelector("#status").value = "enforme";

        document.querySelector("#bgblur").classList.add("hidden");

    }
}