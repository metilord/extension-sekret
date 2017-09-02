var select = false;
var custom_menu = document.getElementById('rightClick');
var CLASSROOMDOM = document.getElementsByTagName('svg')[0];
var createElem;

function CustomMenu(T) {
	if (T === "T") {
		custom_menu.style.display = "block";
		custom_menu.focus();
	} else {
		custom_menu.style.display = "none";
	}
}

function Draw(Type) {
	if (Type == "settings_icon") {
		var rectVal = ['26', '12', '7', '8', '2', '2', 'rgb(60, 60, 60)'];
		var rectAttr = ['x', 'y', 'width', 'height', 'rx', 'yx', 'fill'];
		var SETTINGDOM = document.getElementsByTagName('svg')[1];

		for (var z = 0; z < 9; z ++) {
			createElem = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

			for (var i = 0; i < rectAttr.length; i ++) {
				createElem.setAttribute(rectAttr[i], rectVal[i]);
			}

			createElem.setAttribute('transform', 'rotate(' + (45 * z) + ', 30, 30)');
			SETTINGDOM.appendChild(createElem);
		}
	}

	if (Type == "classroom_icon") {
		var classroomRectAttr = [];
		var classroomRectVal = [];
		createElem = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
		for (var i = 0; i < classroomRectVal.length; i ++) {
			createElem.setAttribute(classroomRectAttr[i], classroomRectVal[i])
		}
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

	if (select === false) {
		document.getElementById('searchBox').focus();
		select = true;
	}
}

window.onload = function() {
	Draw('settings_icon');
	
}

