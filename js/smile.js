$(document).ready(function (){
	// var canvas = $("#blockForDraw")[0];
	// canvas.width = 1000;
	// canvas.height = 1000;
	// var ctx = canvas.getContext("2d");
	
	// randoRect(ctx);
	// smile(ctx, 300, 200, 50);
	// smile(ctx, 100, 200, 50);
});

var numberOfTask;
function smile(ctx, x, y, rFull){
	function draw(r){
		ctx.clearRect(x - rFull - 1, y - rFull - 1, rFull * 2 + 2, rFull * 2 + 2);
		ctx.beginPath();
		ctx.arc(x, y, r, 0, Math.PI * 2);
		ctx.stroke();
		
		var eyeX = x + r / 3;
		var eyeY = y - r / 3;
		var eyeR = r / 5;
		
		ctx.beginPath();
		ctx.arc(eyeX, eyeY, eyeR, 0, Math.PI * 2);
		ctx.stroke();
		
		var eye2X = x - r / 3;
		
		ctx.beginPath();
		ctx.arc(eye2X, eyeY, eyeR, 0, Math.PI * 2);
		ctx.stroke();
		ctx.closePath();
	}
	
	var counter = 0;
	var step = 100;
	var dirToSmall = true;
	
	clearInterval(numberOfTask);
	numberOfTask = setInterval(function (){
		if (dirToSmall){
			counter++;
		}else{
			counter--;
		}
		if (counter < 0 || counter > step - 2){
			dirToSmall = !dirToSmall;
		}
		
		var scale = (counter % step + step) / (step*2)  ;//[0.5, 1.0]
		draw(rFull * scale);
	}, 1000);
}

function randoRect(context){
	var startX = 10;
	var margin = 5;
	for (var i = 0; i < 5; i++){
		var size = randomInteger(10,100);
		context.fillStyle = getRandomColor();
		context.fillRect(startX, 10, size, size);
		startX += size + margin;
		// x += 10; ==> x = x + 10
	}
}

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

