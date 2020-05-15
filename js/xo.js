$(document).ready(function(){
	var matrix = [];
	var size = 50;
	var margin = 5;
	
	var ctx;
	
	init();
	
	$('#setX').click(function (){
		var xCoordinate = $(".xx").val() - 0;
		var yCoordinate = $(".xy").val() - 0;
		
		matrix[yCoordinate][xCoordinate] = 'x';
		
		drawXO();
	});
	
	$('#setO').click(function (){
		var xCoordinate = $(".ox").val() - 0;
		var yCoordinate = $(".oy").val() - 0;
		
		matrix[yCoordinate][xCoordinate] = 'o';
		
		drawXO();
	});
	
	function init(){
		var canvas = document.getElementById('blockForDraw');
		canvas.width = 3000;
		canvas.height = 3000;
		ctx = canvas.getContext("2d");
		
		
		for(var y = 0; y < 3; y++){
			var line = [];
			for(var x = 0; x < 3; x++){
				line.push('-');
			}
			matrix.push(line);
		}
		
		drawXO();
	}
	
	function drawXO(){
		ctx.clearRect(0, 0, 3000, 3000);
		for (var i = 0; i < matrix.length; i++){
			var line = matrix[i];//["x","-","o"]
			
			for (var j = 0; j < line.length; j++){
				//j хранит в себе номер строчки
				var cell = line[j];//"green"
					
				if (cell == "-"){
					ctx.fillStyle = "#00f";
					ctx.fillRect(10 +  (size + margin) * j, 10 +  (size + margin) * i, size, size);
				}else if (cell == "x"){
					ctx.fillStyle = "#0f0";
					ctx.fillRect(10 +  (size + margin) * j, 10 +  (size + margin) * i, size, size);
				}else if (cell == "o"){
					ctx.fillStyle = "#f00";
					ctx.fillRect(10 +  (size + margin) * j, 10 +  (size + margin) * i, size, size);
				}
				
				
				
			}
		}
	}
});














