import Game from "./game.js";

let game = new Game(6, 7);

document
  .getElementById("restart-button")
  .addEventListener("click", () => game.restart());
