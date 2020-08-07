const BG_COLOR = '#333';
const MAZE_WALL_COLOR = '#4287f5'
const STEP = 40;
const PACMAN_SIZE = 30;
const PACMAN_COLOR = '#f5e642';
const PACMAN_SPEED = 2;
const MAZE_SHAPES = [
    [0, 0, 20, 1],
    [0, 1, 1, 6],
    [2, 2, 2, 1],
    [5, 2, 3, 1],
    [9, 1, 2, 2],
    [12, 2, 3, 1],
    [16, 2, 2, 1],
    [19, 1, 1, 6],
    [2, 4, 2, 1],
    [1, 6, 3, 1],
    [3, 7, 1, 1],
    [5, 4, 1, 5],
    [6, 6, 2, 1],
    [7, 4, 6, 1],
    [9, 5, 2, 2],
    [14, 4, 1, 5],
    [12, 6, 2, 1],
    [16, 4, 2, 1],
    [16, 6, 3, 1],
    [16, 7, 1, 1],
    [16, 8, 4, 1],
    [7, 8, 2, 1],
    [9, 8.25, 2, 1 / 2],
    [11, 8, 2, 1],
    [7, 9, 1, 1],
    [12, 9, 1, 1],
    [0, 8, 4, 1],
    [0, 10, 4, 1],
    [3, 11, 1, 1],
    [0, 12, 4, 1],
    [0, 13, 1, 8],
    [0, 13, 1, 8],
    [1, 16, 1, 1],
    [5, 10, 1, 3],
    [7, 10, 6, 1],
    [14, 10, 1, 3],
    [7, 12, 6, 1],
    [16, 10, 4, 1],
    [16, 11, 1, 1],
    [16, 12, 4, 1],
    [2, 14, 2, 1],
    [3, 15, 1, 2],
    [5, 14, 3, 1],
    [9, 13, 2, 2],
    [12, 14, 3, 1],
    [16, 14, 2, 1],
    [16, 15, 1, 2],
    [18, 16, 1, 1],
    [19, 13, 1, 8],
    [2, 18, 6, 1],
    [5, 16, 1, 2],
    [7, 16, 6, 1],
    [9, 17, 2, 2],
    [12, 18, 6, 1],
    [14, 16, 1, 2],
    [0, 20, 19, 1],
];
const canvas = document.getElementById('game');
const canvasContext = canvas.getContext('2d');

window.onload = function () {
    // drawMaze();
    // drawPacman();
    // drawGrid();
    animatePacman();
    movePacman();
}

function drawMaze() {
    canvasContext.fillStyle = BG_COLOR;
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    canvasContext.save();
    canvasContext.beginPath();
    canvasContext.fillStyle = MAZE_WALL_COLOR;

    for (let shape of MAZE_SHAPES) {
        canvasContext.fillRect(shape[0] * STEP, shape[1] * STEP, shape[2] * STEP, shape[3] * STEP);
    }
    canvasContext.closePath();
}

function drawGrid() {
    canvasContext.fillStyle = "white";
    for (let x = 0; x <= canvas.height; x += STEP) {
        canvasContext.fillRect(x, 0, 1, canvas.height);
        canvasContext.font = "12px arial"
        canvasContext.fillText(x / STEP, x, 12);
    }
    for (let y = 0; y <= canvas.width; y += STEP) {
        canvasContext.fillRect(0, y, canvas.width, 1);
        canvasContext.font = "12px arial"
        canvasContext.fillText(y / STEP, 2, y);
    }
}

var pacmanX = 180;
var pacmanY = 300;

function movePacman() {
    document.addEventListener('keydown', pressKey);
    function pressKey(event) {
        var direction;
        if (event.keyCode === 87) {
            animatePacman(direction = 'up');
        }
        if (event.keyCode === 65) {
            animatePacman(direction = 'left');
        }
        if (event.keyCode === 83) {
            animatePacman(direction = 'down');
        }
        if (event.keyCode === 68)  {
            animatePacman(direction = 'right');
        }
    }
}

function animatePacman(direction) {
    function animate() {
        requestAnimationFrame(animate);
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        drawMaze();
        drawPacman(pacmanX, pacmanY);

        if (direction == 'right') {
            pacmanX += PACMAN_SPEED;
        }
        if (direction == 'left') {
            pacmanX -= PACMAN_SPEED;
        }
        if (direction == 'up') {
            pacmanY -= PACMAN_SPEED;
        }
        if (direction == 'down') {
            pacmanY += PACMAN_SPEED;
        }
    }
    animate();
}

function drawPacman(pacmanX, pacmanY) {
    canvasContext.beginPath();
    canvasContext.fillStyle = PACMAN_COLOR;
    canvasContext.arc(pacmanX, pacmanY, PACMAN_SIZE / 2, 0.1 * Math.PI, 1.85 * Math.PI);
    canvasContext.lineTo(pacmanX, pacmanY);
    canvasContext.fill();
}