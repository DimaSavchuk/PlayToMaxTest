class GameLogic {
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

  selectElements(row, col) {
    let group = this.getElementGroup(row, col);
    if (group.length === 1 || group.length === 0) {
      window.alert("Please select a group");
      return;
    }

    this.selectedElement = group;
  }

  isSelectedElement(row, col) {
    return this.selectedElement.some(
      (element) => element.row === row && element.col === col
    );
  }

  resetSelection() {
    this.selectedElement = [];
  }

  removeSelectedElements() {
    for (let i = 0; i < this.selectedElement.length; i++) {
      this.field[this.selectedElement[i].row][this.selectedElement[i].col] = -1;
    }
    this.selectedElement = [];
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
}

export default GameLogic;
