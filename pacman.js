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

    // outer lines
    canvasContext.fillRect(0, 0, canvas.width, stroke);
    canvasContext.fillRect(0, 0, stroke, 240 );
    canvasContext.fillRect(0, 0, stroke, 240 );

    // blocks left top
    canvasContext.fillRect(80, 80, 80, stroke );
    canvasContext.fillRect(240, 80, 80, stroke );
    canvasContext.fillRect(80, 160, 80, stroke );
    canvasContext.fillRect(240, 160, stroke, 160 );
    canvasContext.fillRect(240, 230, 80, stroke );
    canvasContext.fillRect(240, 230, 80, stroke );


    // canvasContext.fillRect();

    // center line
    canvasContext.fillRect(390, 0, stroke, 800 );


}

function drawPacman() {
    canvasContext.fillStyle = 'yellow';
    canvasContext.arc(50, 90, 20, 0, 2 * Math.PI);
    canvasContext.arc(360, 90, 20, 0, 2 * Math.PI);
    canvasContext.arc(200, 90, 20, 0, 2 * Math.PI);
    canvasContext.fill();

    // pacman finished version
    // canvasContext.beginPath();
    // canvasContext.fillStyle = 'yellow';
    // canvasContext.arc(200, 300, 20, 0.1 * Math.PI, 1.85 * Math.PI);
    // canvasContext.lineTo(200, 300);
    // canvasContext.fill();
}