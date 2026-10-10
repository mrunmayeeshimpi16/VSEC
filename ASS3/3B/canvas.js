let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let x, y;
let score = 0;
let time = 15;
let timer;
let balloonTimer;

function drawBalloon() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    x = Math.random() * 900 + 50;
    y = Math.random() * 450 + 50;

    // Balloon
    ctx.beginPath();
    ctx.ellipse(x, y, 30, 40, 0, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();

    // String
    ctx.beginPath();
    ctx.moveTo(x, y + 40);
    ctx.lineTo(x, y + 80);
    ctx.stroke();
}

function startGame() {

    score = 0;
    time = 15;

    document.getElementById("score").innerHTML = score;
    document.getElementById("time").innerHTML = time;

    clearInterval(timer);
    clearInterval(balloonTimer);

    drawBalloon();

    // Change balloon every 1 second
    balloonTimer = setInterval(function() {
        drawBalloon();
    }, 1000);

    // Timer
    timer = setInterval(function() {

        time--;

        document.getElementById("time").innerHTML = time;

        if (time == 0) {

            clearInterval(timer);
            clearInterval(balloonTimer);

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            alert("Game Over! Score: " + score);
        }

    }, 1000);
}

canvas.onclick = function(e) {

    let d = Math.sqrt(
        (e.offsetX - x) * (e.offsetX - x) +
        (e.offsetY - y) * (e.offsetY - y)
    );

    if (d < 40) {

        score++;

        document.getElementById("score").innerHTML = score;
    }
};