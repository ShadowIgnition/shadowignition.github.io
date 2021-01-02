var myArray = ['The Fire Of Your Night',
	'Hold The Future', 
	'A Fire Burnin\' So High',
	'In The Moonlight',
	'Fly Across The Sky',
	'Power\'s Runnin\' In My Veins',
	'Cyber Talking',
	'Tell Me, Are You Gonna Stay?',
	'Watching The Sky',
	'Criminal Lovers',
	'Chemical Reaction',
	'Midnight And Its Spell',
	'High Decibels In My Ears',
	'Lost In Your Eyes',
	'Music Is The Answer',
	'Devil\'s Son, Yes I Know I\'m The One',
	'You Gotta Go And Live Forever',
	'Gasoline\'s Burnin\' In',
	'Running In My Dreams Every Night',
	'Born To Race And To Overdrive',
	'Engine\'s Over The Red Degrees',
	'Wind Is On My Face',
	'It\'s Always In Your Heart',
	'I Wanna Hold You Tonight',
	'Wanting Your Sensation',
	'I Feel You Drive Me Insane',
	'Fly Me To The Moon And Back',
	'Two Hearts I Believe In You',
	'I Wanna Express My Love For You',
	'You\'re Gonna Destroy My Love',
	'Killing My Love',
	'Cause My Heart Is Signed',
	'Dancing Until The Morning Light',
	'Virtual Visions',
	'Got No More Deadline',
	'Speed Fantasy',
	'It\'s Just A Neon Flame',
	'A Ghost Of My Nights',
	'Risin\' Flame',
	'Fire, No Control',
	'I\'m Not Alone With All Your Love',
	'Never Take A Chain To My Soul',
	'Better Die Than Rust',
	'Me And You, Love You Too',
	'Dancing On The Street',
	'Under The Desert Stars',
	'Infinite Love',
	'Make Your Soul On Fire',
	'Transmit Data',
	'Excute Code',
	'Malfunction',
	'Manifold Love',
	'Augmented Reality',
	'Rave Up My Heart',
	'Unbreak My Heart',
	'Hysteria It Can Kill',
	'Livin\' Out Your Dream',
	'Addicted To Love',
	'In The Midnight Dream',
	'Our Ecstasy',
	'Crazy Wonderland',
	'Dancing to the rhythm',
	'Promise Your Devotion',
	'A Heart Of Broken Glass',
	'Love Is Just A Game',
	'Gonna Set You Free',
	'Real love is longer than life',
	'No more women to love you now',
	'Love is crazy, love is passion',
	'I\'m gonna set your heart on fire',
	'Look Into Your Eyes',
	'It\'s Brand new feeling',
	'Running In and Out of time',
	'You\'re still the same',
	'Don\'t be so shy',
	'Midnight Lover',
	'Lost in the night',
	'Take me like a teddy bear',
	'keep on pushing for the moon',
	'Running on a wasteland',
	'Are you ready to dance?',
	'My atoms goin\' wild',
	'Ecstasy and Fire',
	'To Horizons Yet Unknown',
	'Drive All Night',
	'In The Night',
	'Ignite My Night',
	'Lost In The Datastream',
	'Broken Singularity',
	'Binary Command',
	'Wandering After Dark',
	'Pressure Level Zero',
	'Shut Up And Listen',
	'Remember Me',
	'I\'ll see you in my dreams',
	'The Construct Demands Blood',
	'Almost Heaven',
	'Take Me Home',
	'Dream Fragments',
	'Let Me Suffer Now',
	'Dreams Begin To Re-Ignite',
	'Infomation wants to be free'
]

;/* 4/12/18 1:27AM - Implemented Superior RNG, Previous RNG favored smaller numbers																		*/

var numerator = Math.floor(myArray.length/(Math.ceil(Math.random()*4)+1))
var denominator = Math.floor(myArray.length/1)
/* document.getElementById("sub-title").addEventListener("click",nextQuote); */

if (numerator < myArray.length/4){
	numerator = 0;
	denominator = Math.ceil(myArray.length/4);
}
var myArrayRan = myArray.slice(numerator, denominator);

var rng = Math.floor(Math.random()* myArrayRan.length);

var txtQuote = myArrayRan[rng];
var i = 0;

var speedQuote = 50;

function typeQuote() {
  if (i < txtQuote.length) {
    document.getElementById("quotes").innerHTML += txtQuote.charAt(i);
    i++;
    setTimeout(typeQuote, speedQuote);
  }
}

/* DEBUG CODE 
document.getElementById("blockquote").innerHTML = numerator + " / " + denominator + " = " + (numerator/denominator) + " | RNG = " + (rng+1) + " | " + (rng+1) + " + " + numerator + " = Line "+ (numerator+(rng+1));
*/

/* NEXT QUOTE */
function nextQuote(){ 
	if (txtQuote.length > myArray[rng++]) {
	txtQuote = myArray[rng++];
	} else {
	txtQuote = myArray[rng];
	}
document.getElementById("quotes").innerHTML = "";
i = 0;
typeQuote();
}