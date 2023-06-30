(function () {
	var rotateY = 0,
		rotateX = 0;
	document.onkeydown = function (e) {
		if (e.keyCode === 37) {
			rotateY -= 15
		} else if (e.keyCode === 38) {
			rotateX += 15
		} else if (e.keyCode === 39) {
			rotateY += 15
		} else if (e.keyCode === 40) {
			rotateX -= 15
		}
		document.querySelector('.cube').style.transform =
			'rotateY(' + rotateY + 'deg)' +
			'rotateX(' + rotateX + 'deg)';
	}
})();
