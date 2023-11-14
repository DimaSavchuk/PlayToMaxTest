class GameRender {
  constructor(gameLogic) {
    this.gameLogic = gameLogic;
  }

  renderField() {
    let table = document.getElementById("game-field");

    table.innerHTML = "";

    for (let i = 0; i < this.gameLogic.rows; i++) {
      let row = document.createElement("tr");
      for (let j = 0; j < this.gameLogic.cols; j++) {
        let cell = document.createElement("td");

        cell.onclick = (() => {
          return () => {
            this.gameLogic.handleClick(i, j);
            this.updateField();
          };
        })();

        cell.textContent = this.getFigure(this.gameLogic.field[i][j]);
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
  }

  highlightSelectedElements() {
    let table = document.getElementById("game-field");
    for (let i = 0; i < this.gameLogic.selectedElement.length; i++) {
      let { row, col } = this.gameLogic.selectedElement[i];
      table.rows[row].cells[col].classList.add("selected");
    }
  }

  getFigure(value) {
    switch (value) {
      case 0:
        return "♦";

      case 1:
        return "♥";

      case 2:
        return "♠";

      case 3:
        return "♣";

      default:
        return "";
    }
  }

  updateField() {
    let table = document.getElementById("game-field");

    for (let i = 0; i < this.gameLogic.rows; i++) {
      for (let j = 0; j < this.gameLogic.cols; j++) {
        table.rows[i].cells[j].classList.remove("selected");
      }
    }

    for (let i = 0; i < this.gameLogic.rows; i++) {
      for (let j = 0; j < this.gameLogic.cols; j++) {
        table.rows[i].cells[j].textContent = this.getFigure(
          this.gameLogic.field[i][j]
        );
      }
    }

    this.highlightSelectedElements();
  }
}

export default GameRender;
