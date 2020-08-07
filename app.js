import Controller from './lib/controller.js';
import PacMan from './lib/pacman.js';
import Painter from './lib/painter.js';

let context;
let controller;

window.onload = function () {
    const canvas = document.getElementById('game');
    context = canvas.getContext('2d');

    initialize();
    document.addEventListener('keydown', (event) => {
       controller.onKeyDown(event.key);
    });
    setInterval(update, 1); // todo add speed const

}

function initialize() {
    const painter = new Painter(context);
    painter.paintMaze();

    const pacMan = new PacMan();
    painter.paintPacman(pacMan);

    controller = new Controller();

}
function update() {
    // todo paint pacman
    // todo move pacman with controller
    // todo paint bite animation
    // todo repaint previous pacman area
}








