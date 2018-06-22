var slide0 = document.getElementById("welcome");
var slide1 = document.getElementById("crash");
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

var slidearr = [slide0, slide1, slide2, slide3, slide4, slide5, slide6, slide6$5, slide7, slide8, slide9, slide10, slide11, slide12, slide13];
var i = 0;

document.getElementById("forward").onclick = function(){
	console.log("hit");
	i = i + 1;
	slidearr[i - 1].style.display = "none";
	slidearr[i].style.display = "block";
	if (slide1.style.display == "block") {
		var planecrash = new Audio("aud/747crash.mp3");
		planecrash.play();
		window.addEventListener("keydown", stopcrash);
		function stopcrash(e) {
			if (e.keyCode == "32") {
				planecrash.pause();
			}
		}
	}
	if (slide3.style.display == "block") {
		var ussranthem = new Audio("aud/soviet-anthem.mp3");
		ussranthem.play();
		window.addEventListener("keydown", stopanthem);
		function stopanthem(e) {
			if (e.keyCode == "32") {
				ussranthem.pause();
			}
		}
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
	if (slide10.style.display == "block"){
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
	//if ()
}

var a = 0;

function ajs() {
	var aj1 = new Audio("aud/Alex 1.mp3");
	var aj2 = new Audio("aud/Alex 3.mp3");
	var aj3 = new Audio("aud/Alex 6.mp3");
	
	var ajarr = [aj1, aj2, aj3];
	var randajs = ajarr[Math.floor(Math.random() * ajarr.length];
	ajarr[a].play();
}

function playajs() {
	var combataj = new Audio("aud/Alex 2.1.mp3");
	combataj.play();
}