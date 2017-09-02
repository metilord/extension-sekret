var rectAttr = ['25', '8', '9', '13', '2', '2'];

var custom_menu = document.getElementById('rightClick');
function CustomMenu(T) {
	if (T === "T") {
		custom_menu.style.display = "block";
		custom_menu.focus();
	} else {
		custom_menu.style.display = "none";
	}
}

window.oncontextmenu = function(e) {
	custom_menu.style.left = e.clientX + 'px';
	custom_menu.style.top = e.clientY + 'px';
	CustomMenu('T');
	return false;
}

window.onclick = function() {
	CustomMenu('F');
}

window.onkeydown = function(e) {
	if (e.keyCode === 27) {
		CustomMenu('F');
	}
}

document.getElementById('QT1').onclick = function() {
	window.location = "https://classroom.google.com/h";
}

document.getElementById('QT2').onclick = function() {
	window.location = "https://quizlet.com";
}

document.getElementById('QT3').onclick = function() {
	window.location = "https://drive.google.com/drive/my-drive";
}

document.getElementById('QT4').onclick = function() {
	window.location = "https://github.com";
}

window.onload = function() {
	var x = document.getElementsByTagName('svg')[0];
	var y = document.createElement('rect');
	y.setAttribute('x', '25');
	y.setAttribute('y', '8');
	y.setAttribute('width', '9');
	y.setAttribute('height', '13');
	y.setAttribute('rx', '2');
	y.setAttribute('ry', '2');
	y.setAttribute('fill', 'rgb(60, 60, 60)');
	y.setAttribute('transform', 'rotate(45, 30, 30)');
	x.appendChild(y);
}

