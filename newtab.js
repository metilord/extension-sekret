/*if (typeof(Storage) !== undefined) {
	if (localStorage.urlList) {
		
	} else {
		localStorage.urlList = ["", "", "", ""];
	}
}*/
function CustomMenu() {
	
}


window.oncontextmenu = function() {
	CustomMenu();
	return false;
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