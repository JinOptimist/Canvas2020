$(document).ready(function(){
	var ctx;
	var size = 50;
	var margin = 2;
	
	init();
	
	$('.doStep').click(function (){
		var dir = $(this).data('direction') - 0;
		Labyrinth.heroStep(dir);
		var rows = Labyrinth.getRows();
		drawLab(rows);
	});
	
	function init(){
		var canvas = document.getElementById('blockForDraw');
		canvas.width = 3000;
		canvas.height = 3000;
		ctx = canvas.getContext("2d");

		Labyrinth.setSize(4, 6);
		Labyrinth.generate();
		var rows = Labyrinth.getRows();

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
				
				if (typeof(cell) == "function"){
					var helf = size / 2;
					cell(ctx, x + helf, y + helf, helf);
				}else{
					var old = ctx.fillStyle;
					ctx.fillStyle = cell;
					ctx.fillRect(x, y, size, size);
					ctx.fillStyle = old;
				}
				
				
				ctx.fill();
			}
		}
	}
});














