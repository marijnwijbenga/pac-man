console.log('this works');
const stroke = 20;
const strokeColor = 'red'
const canvas = document.getElementById('game');
const canvasContext = canvas.getContext('2d');

window.onload = function() {

   drawMaze();
   drawPacman();
}

function drawMaze() {
    canvasContext.fillStyle = 'black';
    // canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    canvasContext.fillStyle = strokeColor;
    canvasContext.fillRect(0, 0, canvas.width, stroke);




}

function drawPacman() {
    canvasContext.fillStyle = 'yellow';
    canvasContext.arc(120, 50, 20, 0, 2 * Math.PI);;
    canvasContext.fill();
}