let inputArray = JSON.parse(localStorage.getItem("players")) || [];

function savePlayer() {
  localStorage.setItem("players", JSON.stringify(inputArray));
}