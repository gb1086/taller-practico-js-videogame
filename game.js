const canvas = document.querySelector(`#game`);
const game = canvas.getContext(`2d`);

window.addEventListener(`load`, startgame);
window.addEventListener(`resize`, startgame);

function startgame() {
  let canvasSize;

  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }

  canvas.setAttribute(`width`, canvasSize);
  canvas.setAttribute(`height`, canvasSize);
  //canvas.setAttribute(`width`, window.innerWidth * 0.75);
  //canvas.setAttribute(`height`, window.innerHeight * 0.5);

  const elementSize = canvasSize / 10;

  console.log({ canvasSize, elementSize });

  game.font = elementSize + `px verdana`;
  game.textAlign = `end`;

  for (let i = 1; i <= 10; i++) {
    const element = game.fillText(emojis[`X`], elementSize * i, elementSize);
  }

  // window.innerheight
  // window.innerWidth;

  //game.fillRect(0, 0, 100, 100);
  // game.clearRect(0, 0, 100, 50);
  // game.clearRect(0, 0, 50, 50);
  //game.font = `25px verdana`;
  // game.fillStyle = `purple`;
  // game.textAlign = `end`;
  // game.fillText(`platzi`, 25, 25);
}
