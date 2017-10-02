var custom_menu = document.getElementById('rightClick');
var createElem;
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

function quickTabHndler() {
	if (stage == 1) {
		var theDom;
		for (var i = 0; i < linkList.length; i ++) {
			theDom = document.getElementById("quickTabDiv");
			
			createElem = document.createElement("div");
			createElem.setAttribute("class", "quickTab");
			createElem.setAttribute("tabindex", i + 2);
			theDom.appendChild(createElem);

			theDom = document.getElementsByClassName('quickTab')[i];
			createElem = document.createElement('input');

			createElem.setAttribute('type', 'button');
			createElem.setAttribute('value', '');
			createElem.setAttribute('id', 'open_file');
			createElem.setAttribute('style', 'height: ' + innerWidth * 0.2 * 0.15 * 0.90 + 'px;');
			theDom.appendChild(createElem);
		}
		stage ++;
	}
}

window.oncontextmenu = function(e) {
	custom_menu.style.left = e.clientX + 'px';
	custom_menu.style.top = e.clientY + 'px';
	
	if (e.clientY > window.innerHeight - 300) {
		custom_menu.style.top = (window.innerHeight - 330) + 'px';
	}
	if (e.clientX > window.innerWidth - 230) {
		custom_menu.style.left = (window.innerWidth - 260) + 'px';
	}

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

function handleFile(evt) {
	var files = evt.target.files;

	for (var i = 0, f; f = files[i]; i ++) {
		if (!f.type.match('image.*')) {
			continue;
		}

		var reader = new FileReader();

		reader.onload = (function(TheFile) {
			return function(e) {
				var divPoint = document.getElementsByClassName('quickTab')[0];
				var child = divPoint.children[0];
				createElem = document.createElement('img');
				createElem.setAttribute("src", e.target.result);
				createElem.setAttribute("class", "thumb_nail");
				document.getElementsByClassName('quickTab')[0].appendChild(createElem);
				
			};
		})(f);
		reader.readAsDataURL(f);
	}
}
document.getElementById('files').addEventListener('change', handleFile, false);

document.activeElement.onclick = function() {
	for(var i = 0; i < linkList.length; i ++) {
		if (document.activeElement.tabIndex === (i + 2)) {
			window.location = linkList[i];
		}
	}
}

document.getElementsByClassName('BTN_menu')[0].onclick = function() {
	window.location = 'https://google.com';
}

{
	window.onclick = function() {
		CustomMenu('F');
		Draw('settings_icon');
	}

	window.onkeydown = function(e) {
		var select = false;

		if (e.keyCode === 27) {
			CustomMenu('F');
		} else if (e.keyCode === 13) {
			for (var i = 0; i < 5; i ++) {
				if (document.activeElement.tabIndex === (i + 2)) {
					window.location = linkList[i];
				}
			}
		} else if (select === false && e.keyCode !== 9 && e.keyCode !== 13) {
			document.getElementById('searchBox').focus();
			select = true;
		}
	}

	window.onload = function() {
		Draw('settings_icon');
		quickTabHndler();
		console.log(window);

		document.getElementById('open_file').onclick = function() {
			document.getElementById('files').click();
			document.getElementById('open_file').style.display = 'none';
		}
	}
} // window events