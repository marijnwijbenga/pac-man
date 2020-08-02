console.log('this works');
const line = 16;
const canvas = document.getElementById('game');
const canvasContext = canvas.getContext('2d');

window.onload = function() {

   drawMaze();
}

function drawMaze() {
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    canvasContext.fillStyle = 'blue';
    canvasContext.fillRect(0, 0, canvas.width, line);
    canvasContext.fillRect(0, 0, line, 128);
    canvasContext.fillRect(canvas.width-line, 0, line, 128);


}