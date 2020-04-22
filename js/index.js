$(document).ready(function (){
	var canvas = $("#blockForDraw")[0];
	canvas.width  = 1000;
	canvas.height = 1000;

	var ctx = canvas.getContext("2d");
	
	var xPosition = 0;
	for(var i = 0; i < 10; i++){
		
		var size = randomInteger(10, 100);
		
		ctx.rect(xPosition, 10, size, size);
		xPosition += size + 10;
	}
	
	
	ctx.fill();

	
	function randomInteger(min, max) {
		let rand = min - 0.5 + Math.random() * (max - min + 1);
		return Math.round(rand);
	}
});