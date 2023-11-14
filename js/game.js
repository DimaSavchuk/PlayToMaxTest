class Game {
  constructor(cols, rows) {
    this.cols = cols;
    this.rows = rows;
    this.field = [];
    this.selectedElement = [];
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

    table.innerHTML = "";

    for (let i = 0; i < this.rows; i++) {
      let row = document.createElement("tr");
      for (let j = 0; j < this.cols; j++) {
        let cell = document.createElement("td");

        cell.onclick = (() => {
          return () => {
            this.handleClick(i, j);
          };
        })();

        cell.textContent = this.getFigure(this.field[i][j]);
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
  }

  handleClick(row, col) {
    if (this.selectedElement.length === 0) {
      this.selectElements(row, col);
    } else if (this.isSelectedElement(row, col)) {
      this.removeSelectedElements();
    } else {
      this.resetSelection();
    }
  }

  isSelectedElement(row, col) {
    return this.selectedElement.some(
      (element) => element.row === row && element.col === col
    );
  }

  resetSelection() {
    this.selectedElement = [];
    this.updateField();
  }

  selectElements(row, col) {
    let group = this.getElementGroup(row, col);
    if (group.length === 1 || group.length === 0) {
      window.alert("Please select a group");
      return;
    }

    this.selectedElement = group;
    this.highlightSelectedElements();
  }

  removeSelectedElements() {
    for (let i = 0; i < this.selectedElement.length; i++) {
      this.field[this.selectedElement[i].row][this.selectedElement[i].col] = -1;
    }
    this.selectedElement = [];
    this.updateField();
  }

  highlightSelectedElements() {
    let table = document.getElementById("game-board");
    for (let i = 0; i < this.selectedElement.length; i++) {
      let { row, col } = this.selectedElement[i];
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

  getElementGroup(row, col) {
    let group = [];
    let element = this.field[row][col];

    this.findConnectedElements(row, col, element, group);
    return group;
  }

  findConnectedElements(row, col, element, group) {
    if (
      row < 0 ||
      row >= this.rows ||
      col < 0 ||
      col >= this.cols ||
      this.field[row][col] !== element
    ) {
      return;
    }

    if (!group.some((element) => element.row === row && element.col === col)) {
      group.push({ row, col });
      this.findConnectedElements(row - 1, col, element, group);
      this.findConnectedElements(row + 1, col, element, group);
      this.findConnectedElements(row, col - 1, element, group);
      this.findConnectedElements(row, col + 1, element, group);
    }
  }

  updateField() {
    let table = document.getElementById("game-board");

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        table.rows[i].cells[j].classList.remove("selected");
      }
    }

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        table.rows[i].cells[j].textContent = this.getFigure(this.field[i][j]);
      }
    }
  }

  restart() {
    this.initializeField();
    this.renderField();
  }
}

export default Game;
