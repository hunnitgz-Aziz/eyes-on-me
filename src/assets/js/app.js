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

for(var i = 0; i <= 20; i++){
	eyes[i] = new addEyes();
	eyes.push(i);
	let centerX = balls.offsetLeft + balls.offsetWidth / 2;
  let centerY = balls.offsetTop + balls.offsetHeight / 2;
  console.log('CenterX: '+ centerX + ', CenterY: ' + centerY);
	// console.log(balls.length);
	// console.log([eyes]);
}



document.onmousemove = function(event) {
	var x = event.clientX * 100 / window.innerWidth + "%";
	var y = event.clientY * 100 / window.innerHeight + "%";
	
	console.log('X coord: '+ x + ', Y coord: ' + y);

	for(var i = 0; i < balls.length; i++) {
		
		balls[i].style.left = x;
		balls[i].style.top = y;
		balls[i].style.transform = "translate(-"+x+", -"+y+")";
	}
}





