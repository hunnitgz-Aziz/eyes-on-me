import axios from 'axios';

window.addEventListener('load', () => {});

var app = document.getElementById('app');
var eyes = [];
var balls = document.getElementsByClassName('ball');

function addEyes() {
  var lens = document.createElement('div');
  lens.className = 'eyes';

  lens.innerHTML = 
    '<div class="eye"><div class="ball"></div></div><div class="eye"><div class="ball"></div></div>';
  app.appendChild(lens);


}

function getPosition(el) {
  var xPos = 0;
  var yPos = 0;
 
  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;
 
      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }
 
    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}

var obj;
var x = 0;
var y = 0;

function getXY(){
	obj = balls;
	x += obj.offsetTop;
	y += obj.offsetLeft;
	console.log(obj);
	console.log(y);
	console.log(x);
}



var position = getPosition(balls);
let centerX = balls.offsetLeft + balls.offsetWidth / 2;
let centerY = balls.offsetTop + balls.offsetHeight / 2;

for(var i = 0; i <= 20; i++){
	eyes[i] = new addEyes();
	eyes.push(i);
	console.log(getXY())
 
	// console.log(balls.length);
	// console.log([eyes]);

}



document.onmousemove = function(event) {
	var x = event.clientX * 100 / window.innerWidth + "%";
	var y = event.clientY * 100 / window.innerHeight + "%";
	
	// console.log('X coord: '+ x + ', Y coord: ' + y);

	for(var i = 0; i < balls.length; i++) {
		// console.log("The image is located at: " + position.x + ", " + position.y);
		console.log(getPosition(balls[i]))
		balls[i].style.left = x;
		balls[i].style.top = y;
		balls[i].style.transform = "translate(-"+x+", -"+y+")";
	}
}





