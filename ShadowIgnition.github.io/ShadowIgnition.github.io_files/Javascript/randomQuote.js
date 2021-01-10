var quotationArray = [
	'Hello World',
	'Welcome'
]
//'Dark Mode is active'
/*
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
var themeNotificaiton = "Dark mode active";
var selectedText = "";

var i = 0;
var speedQuote = 50;

var beforeQuote = "> ";
var afterQuote = "_";

var quoteTimeout;
var notifyTimeout;


function InitializeQuote() {
	document.getElementById("quotes").innerHTML = "";
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

/* DEBUG CODE 
document.getElementById("blockquote").innerHTML = numerator + " / " + denominator + " = " + (numerator/denominator) + " | RNG = " + (rng+1) + " | " + (rng+1) + " + " + numerator + " = Line "+ (numerator+(rng+1));
*/

/* NEXT QUOTE */
function nextQuote(){ 
	clearTimeout(quoteTimeout);
	if (textQuote.length > quotationArray[rng++]) {
		textQuote = quotationArray[rng++];
	} else {
		textQuote = quotationArray[rng];
	}
	document.getElementById("quotes").innerHTML = "";
	i = 0;
	typeQuote();
}

function notifyDarkmode(){
	clearTimeout(quoteTimeout);
	clearTimeout(notifyTimeout);
	i = 0;
	selectedText = beforeQuote + themeNotificaiton + afterQuote;
	document.getElementById("quotes").innerHTML = "";
	typeQuote();
	notifyTimeout = setTimeout(notifyVanillaText, 2500);
	
}

function notifyVanillaText(){ 
	clearTimeout(quoteTimeout);
	i = 0;
	selectedText = beforeQuote + textQuote + afterQuote;
	document.getElementById("quotes").innerHTML = "";
	typeQuote();
}