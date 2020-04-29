$(document).ready(function (){
	var canvas = $("#blockForDraw")[0];
	canvas.width  = 1000;
	canvas.height = 1000;
	var ctx = canvas.getContext("2d");	
	var size = 50;
	var margin = 10;
	
	LAB.generate();
	drawLab();
	
	function drawBorder(){
		var rows = LAB.getRows();
		
		ctx.beginPath();
		ctx.lineWidth = 10;
		
		var yBottomLeft = (size + margin) * LAB.getHeight() + margin;
		var xBottomright = (size + margin) * LAB.getWidth() + margin;
		
		ctx.strokeRect(0, 0, xBottomright, yBottomLeft);
		
		ctx.stroke();
		ctx.lineWidth = 1;
	}
	
	function drawLabCelss(){
		var rows = LAB.getRows();
		
		var xPosition = margin;
		var yPosition = margin;
		
		for(var y = 0; y < rows.length; y++){
			xPosition = margin;
			var line = rows[y];
			for(var x = 0; x < line.length; x++){
				var cell = line[x];
				if (cell == "X"){
					ctx.rect(xPosition, yPosition, size, size);		
				}else if (cell == "@"){
					var old = ctx.fillStyle;
					ctx.fillStyle = "red";
					ctx.fillRect(xPosition, yPosition, size, size);		
					ctx.fillStyle = old;
				}else{
					ctx.strokeRect(xPosition, yPosition, size, size);
				}
				
				xPosition += size + margin;
			}
			yPosition += size + margin;
		}
	}

	function drawLab(){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawBorder();
		drawLabCelss();
		ctx.fill();
	}

	$('#stepDown').click(function (){
		LAB.stepDown();
		drawLab();
	});
});