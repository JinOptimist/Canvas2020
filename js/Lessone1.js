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
		var isWin = Labyrinth.heroStep(dir);
		if (isWin){
			$('.page').hide();
			$('.end-game').show();
		}else{
			drawLab();
		}
	}
	
	$(document).keydown(function(e) {
		if (e.keyCode >= 37 && e.keyCode <= 40){
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
		}
	});
	
	$('.switch-diff-type').click(function(){
		var old = $('.diff-type').val() - 0;
		$('.diff-type').val(++old % 2);
		$('.diff-type-block').toggle();
	});
	
	$('.start').click(function (){
		var width;
		var height;
		var diffType = $('.diff-type').val();
		if (diffType == 0){
			var diffOption = $('[name=diff]:checked');
			width = diffOption.data('width');
			height = diffOption.data('height');
		}else{
			width = $('.width').val() - 0;
			height = $('.height').val() - 0;	
		}
		
		Labyrinth.setSize(height, width);
		
		Labyrinth.generate();
		drawLab();
		
		$('.page').hide();
		$('.game').show();
	});
	
	$('.end').click(function (){
		$('.page').hide();
		$('.setting').show();
	});
	
	$('.nextLvl').click(function(){
		var w = Labyrinth.getWidth();
		var h = Labyrinth.getHeight();
		Labyrinth.setSize(h + 1, w + 1);
		Labyrinth.generate();
		drawLab();
		$('.page').hide();
		$('.game').show();
	});
	
	function init(){
		var canvas = document.getElementById('blockForDraw');
		canvas.width = 3000;
		canvas.height = 3000;
		ctx = canvas.getContext("2d");
	}
	
	function drawLab(){
		var rows = Labyrinth.getRows();
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
	
		var money = Labyrinth.getHeroMoney();
		$('.money').text(money);
	}
});














