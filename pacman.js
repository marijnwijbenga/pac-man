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
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    canvasContext.save();
    canvasContext.beginPath();
    canvasContext.moveTo(0.0, 40.0);
    canvasContext.lineTo(800.0, 40.0);
    canvasContext.lineTo(800.0, 0.0);
    canvasContext.lineTo(0.0, 0.0);
    canvasContext.lineTo(0.0, 40.0);
    canvasContext.closePath();
    canvasContext.fillStyle = "darkblue";
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

}

function drawPacman() {

    canvasContext.beginPath();
    canvasContext.fillStyle = 'yellow';
    canvasContext.arc(180, 300, 15, 0.1 * Math.PI, 1.85 * Math.PI);
    canvasContext.lineTo(180, 300);
    canvasContext.fill();
}