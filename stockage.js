
  export function userPlayers(){
      return JSON.parse(localStorage.getItem("players")) || [];
  }
  export function savePlayer(inputArray) {
    localStorage.setItem("players", JSON.stringify(inputArray));
  }

  export function getMatchs () {
    return JSON.parse(localStorage.getItem("matchs")) || [];
  }
  export function saveMatchs (matchs) {
    localStorage.setItem("matchs", JSON.stringify(matchs))
  }