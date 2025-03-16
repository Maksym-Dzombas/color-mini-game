import { getRandomColor } from "./get-random-color.js";

export function setColor(element, colors) {
  const color = getRandomColor(colors);
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 5px ${color}, 0 0 10px ${color}`;
}