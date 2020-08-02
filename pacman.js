console.log('this works');
const stroke = 32;
const strokeColor = 'red'
const canvas = document.getElementById('game');
const canvasContext = canvas.getContext('2d');

window.onload = function() {

   drawMaze();
}

function drawMaze() {
    canvasContext.fillStyle = 'black';
    // canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    canvasContext.fillStyle = strokeColor;
    canvasContext.fillRect(0, 0, canvas.width, stroke);
    canvasContext.fillRect(0, 0, stroke, 256);
    canvasContext.fillRect(canvas.width-stroke, 0, stroke, 256);
    canvasContext.fillRect(0, 256, 128, stroke);
    canvasContext.fillRect(canvas.width-128, 256, 128, stroke);



}