
export function userPlayers(){
    return JSON.parse(localStorage.getItem("players")) || [];
}
export function savePlayer(inputArray) {
  localStorage.setItem("players", JSON.stringify(inputArray));
}