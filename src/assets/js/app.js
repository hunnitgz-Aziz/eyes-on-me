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

  var obj = {
  	x: xPos,
  	y: yPos
  }

  return obj;
}


for(var i = 0; i < 20; i++){
	eyes[i] = new addEyes();
	eyes.push(i);
}

document.onmousemove= function(event) {
	
	
	var x = event.clientX * 100 / window.innerWidth + "%";
	var y = event.clientY * 100 / window.innerHeight + "%";
	// var rect = event.target.getBoundingClientRect();
	// var x = event.clientX - rect.left;
	// var y = event.clientY - rect.top;
	console.log('X coord: '+ x + ', Y coord: ' + y);

	for(var i = 0; i < balls.length; i++) {
		// console.log('Scrolled')
		// console.log(balls[i])
		// console.log(getPosition(balls[i]));
		balls[i].style.left = x;
		balls[i].style.top = y;
		balls[i].style.transform = "translate(-"+x+", -"+y+")";
	}

}





