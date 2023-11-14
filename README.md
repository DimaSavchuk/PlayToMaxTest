# PlayToMax test task

This repository contains the implementation of a simple game consisting. The game involves selecting connected elements on a game board.

## Main classes
## GameLogic
`GameLogic` is responsible for managing the game's state, including the game board, selected elements, and logic for handling player interactions.

### Methods:
*initializeField(): Initializes the game board with random elements.
*handleClick(): Handles a player click at the specified row and column. Depending on the game logic, it selects elements, removes selected elements, or resets the selection.
*selectElements(): Selects a group of connected elements based on the clicked element.
*isSelectedElement(): Checks if the specified element is selected.
*resetSelection(): Resets the selected elements.
*removeSelectedElements(): Removes the selected elements from the game board.
*getElementGroup(): Returns an array of connected elements based on the specified row and column.
*findConnectedElements(): Recursively finds connected elements to form a group.


## GameRender
`GameRender` is responsible for rendering the game on the user interface, updating the display based on the game state.

### Methods:
*renderField(): Renders the game board on the user browser, including handling click events.
*highlightSelectedElements(): Highlights the selected elements on the user interface.
*getFigure(): Converts the numeric value of a game element to a corresponding visual representation.
*updateField(): Updates the game board on the user interface, including clearing previous selections and highlighting the current ones.

## Usage

```
const gameLogic = new GameLogic(5, 6); // specify the field dimensions
```

## Additional Features

*Visual Representation: The game elements are visually represented using symbols (♦, ♥, ♠, ♣).
*Selection Highlighting: Selected elements are visually highlighted on the game board.
*Element Group Detection: The game logic can detect connected groups of elements.
