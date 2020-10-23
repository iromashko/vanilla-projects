let canvas;
let ctx;
let WIDTH = 1200;
let HEIGHT = 800;

let tileW = 20;
let tileH = 20;

let tileRowCount = 25;
let tileColumnCount = 40;

let tiles = [];
for (let c = 0; c < tileColumnCount; c++) {
  tiles[c] = [];
  for (let r = 0; r < tileRowCount; r++) {
    tiles[c][r] = { x: c * (tileW + 3), y: r * (tileH + 3), state: 'e' };
  }
}

dragok = false;

boundX = 0;
boundY = 0;

tiles[0][0].state = 's';
tiles[tileColumnCount - 1][tileRowCount - 1].state = 'f';

function rect(x, y, w, h, state) {
  if (state === 's') {
    ctx.fillStyle = 'green';
  } else if (state === 'f') {
    ctx.fillStyle = 'red';
  } else if (state === 'e') {
    ctx.fillStyle = 'lightgray';
  } else if (state === 'w') {
    ctx.fillStyle = 'blue';
  }

  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.closePath();
  ctx.fill();
}

function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function draw() {
  clear();

  for (let c = 0; c < tileColumnCount; c++) {
    for (let r = 0; r < tileRowCount; r++) {
      rect(tiles[c][r].x, tiles[c][r].y, tileW, tileH, tiles[c][r].state);
    }
  }
}

function init() {
  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext('2d');
  return setInterval(draw, 10);
}

init();

function myDown(e) {
  canvas.onmousemove = myMove;

  let x = e.pageX - canvas.offsetLeft;
  let y = e.pageY - canvas.offsetTop;

  for (let c = 0; c < tileColumnCount; c++) {
    for (let r = 0; r < tileRowCount; r++) {
      if (
        c * (tileW + 3) < x &&
        x < c * (tileW + 3) + tileW &&
        r * (tileH + 3) < y &&
        y < r * (tileH + 3) + tileH
      ) {
        if (tiles[c][r].state === 'e') {
          tiles[c][r].state = 'w';
          boundX = c;
          boundY = r;
        } else if (tiles[c][r].state === 'w') {
          tiles[c][r].state = 'e';
          boundX = c;
          boundY = r;
        }
      }
    }
  }
}

function myMove(e) {
  let x = e.pageX - canvas.offsetLeft;
  let y = e.pageY - canvas.offsetTop;

  for (let c = 0; c < tileColumnCount; c++) {
    for (let r = 0; r < tileRowCount; r++) {
      if (
        c * (tileW + 3) < x &&
        x < c * (tileW + 3) + tileW &&
        r * (tileH + 3) < y &&
        y < r * (tileH + 3) + tileH
      ) {
        if (tiles[c][r].state === 'e' && (c !== boundX || r !== boundY)) {
          tiles[c][r].state = 'w';
          boundX = c;
          boundY = r;
        } else if (
          tiles[c][r].state === 'w' &&
          (c !== boundX || r !== boundY)
        ) {
          tiles[c][r].state = 'e';
          boundX = c;
          boundY = r;
        }
      }
    }
  }
}

function myUp() {
  canvas.onmousemove = null;
}

canvas.onmousedown = myDown;
canvas.onmouseup = myUp;
