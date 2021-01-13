var quotationArray = [
	'Welcome'
]
//'Dark Mode is active'
/*
'Hello World',
	'Hold The Future', 
	'Cyber Talking',
	'Virtual Visions',
	'Better Die Than Rust',
	'Transmit Data',
	'Manifold Love',
	'Lost In The Datastream',
	'Broken Singularity',
	'Binary Command',
*/
;/* 4/12/18 1:27AM - Implemented Superior RNG, Previous RNG favored smaller numbers																		*/

var numerator = Math.floor(quotationArray.length/(Math.ceil(Math.random()*4)+1))
var denominator = Math.floor(quotationArray.length/1)
/* document.getElementById("sub-title").addEventListener("click",nextQuote); */

if (numerator < quotationArray.length/4){
	numerator = 0;
	denominator = Math.ceil(quotationArray.length/4);
}
var quotationArrayRan = quotationArray.slice(numerator, denominator);

var rng = Math.floor(Math.random()* quotationArrayRan.length);

var textQuote = quotationArrayRan[rng];
var themeNotificaiton = "Toggled Dark Mode";
var interactablesNotificaiton = "Highlighting Interactable Elements";
var selectedText = "";
var welcomeBackText = "Welcome back friend";

var i = 0;
var speedQuote = 50;

var beforeQuote = "> ";
var afterQuote = "";

var quoteTimeout;
var notifyTimeout;


function InitializeQuote() {
	document.getElementById("quotes").innerHTML = "";
	if (localStorage.getItem("returnVisit") == "true") {//if is return visit
		textQuote = welcomeBackText;
		//console.log(x + " @a");
	}
	else
	{
		//console.log(x + " @b");
		localStorage.setItem("returnVisit", "true");
	}
	selectedText = beforeQuote + textQuote + afterQuote;
	typeQuote();
}

function typeQuote() {
  if (i < selectedText.length) {
    document.getElementById("quotes").innerHTML += selectedText.charAt(i);
    i++;
    quoteTimeout = setTimeout(typeQuote, speedQuote);
  }
}

function notifyDarkmode(){
	clearTimeouts();
	if (localStorage.getItem('theme') === 'theme-dark') {
		selectedText = beforeQuote + "Dark Mode Activated" + afterQuote;
	} else {
		selectedText = beforeQuote + "Dark Mode Deactivated" + afterQuote;
	}
	typeQuote();
	notifyTimeout = setTimeout(notifyVanillaText, 2500);
}

function notifyInteractables(){
	clearTimeouts();
	selectedText = beforeQuote + interactablesNotificaiton + afterQuote;
	typeQuote();
	notifyTimeout = setTimeout(notifyVanillaText, 3250);
}

function notifyVanillaText(){ 
	clearTimeouts();
	selectedText = beforeQuote + textQuote + afterQuote;
	typeQuote();
}

function clearTimeouts(){ 
	i = 0;
	clearTimeout(quoteTimeout);
	clearTimeout(notifyTimeout);
	clearTimeout(notifyInteractables);
	document.getElementById("quotes").innerHTML = "";
}