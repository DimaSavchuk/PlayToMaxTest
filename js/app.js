import GameLogic from "./logic.js";
import GameRender from "./render.js";

const gameLogic = new GameLogic(5, 6);
const renderGame = new GameRender(gameLogic);

renderGame.renderField();

document
  .getElementById("restart-button")
  .addEventListener("click", function () {
    gameLogic.initializeField();
    renderGame.renderField();
  });
