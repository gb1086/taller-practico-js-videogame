const canvas = document.querySelector(`#game`);
const game = canvas.getContext(`2d`);
const btnUp = document.querySelector(`#up`);
const btnleft = document.querySelector(`#left`);
const btnright = document.querySelector(`#right`);
const btndown = document.querySelector(`#down`);

let canvasSize;
let elementsSize;

window.addEventListener(`load`, setCanvasSize);
window.addEventListener(`resize`, setCanvasSize);

//const element = game.fillText(emojis[`X`], elementsSize * i, elementsSize);

function setCanvasSize() {
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }

  canvas.setAttribute(`width`, canvasSize);
  canvas.setAttribute(`height`, canvasSize);
  //canvas.setAttribute(`width`, window.innerWidth * 0.75);
  //canvas.setAttribute(`height`, window.innerHeight * 0.5);
  elementsSize = canvasSize / 10;

  startgame();
}

function startgame() {
  console.log({ canvasSize, elementsSize });

  game.font = elementsSize + `px verdana`;
  game.textAlign = `end`;

  const map = maps[0];
  const mapRows = map.trim().split(`\n`);
  const mapRowCol = mapRows.map((row) => row.trim().split(``));
  console.log({ map, mapRows, mapRowCol });

  mapRowCol.forEach((row, rowI) => {
    row.forEach((col, colI) => {
      const emoji = emojis[col];
      const posX = elementsSize * (colI + 1);
      const posY = elementsSize * (rowI + 1);
      game.fillText(emoji, posX, posY);
      console.log({ row, rowI, col, colI });
    });
  });

  // for (let row = 1; row <= 10; row++) {
  //   for (let col = 1; col <= 10; col++) {
  //     game.fillText(
  //       emojis[mapRowCol[row - 1][col - 1]],
  //       elementsSize * col,
  //       elementsSize * row
  //     );
  //   }
  // }
}

// window.innerheight
// window.innerWidth;

//game.fillRect(0, 0, 100, 100);
// game.clearRect(0, 0, 100, 50);
// game.clearRect(0, 0, 50, 50);
//game.font = `25px verdana`;
// game.fillStyle = `purple`;
// game.textAlign = `end`;
//game.fillText(`platzi`, 25, 25);//

window.addEventListener(`keydown`, moveByKeys);

btnUp.addEventListener(`click`, moveUp);
btnleft.addEventListener(`click`, moveLeft);
btnright.addEventListener(`click`, moveRight);
btndown.addEventListener(`click`, moveDown);

function moveByKeys(event) {
  if (event.key == `ArrowUp`) moveUp();
  else if (event.key == `ArrowLeft`) moveLeft();
  else if (event.key == `ArrowRight`) moveRight();
  else if (event.key == `ArrowDown`) moveDown();
}
function moveUp() {
  console.log(`me quiero mover hacia arriba`);
}

function moveLeft() {
  console.log(`me quiero mover hacia la izquierda`);
}
function moveRight() {
  console.log(`me quiero mover hacia la derecha`);
}
function moveDown() {
  console.log(`me quiero mover hacia abajo`);
}
