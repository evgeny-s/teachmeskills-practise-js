// Homework
// Implement JS application in order to be able to move active cell item around with the keyboard. Letters: a, s, d, w.

const rows = 10,
  cols = 10,
  cells = [];

function createGrid(root) {

}

function moveDown() {

}

function moveLeft() {

}

function moveRight() {

}

function moveUp() {

}

const moves = {
  '97': moveLeft,
  '115': moveDown,
  '119': moveUp,
  '100': moveRight
};

const root = document.getElementById('container');
createGrid(root);

document.body.addEventListener('keypress', (e) => {
  moves[e.keyCode]();
});