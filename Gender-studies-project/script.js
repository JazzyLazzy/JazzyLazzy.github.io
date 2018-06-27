var slide0 = document.getElementById("welcome");
var slide0$5 = document.getElementById("airplane");
var slide1 = document.getElementById("airplanecrash");
var slide2 = document.getElementById("soiboi");
var slide3 = document.getElementById("commman");
var slide4 = document.getElementById("gather");
var slide5 = document.getElementById("soiboisplit");
var slide6 = document.getElementById("noresource");
var slide6$5 = document.getElementById("bad-jobs");
var slide7 = document.getElementById("starve");
var slide8 = document.getElementById("peterjordanson");
var slide9 = document.getElementById("financialadvise");
var slide10 = document.getElementById("merica");
var slide11 = document.getElementById("likepeter");
var slide12 = document.getElementById("redpill");
var slide13 = document.getElementById("obama");

/*Oh! No JQuery? It is because JQuery is not necessary. JQuery is... JUST PLAIN BOGUS.*/

var slidearr = [slide0, slide0$5, slide1, slide2, slide3, slide4, slide5, slide6, slide6$5, slide7, slide8, slide9, slide10, slide11, slide12, slide13];
var i = 0;

var planecrash = new Audio("aud/747crash.mp3");
var ussranthem = new Audio("aud/soviet-anthem.mp3");

function pauseplanecrash() {	
	if (slide1.style.display == "none") {
		planecrash.pause();
	}
}

function pauseussranthem() {
	if (slide3.style.display == "none") {
		ussranthem.pause();
	}
}

function slideplays(){
	if (slide0.style.display == "block") {
		document.getElementById("backward").style.display = "none";
	}
	if (slide0$5.style.display == "block") {
		document.getElementById("backward").style.display = "block";
	}
	if (slide1.style.display == "block") {
		var planemove = document.getElementById("crashplane");
		var planepos = 50;
		var id9 = setInterval(frame5, 3);
		function frame5(){
			if (planepos == 461) {
				clearInterval(id9);
				document.getElementById("crashplane").style.display = "none";
				slide1.style.backgroundImage = "url('img/911.jpg')";
			}
			if (planepos == 388) {
				planecrash.play();
				planepos++;
				planemove.style.left = planepos + "px";
			}
			else {
				planepos++;
				planemove.style.left = planepos + "px";
			}
		}
	}
	if (slide3.style.display == "block") {
		ussranthem.play();
	}
	if (slide4.style.display == "block") {
		var p1move = document.getElementById("person1");
		var p2move = document.getElementById("person2");
		var p1pos = 140;
		var p2pos = 800;
		var id1 = setInterval(frame1, 5);
		var id2 = setInterval(frame2, 3);
		function frame1() {
			if (p1pos == 199) {
				clearInterval(id1);
			}
			else {
				p1pos++;
				p1move.style.left = p1pos + "px";
			}
		}
		function frame2() {
			if (p2pos == 613) {
				clearInterval(id2);
			}
			else {
				p2pos--;
				p2move.style.left = p2pos + "px";
			}
		}
	}
	if (slide5.style.display == "block") {
		var sbbarexpand = document.getElementById("sbbar");
		var sbbar = 175;
		var id = setInterval(showbars, 7);
		function showbars() {
			if (sbbar == 0) {
				clearInterval(id);
			}
			else {
				sbbar--;
				sbbarexpand.style.height = sbbar + "px"; 
			}
		}
	}
	if (slide6.style.display == "block") {
		var stackmh = document.getElementById("malehunt2");
		var stackmg = document.getElementById("malegath2");
		var stackfmh = document.getElementById("femalehunt2");
		var stackfmg = document.getElementById("femalegath2");
		var mhbarposleft = 100;
		var fmhbarposleft = 275;
		var mgbarposleft = 550;
		var fmgbarposleft = 725;
		var fmhbarposbott = 0;
		var fmgbarposbott = 0;
		var id3 = setInterval(movembars, 8);
		function movembars() {
			if (mhbarposleft == 187) {
				clearInterval(id3);
			}
			else {
				mhbarposleft++;
				mgbarposleft++;
				stackmh.style.left = mhbarposleft + "px";
				stackmg.style.left = mgbarposleft + "px";
			}
		}
		var id4 = setInterval(movefbars, 7);
		function movefbars(){
			if (fmhbarposleft == 187) {
				clearInterval(id4);
			}
			else {
				fmhbarposleft--;
				fmgbarposleft--;
				stackfmh.style.left = fmhbarposleft + "px";
				stackfmg.style.left = fmgbarposleft + "px";
			}
		}
		var id5 = setInterval(movefbarsup, 7);
		function movefbarsup() {
			if (fmhbarposbott == 200) {
				clearInterval(id5);
			}
			else {
				fmhbarposbott++;
				stackfmh.style.bottom = fmhbarposbott + "px";
			}
			document.getElementById("malehunt2").style.height = "225px";
			document.getElementById("femalehunt2").style.height = "200px";
			document.getElementById("malegath2").style.height = "175px";
			document.getElementById("femalegath2").style.height = "225px";
		}
		var id6 = setInterval(movef2barup, 7);
		function movef2barup() {
			if (fmgbarposbott == 175) {
				clearInterval(id6);
			}
			else {
				fmgbarposbott++;
				stackfmg.style.bottom = fmgbarposbott + "px";
			}
		}  
	}
	if (slide10.style.display == "block") {
		var MAGA = new Audio("aud/MAGA.mp3");
		MAGA.play();
	}
	if (slide11.style.display == "block") {
		var p3move = document.getElementById("person4");
		var p4move = document.getElementById("person5");
		var p3pos = 140;
		var p4pos = 800;
		var id7 = setInterval(frame3, 5);
		var id8 = setInterval(frame4, 3);
		function frame3() {
			if (p3pos == 199) {
				clearInterval(id7);
			}
			else {
				p3pos++;
				p3move.style.left = p3pos + "px";
			}
		}
		function frame4() {
			if (p4pos == 613) {
				clearInterval(id8);
			}
			else {
				p4pos--;
				p4move.style.left = p4pos + "px";
			}
		}
	}
	if (slide12.style.display == "block") {
		document.getElementById("forward").style.display = "block";
		var benshapiro = new Audio("aud/benshapiro.mp3");
		benshapiro.play();
	}
	if (slide13.style.display == "block") {
		var obaama = new Audio("aud/obaama.mp3");
		obaama.play();
		document.getElementById("forward").style.display = "none";
	}
}

