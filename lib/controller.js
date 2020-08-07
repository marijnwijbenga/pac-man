var pacmanX = 180;
var pacmanY = 300;

export default class Controller {
    onKeyDown(key) {
        console.log(key);
        // todo implement
    }
}

function movePacman() {
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
        if (event.keyCode === 68) {
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
            pacmanX++;
        }
        if (direction == 'left') {
            pacmanX--;
        }
        if (direction == 'up') {
            pacmanY--;
        }
        if (direction == 'down') {
            pacmanY++;
        }
    }

    animate();
}