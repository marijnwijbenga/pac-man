import { COLOR } from './color.js';
import { PACMAN_SIZE } from './grid.js';
import { MAZE } from './maze.js';

// todo put in own file
const CANVAS =  {
    width: 800,
    height: 840,
    step: 40
}

export default class Painter {
    constructor(context) {
        this.context = context;
    }

    paintPacman(pacMan) {
        this.context.beginPath();
        this.context.fillStyle = COLOR.PACMAN;
        this.context.arc(pacMan.x, pacMan.y, PACMAN_SIZE / 2, 0.1 * Math.PI, 1.85 * Math.PI);
        this.context.lineTo(pacMan.x, pacMan.y);
        this.context.fill();
    }

    drawGrid() {
        this.context.fillStyle = 'white';
        for (let x = 0; x <= CANVAS.height; x += CANVAS.step) {
            this.context.fillRect(x, 0, 1, CANVAS.height);
            this.context.font = '12px arial'
            this.context.fillText(x / CANVAS.step, x, 12);
        }
        for (let y = 0; y <= CANVAS.width; y += CANVAS.step) {
            this.context.fillRect(0, y, CANVAS.width, 1);
            this.context.font = '12px arial'
            this.context.fillText(y / CANVAS.step, 2, y);
        }
    }

    paintMaze() {
        this.context.fillStyle = COLOR.BACKGROUND;
        this.context.fillRect(0, 0, CANVAS.width, CANVAS.height);
        this.context.save();
        this.context.beginPath();
        this.context.fillStyle = COLOR.MAZE_WALL;

        for (let shape of MAZE) {
            this.context.fillRect(shape[0] * CANVAS.step, shape[1] * CANVAS.step, shape[2] * CANVAS.step, shape[3] * CANVAS.step);
        }
        this.context.closePath();
    }
}
