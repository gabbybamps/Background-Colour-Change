const button = document.querySelector("button");
const body = document.querySelector("body");

const colors = [
  `red`,
  `blue`,
  `violet`,
  `green`,
  `pink`,
  `yellow`,
  `brown`,
  `indigo`,
];

body.style.backgroundColor = `pink`;

const changeBackground = function () {
  const colorIndex = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];
};

button.addEventListener(`click`, changeBackground);
