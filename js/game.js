class Game {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.field = [];
    this.initializeField();
  }

  initializeField() {
    for (let i = 0; i < this.rows; i++) {
      this.field[i] = [];

      for (let j = 0; j < this.cols; j++) {
        this.field[i][j] = Math.floor(Math.random() * 4);
      }
    }
    this.renderField();
  }

  renderField() {
    let table = document.getElementById("game-board");

    for (let i = 0; i < this.rows; i++) {
      let row = document.createElement("tr");
      for (let j = 0; j < this.cols; j++) {
        let coll = document.createElement("td");
        coll.onclick = ((row, coll) => {
          return () => {
            this.removeElement(row, coll);
          };
        })(i, j);
        coll.textContent = this.field[i][j];
        row.appendChild(coll);
      }
      table.appendChild(row);
    }
  }

  removeElement(row, coll) {
    let group = this.getElementGroup(row, coll);
    for (let i = 0; i < group.length; i++) {
      this.field[group[i].row][group[i].coll] = -1;
    }
    this.updateField();
  }

  getElementGroup(row, coll) {
    let group = [];
    let element = this.field[row][coll];

    return group;
  }

  updateField() {
    let table = document.getElementById("game-board");
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        table.rows[i].cells[j].textContent = this.field[i][j];
      }
    }
  }
}

export default Game;
