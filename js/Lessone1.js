$(document).ready(function(){
	var ctx;
	var size = 50;
	var margin = 2;
	
	init();
	
	$('#down').click(function (){
		var rows = generateLab();
		rows[0][0] = 'green';
		rows[1][0] = 'red';
		
		drawLab(rows);
	});
	
	function init(){
		var canvas = document.getElementById('blockForDraw');
		canvas.width = 1000;
		canvas.height = 1000;
		ctx = canvas.getContext("2d");

		var rows = generateLab();

		drawLab(rows);
	}
	
	function drawLab(rows){
		for (var i = 0; i < rows.length; i++){
			//i хранит в себе номер колонки
			var line = rows[i];//["green","green","green"]
			
			for (var j = 0; j < line.length; j++){
				//j хранит в себе номер строчки
				var cell = line[j];//"green"
				var x = j * (size + margin);
				var y = i * (size + margin);
				
				var old = ctx.fillStyle;
				ctx.fillStyle = cell;
				ctx.fillRect(x, y, size, size);
				ctx.fillStyle = old;
				
				ctx.fill();
			}
		}
	}

	//Скоро уедете в отдельный файл
	function generateLab(){
		return [
			["red",'#000',"green"],	//Первая строчка(линия)
			["green","green","green"],	//Вторая строчка(линия)
			["green",'#000',"green"],	//Третья строчка(линия)
		];
	}
});














