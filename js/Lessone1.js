$(document).ready(function(){
	var ctx;
	var size = 70;
	var margin = 2;
	
	init();
	
	$('.doStep').click(function (){
		var dir = $(this).data('direction') - 0;
		stepToDir(dir);
	});
	
	function stepToDir(dir){
		Labyrinth.heroStep(dir);
		var rows = Labyrinth.getRows();
		drawLab(rows);
	}
	
	$(document).keydown(function(e) {
		//left
		if (e.keyCode == 37) {
			stepToDir(3);
		}
		//up
		if (e.keyCode == 38) {
			stepToDir(0);
		}
		//right
		if (e.keyCode == 39) {
			stepToDir(1);
		}
		//down
		if (e.keyCode == 40) {
			stepToDir(2);
		}
		
		e.preventDefault();
	});
	
	function init(){
		var canvas = document.getElementById('blockForDraw');
		canvas.width = 3000;
		canvas.height = 3000;
		ctx = canvas.getContext("2d");

		Labyrinth.setSize(10, 20);
		Labyrinth.generate();
		var rows = Labyrinth.getRows();

		drawLab(rows);
	}
	
	function drawLab(rows){
		ctx.clearRect(0, 0, 3000, 3000);
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
			}
		}
	}
});














