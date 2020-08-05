console.log('this works');
const stroke = 20;
const strokeColor = 'red'
const canvas = document.getElementById('game');
const canvasContext = canvas.getContext('2d');

const step = 40

window.onload = function() {

   drawMaze();
   drawPacman();
   // drawGrid();
}

function drawMaze() {
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    canvasContext.save();
    canvasContext.beginPath();
    canvasContext.fillStyle = "blue";
    const mazeShapes = [
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
        [9, 8.25, 2, 1/2],
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
        [16, 12,4, 1],
        [2, 14,2, 1],
        [3, 15,1, 2],
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

    for (let shape of mazeShapes) {
        canvasContext.fillRect(shape[0]*step, shape[1]*step, shape[2]*step, shape[3]*step);
    }
    canvasContext.closePath();
}

function drawGrid() {

    canvasContext.fillStyle = "white";
    for(let x=0; x<=canvas.height; x += step) {
        canvasContext.fillRect(x, 0, 1, canvas.height);
        canvasContext.font = "12px arial"
        canvasContext.fillText(x/step, x, 12);
    }
    for(let y=0; y<=canvas.width; y += step) {
        canvasContext.fillRect(0, y, canvas.width, 1);
        canvasContext.font = "12px arial"
        canvasContext.fillText(y/step, 2, y);
    }
}

function drawPacman() {

    canvasContext.beginPath();
    canvasContext.fillStyle = 'yellow';
    canvasContext.arc(180, 300, 15, 0.1 * Math.PI, 1.85 * Math.PI);
    canvasContext.lineTo(180, 300);
    canvasContext.fill();
}

