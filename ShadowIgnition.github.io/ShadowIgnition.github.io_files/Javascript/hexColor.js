var hexcode;
var inputText;
var randoColor;

function randomizedColor() {
	randoColor = rngColor();
    hexcode = randoColor;
	setColors()
}

function rngColor() {
	return (
	"#" + Math.random()
	.toString(15)
	.slice(2, 8)
  );
}

function pickColors() {
	randoColor = rngColor();
    var inputText = prompt("Choose Page Color Scheme:", randoColor);
    if (inputText == null || inputText == "") {
        hexcode = randoColor;
    } else {
        hexcode = inputText;
	}	
	setColors()
}

function setColors() {
	document.getElementById("msg-font").style.color = hexcode;
	document.getElementById("msg-font").style.border = "4px double" + hexcode;
	document.getElementById("blockquote").style.color = hexcode;
	document.getElementById("blockquote").style.border = "1px dashed" + hexcode;
	document.getElementById("sub-title").style.textShadow = "0vh -0.14vw 0.73vw" + hexcode + ", 0vh 0.14vw 0.73vw " + hexcode;
	document.getElementById("signature").style.textShadow = "0vh -0.07vw 0.43vw" + hexcode + ", 0vh 0.07vw 0.43vw " + hexcode;
	var x = document.getElementsByClassName("links-border");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.backgroundColor = hexcode;
	};
}
/* Added Custom Color Picker That works simultaneously with the random generator */

/*Note: Use Ctrl+Shift+I in chrome for debug.*/
/* 
function rngEnter(){
	var check;
	check = Math.random()
	if (check <= "0.5" || check >= "0.5") {
		document.getElementById("sub-title").style.color = "#0f0";
    } else {
		document.getElementById("sub-title").style.color = "#00f";
	}
}

 */