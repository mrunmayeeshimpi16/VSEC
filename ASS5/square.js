let canvas = document.getElementById("canvas");
let draw = canvas.getContext("2d");

let angle = 0;
let target = 0;
let running = false;

function showSquares() {

    draw.clearRect(0, 0, 900, 650);

    let size = 140;
    let gap = 100 * angle / 90;

    let colors = ["coral", "royalblue", "mediumseagreen", "gold"];

    let places = [
        [-70 - gap, -70],
        [70 + gap, -70],
        [-70 - gap, 70],
        [70 + gap, 70]
    ];

    for (let i = 0; i < 4; i++) {

        draw.save();

        draw.translate(
            450 + places[i][0],
            325 + places[i][1]
        );

        draw.rotate(angle * Math.PI / 180);

        draw.fillStyle = colors[i];

        draw.fillRect(-70, -70, size, size);

        draw.restore();
    }
}

function moveSquares() {

    if (angle < target)
        angle = angle + 0.6;

    if (angle > target)
        angle = angle - 0.6;

    showSquares();

    if (angle != target) {
        requestAnimationFrame(moveSquares);
    } else {
        running = false;
    }
}

canvas.onmousemove = function(e) {

    if (e.offsetX > 380 && e.offsetX < 520 &&
        e.offsetY > 255 && e.offsetY < 395) {

        target = 90;

    } else {

        target = 0;
    }

    if (!running) {
        running = true;
        moveSquares();
    }
};

showSquares();