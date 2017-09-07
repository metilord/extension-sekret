	var select = false;
var custom_menu = document.getElementById('rightClick');
var createElem;
var quickTab = document.getElementsByClassName('quickTab');
var linkList = ['https://classroom.google.com/h', 'https://quizlet.com/live', 'https://quizlet.com', 'https://drive.google.com/drive/my-drive', 'https://github.com'];
var stage = 1;
var isSettingsOn = false;

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
		var SETTINGDOM = document.getElementsByTagName('svg')[0];

		for (var z = 0; z < 9; z ++) {
			createElem = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

			for (var i = 0; i < rectAttr.length; i ++) {
				createElem.setAttribute(rectAttr[i], rectVal[i]);
			}

			createElem.setAttribute('transform', 'rotate(' + (45 * z) + ', 30, 30)');
			SETTINGDOM.appendChild(createElem);
		}
	}
}

function jumpPageHndlr(numer) {
	document.getElementsByClassName('quickTab')[numer].onclick = function() {
		window.location = linkList[numer];
	}
}

function quickTabHndler() {
	if (stage == 1) {
		var theDom;
		for (var i = 0; i < linkList.length; i ++) {
			theDom = document.getElementById("quickTabDiv");
			
			createElem = document.createElement("div");
			createElem.setAttribute("class", "quickTab");
			createElem.setAttribute("tabindex", i + 2);
			theDom.appendChild(createElem);
		}
		stage ++;
	}
}

window.oncontextmenu = function(e) {
	custom_menu.style.left = e.clientX + 'px';
	custom_menu.style.top = e.clientY + 'px';
	CustomMenu('T');
	return false;
}


document.getElementById('Settingicns').onclick = function() {
	if (isSettingsOn === false) {
		isSettingsOn = true;
	} else {
		isSettingsOn = false;
	}
	settingsHndlr();
}

function settingsHndlr() {
	var settingsDiv = document.getElementById('Preferences');
	var icon = document.getElementById('Settingicns');

	if (isSettingsOn === false) {
		settingsDiv.style.display = 'none';

	}
	if (isSettingsOn === true) {
		settingsDiv.style.display = 'block';
	}
}

window.onclick = function() {
	CustomMenu('F');

	for (var i = 0; i < linkList.length; i ++) {
		jumpPageHndlr(i);
	}
}

window.onkeydown = function(e) {
	if (e.keyCode === 27) {
		CustomMenu('F');
	} else if (select === false) {
		document.getElementById('searchBox').focus();
		select = true;
	}
}

window.onload = function() {
	Draw('settings_icon');
	quickTabHndler();
}