const cvs = document.getElementById("canvas")
const ctx = cvs.getContext("2d")

const bird = new Image();
const bg = new Image();
const fg = new Image();
const pipeUp = new Image();
const pipeBottom = new Image();

bird.src = "assets/images/bird.png";
bg.src = "assets/images/bg.png";
fg.src = "assets/images/fg.png";
pipeUp.src = "assets/images/pipeUp.png";
pipeBottom.src = "assets/images/pipeBottom.png";

// Звуковые файлы
var fly = new Audio();
const score_audio = new Audio();

fly.src = "assets/audio/fly.mp3";
score_audio.src = "assets/audio/score.mp3";
console.log(fly);

const gap = 100;
// При нажатии на какую-либо кнопку
document.addEventListener("keydown", moveUp);
function moveUp() {
	yPos -= 25;
	fly.play();
};

// Создание блоков
const pipe = [];

pipe[0] = {
	x: cvs.width,
	y: 0
};

var score = 0;

// Позиция птички
var xPos = 10;
var yPos = 150;
var grav = 1.5;

function draw() {
	ctx.drawImage(bg, 0, 0);

	for (var i = 0; i < pipe.length; i++) {
		ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
		ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

		pipe[i].x--;

		if (pipe[i].x === 125) {
			pipe.push({
				x: cvs.width,
				y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
			});
		}

		// Отслеживание прикосновений
		if (xPos + bird.width >= pipe[i].x
			&& xPos <= pipe[i].x + pipeUp.width
			&& (yPos <= pipe[i].y + pipeUp.height
				|| yPos + bird.height >= pipe[i].y + pipeUp.height +
				gap) || yPos + bird.height >= cvs.height - fg.height) {
			location.reload();
		}

		if (pipe[i].x == 5) {
			score++;
			score_audio.play();
		}

	}

	ctx.drawImage(fg, 0, cvs.height - fg.height);
	ctx.drawImage(bird, xPos, yPos);

	yPos += grav;
	ctx.fillStyle = "#000";
	ctx.font = "24px Verdana"
	ctx.fillText("Счет:" + score, 10, cvs.height - 20)

	requestAnimationFrame(draw);


}

pipeBottom.onload = draw;

