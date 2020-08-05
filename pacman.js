console.log('this works');
const stroke = 20;
const strokeColor = 'red'
const canvas = document.getElementById('game');
const canvasContext = canvas.getContext('2d');

const step = 40

window.onload = function() {

   drawMaze();
   drawPacman();
   drawGrid();
}

function drawMaze() {
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    canvasContext.save();
    canvasContext.beginPath();
    canvasContext.moveTo(0.0, 40.0);
    canvasContext.lineTo(800.0, 40.0);
    canvasContext.lineTo(800.0, 0.0);
    canvasContext.lineTo(0.0, 0.0);
    canvasContext.lineTo(0.0, 40.0);
    canvasContext.closePath();
    canvasContext.fillStyle = "rgba(222,50,50,1)";
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(0.0, 280.0);
    canvasContext.lineTo(40.0, 280.0);
    canvasContext.lineTo(40.0, 0.0);
    canvasContext.lineTo(0.0, 0.0);
    canvasContext.lineTo(0.0, 280.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(760.0, 280.0);
    canvasContext.lineTo(800.0, 280.0);
    canvasContext.lineTo(800.0, 0.0);
    canvasContext.lineTo(760.0, 0.0);
    canvasContext.lineTo(760.0, 280.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(0.0, 280.0);
    canvasContext.lineTo(160.0, 280.0);
    canvasContext.lineTo(160.0, 240.0);
    canvasContext.lineTo(0.0, 240.0);
    canvasContext.lineTo(0.0, 280.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(120.0, 360.0);
    canvasContext.lineTo(160.0, 360.0);
    canvasContext.lineTo(160.0, 240.0);
    canvasContext.lineTo(120.0, 240.0);
    canvasContext.lineTo(120.0, 360.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(0.0, 360.0);
    canvasContext.lineTo(120.0, 360.0);
    canvasContext.lineTo(120.0, 320.0);
    canvasContext.lineTo(0.0, 320.0);
    canvasContext.lineTo(0.0, 360.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(640.0, 280.0);
    canvasContext.lineTo(800.0, 280.0);
    canvasContext.lineTo(800.0, 240.0);
    canvasContext.lineTo(640.0, 240.0);
    canvasContext.lineTo(640.0, 280.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(640.0, 360.0);
    canvasContext.lineTo(680.0, 360.0);
    canvasContext.lineTo(680.0, 280.0);
    canvasContext.lineTo(640.0, 280.0);
    canvasContext.lineTo(640.0, 360.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(680.0, 360.0);
    canvasContext.lineTo(800.0, 360.0);
    canvasContext.lineTo(800.0, 320.0);
    canvasContext.lineTo(680.0, 320.0);
    canvasContext.lineTo(680.0, 360.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(640.0, 120.0);
    canvasContext.lineTo(720.0, 120.0);
    canvasContext.lineTo(720.0, 80.0);
    canvasContext.lineTo(640.0, 80.0);
    canvasContext.lineTo(640.0, 120.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(80.0, 120.0);
    canvasContext.lineTo(160.0, 120.0);
    canvasContext.lineTo(160.0, 80.0);
    canvasContext.lineTo(80.0, 80.0);
    canvasContext.lineTo(80.0, 120.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(200.0, 120.0);
    canvasContext.lineTo(320.0, 120.0);
    canvasContext.lineTo(320.0, 80.0);
    canvasContext.lineTo(200.0, 80.0);
    canvasContext.lineTo(200.0, 120.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(360.0, 120.0);
    canvasContext.lineTo(440.0, 120.0);
    canvasContext.lineTo(440.0, 0.0);
    canvasContext.lineTo(360.0, 0.0);
    canvasContext.lineTo(360.0, 120.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(480.0, 120.0);
    canvasContext.lineTo(600.0, 120.0);
    canvasContext.lineTo(600.0, 80.0);
    canvasContext.lineTo(480.0, 80.0);
    canvasContext.lineTo(480.0, 120.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(80.0, 200.0);
    canvasContext.lineTo(160.0, 200.0);
    canvasContext.lineTo(160.0, 160.0);
    canvasContext.lineTo(80.0, 160.0);
    canvasContext.lineTo(80.0, 200.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(200.0, 360.0);
    canvasContext.lineTo(240.0, 360.0);
    canvasContext.lineTo(240.0, 160.0);
    canvasContext.lineTo(200.0, 160.0);
    canvasContext.lineTo(200.0, 360.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(240.0, 280.0);
    canvasContext.lineTo(320.0, 280.0);
    canvasContext.lineTo(320.0, 240.0);
    canvasContext.lineTo(240.0, 240.0);
    canvasContext.lineTo(240.0, 280.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(560.0, 360.0);
    canvasContext.lineTo(600.0, 360.0);
    canvasContext.lineTo(600.0, 160.0);
    canvasContext.lineTo(560.0, 160.0);
    canvasContext.lineTo(560.0, 360.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(480.0, 280.0);
    canvasContext.lineTo(560.0, 280.0);
    canvasContext.lineTo(560.0, 240.0);
    canvasContext.lineTo(480.0, 240.0);
    canvasContext.lineTo(480.0, 280.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(280.0, 200.0);
    canvasContext.lineTo(520.0, 200.0);
    canvasContext.lineTo(520.0, 160.0);
    canvasContext.lineTo(280.0, 160.0);
    canvasContext.lineTo(280.0, 200.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(200.0, 720.0);
    canvasContext.lineTo(240.0, 720.0);
    canvasContext.lineTo(240.0, 640.0);
    canvasContext.lineTo(200.0, 640.0);
    canvasContext.lineTo(200.0, 720.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(80.0, 760.0);
    canvasContext.lineTo(320.0, 760.0);
    canvasContext.lineTo(320.0, 720.0);
    canvasContext.lineTo(80.0, 720.0);
    canvasContext.lineTo(80.0, 760.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(360.0, 600.0);
    canvasContext.lineTo(440.0, 600.0);
    canvasContext.lineTo(440.0, 520.0);
    canvasContext.lineTo(360.0, 520.0);
    canvasContext.lineTo(360.0, 600.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(360.0, 760.0);
    canvasContext.lineTo(440.0, 760.0);
    canvasContext.lineTo(440.0, 680.0);
    canvasContext.lineTo(360.0, 680.0);
    canvasContext.lineTo(360.0, 760.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(280.0, 680.0);
    canvasContext.lineTo(520.0, 680.0);
    canvasContext.lineTo(520.0, 640.0);
    canvasContext.lineTo(280.0, 640.0);
    canvasContext.lineTo(280.0, 680.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(360.0, 280.0);
    canvasContext.lineTo(440.0, 280.0);
    canvasContext.lineTo(440.0, 200.0);
    canvasContext.lineTo(360.0, 200.0);
    canvasContext.lineTo(360.0, 280.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(0.0, 442.1);
    canvasContext.lineTo(160.0, 442.1);
    canvasContext.lineTo(160.0, 400.0);
    canvasContext.lineTo(0.0, 400.0);
    canvasContext.lineTo(0.0, 442.1);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(120.0, 520.0);
    canvasContext.lineTo(160.0, 520.0);
    canvasContext.lineTo(160.0, 442.1);
    canvasContext.lineTo(120.0, 442.1);
    canvasContext.lineTo(120.0, 520.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(0.0, 520.0);
    canvasContext.lineTo(120.0, 520.0);
    canvasContext.lineTo(120.0, 480.0);
    canvasContext.lineTo(0.0, 480.0);
    canvasContext.lineTo(0.0, 520.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(200.0, 520.0);
    canvasContext.lineTo(240.0, 520.0);
    canvasContext.lineTo(240.0, 400.0);
    canvasContext.lineTo(200.0, 400.0);
    canvasContext.lineTo(200.0, 520.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(560.0, 520.0);
    canvasContext.lineTo(600.0, 520.0);
    canvasContext.lineTo(600.0, 400.0);
    canvasContext.lineTo(560.0, 400.0);
    canvasContext.lineTo(560.0, 520.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(0.0, 800.0);
    canvasContext.lineTo(40.0, 800.0);
    canvasContext.lineTo(40.0, 520.0);
    canvasContext.lineTo(0.0, 520.0);
    canvasContext.lineTo(0.0, 800.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(0.0, 840.0);
    canvasContext.lineTo(800.0, 840.0);
    canvasContext.lineTo(800.0, 800.0);
    canvasContext.lineTo(0.0, 800.0);
    canvasContext.lineTo(0.0, 840.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(640.0, 200.0);
    canvasContext.lineTo(720.0, 200.0);
    canvasContext.lineTo(720.0, 160.0);
    canvasContext.lineTo(640.0, 160.0);
    canvasContext.lineTo(640.0, 200.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(360.0, 350.0);
    canvasContext.lineTo(440.0, 350.0);
    canvasContext.lineTo(440.0, 330.0);
    canvasContext.lineTo(360.0, 330.0);
    canvasContext.lineTo(360.0, 350.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(200.0, 600.0);
    canvasContext.lineTo(320.0, 600.0);
    canvasContext.lineTo(320.0, 560.0);
    canvasContext.lineTo(200.0, 560.0);
    canvasContext.lineTo(200.0, 600.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(480.0, 600.0);
    canvasContext.lineTo(600.0, 600.0);
    canvasContext.lineTo(600.0, 560.0);
    canvasContext.lineTo(480.0, 560.0);
    canvasContext.lineTo(480.0, 600.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(280.0, 440.0);
    canvasContext.lineTo(320.0, 440.0);
    canvasContext.lineTo(320.0, 320.0);
    canvasContext.lineTo(280.0, 320.0);
    canvasContext.lineTo(280.0, 440.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(480.0, 440.0);
    canvasContext.lineTo(520.0, 440.0);
    canvasContext.lineTo(520.0, 320.0);
    canvasContext.lineTo(480.0, 320.0);
    canvasContext.lineTo(480.0, 440.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(280.0, 520.0);
    canvasContext.lineTo(520.0, 520.0);
    canvasContext.lineTo(520.0, 480.0);
    canvasContext.lineTo(280.0, 480.0);
    canvasContext.lineTo(280.0, 520.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(320.0, 440.0);
    canvasContext.lineTo(480.0, 440.0);
    canvasContext.lineTo(480.0, 400.0);
    canvasContext.lineTo(320.0, 400.0);
    canvasContext.lineTo(320.0, 440.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(320.0, 360.0);
    canvasContext.lineTo(360.0, 360.0);
    canvasContext.lineTo(360.0, 320.0);
    canvasContext.lineTo(320.0, 320.0);
    canvasContext.lineTo(320.0, 360.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(440.0, 360.0);
    canvasContext.lineTo(480.0, 360.0);
    canvasContext.lineTo(480.0, 320.0);
    canvasContext.lineTo(440.0, 320.0);
    canvasContext.lineTo(440.0, 360.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(80.0, 600.0);
    canvasContext.lineTo(160.0, 600.0);
    canvasContext.lineTo(160.0, 560.0);
    canvasContext.lineTo(80.0, 560.0);
    canvasContext.lineTo(80.0, 600.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(120.0, 680.0);
    canvasContext.lineTo(160.0, 680.0);
    canvasContext.lineTo(160.0, 600.0);
    canvasContext.lineTo(120.0, 600.0);
    canvasContext.lineTo(120.0, 680.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(40.0, 680.0);
    canvasContext.lineTo(80.0, 680.0);
    canvasContext.lineTo(80.0, 640.0);
    canvasContext.lineTo(40.0, 640.0);
    canvasContext.lineTo(40.0, 680.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(560.0, 720.0);
    canvasContext.lineTo(600.0, 720.0);
    canvasContext.lineTo(600.0, 640.0);
    canvasContext.lineTo(560.0, 640.0);
    canvasContext.lineTo(560.0, 720.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(480.0, 760.0);
    canvasContext.lineTo(720.0, 760.0);
    canvasContext.lineTo(720.0, 720.0);
    canvasContext.lineTo(480.0, 720.0);
    canvasContext.lineTo(480.0, 760.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(640.0, 440.0);
    canvasContext.lineTo(800.0, 440.0);
    canvasContext.lineTo(800.0, 400.0);
    canvasContext.lineTo(640.0, 400.0);
    canvasContext.lineTo(640.0, 440.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(640.0, 520.0);
    canvasContext.lineTo(680.0, 520.0);
    canvasContext.lineTo(680.0, 440.0);
    canvasContext.lineTo(640.0, 440.0);
    canvasContext.lineTo(640.0, 520.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(680.0, 520.0);
    canvasContext.lineTo(800.0, 520.0);
    canvasContext.lineTo(800.0, 480.0);
    canvasContext.lineTo(680.0, 480.0);
    canvasContext.lineTo(680.0, 520.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(760.0, 800.0);
    canvasContext.lineTo(800.0, 800.0);
    canvasContext.lineTo(800.0, 520.0);
    canvasContext.lineTo(760.0, 520.0);
    canvasContext.lineTo(760.0, 800.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(640.0, 600.0);
    canvasContext.lineTo(720.0, 600.0);
    canvasContext.lineTo(720.0, 560.0);
    canvasContext.lineTo(640.0, 560.0);
    canvasContext.lineTo(640.0, 600.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(640.0, 680.0);
    canvasContext.lineTo(680.0, 680.0);
    canvasContext.lineTo(680.0, 600.0);
    canvasContext.lineTo(640.0, 600.0);
    canvasContext.lineTo(640.0, 680.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");

    // layer1/Path
    canvasContext.beginPath();
    canvasContext.moveTo(720.0, 680.0);
    canvasContext.lineTo(760.0, 680.0);
    canvasContext.lineTo(760.0, 640.0);
    canvasContext.lineTo(720.0, 640.0);
    canvasContext.lineTo(720.0, 680.0);
    canvasContext.closePath();
    canvasContext.fill("evenodd");
    canvasContext.restore();



    // draw with rectangles
    // current line numbers 582
    // after refactor:

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

