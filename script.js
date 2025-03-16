import { setColor } from "./functions/set-color.js";
import { removeColor } from "./functions/remove-color.js";

const board = document.getElementById('board');
const SQUARES_NUMBER = 182;
const colors = ['#02946b', '#4fb7d1', '#fe3047', '#c26634', '#f90aaf', '#b097b6', '#cff8a8', '#5ae10b'];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  board.append(square);

  square.addEventListener('mouseover', () => setColor(square, colors));
  square.addEventListener('mouseleave', () => removeColor(square));
}