var txt0$5 = "There was an airplane.";
var txt0$75 = "No one knows why, but it crashed."
var txt1 = "No one knows why, but it crashed.";
var txt2 = "soy boy justin (no caps because that is a symbol of oppression) is the first survivor to get up. He started fumbling around for his communist manifesto.";
var txt3 = "When he found it, he couldn't help but sing in joy. Союз нерушимый...";
var txt4 = "As the remaining survivors woke up, they gathered around him, as he had the communist manifesto. They decided to elect him supreme leader.";
var txt5 = "soy boy justin immediately begin implementing a system in order for the survivors to... keep surviving. He decided to split the jobs up equally, making 50% of the hunters female, the rest being male, and 50% of the gatherers, and caretakers of the 2 children, male, the rest being female.";
var txt6 = "However, after a week, productivity wasn't as high as exepected. The female hunters, IN TOTAL, only brought in 78% of what their male counterparts brought in, and the male gatherers and caretakers were 22% less efficient at their assigned roles than their female counterparts.";
var txt6$5 = "The combat veteran told children this story. Click him to hear it!";
var txt7 = "At this point. The stranded islanders were starving. This is what their situation looked like:";
var txt8 = "One man, named Peter Jordanson, decided to declare the situation just plain bogus.";
var txt9 = "Jordanson decided to consult with the financial advisor, the most intelligent of the survivors, as to where to go on the island in order to best survive. She was assigned a hunter, and faired pretty well at it.";
var txt10 = "Then with a small group, Jordanson split off and said:";
var txt11 = "Jordanson's group did better than justin's group, and therefore survived. justin died a horrible death.";

var slide0$5txt = document.getElementById("airplanetxt");
var slide1txt = document.getElementById("crashtxt");
var slide2txt = document.getElementById("soiboitxt");
var slide3txt = document.getElementById("commmantxt");
var slide4txt = document.getElementById("gathertxt");
var slide5txt = document.getElementById("soiboisplittxt");
var slide6txt = document.getElementById("noresourcetxt");
var slide6$5txt = document.getElementById("bad-jobstxt");
var slide7txt = document.getElementById("starvetxt");
var slide8txt = document.getElementById("peterjordansontxt");
var slide9txt = document.getElementById("financialadvisetxt");
var slide10txt = document.getElementById("mericatxt");
var slide11txt = document.getElementById("likepetertxt");

var x = 0;
var txtcontentarr = [txt0$5, txt1, txt2, txt3, txt4, txt5, txt6, txt6$5, txt7, txt8, txt9, txt10, txt11];
var y = 0;
var txtarr = [slide0$5txt, slide1txt, slide2txt, slide3txt, slide4txt, slide5txt, slide6txt, slide6$5txt, slide7txt, slide8txt, slide9txt, slide10txt, slide11txt];
var txtspeed = 55;

function showtxt() {
	window.addEventListener("keypress", speed, false);
	window.addEventListener("keyup", slow, false);
	function speed(e) {	
		if (e.keyCode == 32) {
			txtspeed--;
		}
	}
	function slow(ev) {
		if (ev.keyCode == 32) {
			txtspeed = 55;
		}
	}
	if (y === txtarr.length){
		y = txtarr.length;
	}
	else if (x < txtcontentarr[y].length) {
		txtarr[y].innerHTML += txtcontentarr[y].charAt(x);
		x++;
		setTimeout(showtxt, txtspeed);
	}
	else if (x = txtcontentarr[y].length) {
		y = y + 1;
		x = 0;
		txtspeed = 55;
	}
}

document.getElementById("forward").onclick = function() {
	i = i + 1;
	slidearr[i - 1].style.display = "none";
	slidearr[i].style.display = "block";
	showtxt();
	slideplays();
	pauseplanecrash();
	pauseussranthem();
}

document.getElementById("backward").onclick = function() {
	i = i - 1;
	slidearr[i + 1].style.display = "none";
	slidearr[i].style.display = "block";
	slideplays();
	pauseplanecrash();
	pauseussranthem();
	document.getElementById("crashplane").style.display = "block";
	slide1.style.backgroundImage = "url('img/towers.jpg')";
}

function ajs() {
	var aj1 = new Audio("aud/Alex 1.mp3");
	var aj2 = new Audio("aud/Alex 3.mp3");
	var aj3 = new Audio("aud/Alex 6.mp3");
	var aj4 = new Audio("aud/Alex 5.mp3");
	var aj5 = new Audio("aud/alexjones7");
	
	var ajarr = [aj1, aj2, aj3, aj4, aj5];
	var randajs = ajarr[Math.floor(Math.random() * ajarr.length)];
	console.log(randajs);
	randajs.play();
}

function playajs() {
	var combataj = new Audio("aud/Alex 2.1.mp3");
	combataj.play();
}