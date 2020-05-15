//Мы создали модуль Labyrinth
var Labyrinth = (function (){
	var nameLab = 'Зайчик';
	var rows = [];
	var heroX = 0;
	var heroY = 0;
	
	var width = 3;
	var height = 3;
	
	var ground = "#060";
	var wall = '#000';
	//var gamer = "red";
	var gamer = smile;
	
	function generateDefault(){
		rows = [
			[gamer, wall, ground],		//Первая строчка(линия)
			[ground, ground, ground],	//Вторая строчка(линия)
			[ground, wall, ground],		//Третья строчка(линия)
		];
	}
	
	function generate(){
		rows = [];
		for(var y = 0; y < height; y++){
			var line = [];
			
			for(var x = 0; x < width; x++){
				if (x % 2 == 1 && y % 2 == 0){
					line.push(wall);
				}else{
					line.push(ground);
				}
				
			}
			
			rows.push(line);
		}
	}
	
	function getRows(){
		var copyRows = [];
		for (var y = 0; y < height; y++){
			var copyLine = rows[y].slice();
			copyRows.push(copyLine);
		}
		
		copyRows[heroY][heroX] = gamer;
		return copyRows;
	}
	
	function heroStep(direction){
		var heroXPossible = heroX;
		var heroYPossible = heroY;
		
		switch(direction){
			case 0://up
				heroYPossible--;
				break;
			case 1://right
				heroXPossible++;
				break;
			case 2://down
				heroYPossible++;
				break;
			case 3://left
				heroXPossible--;
				break;
		}
		
		if (heroXPossible >= 0 && heroXPossible <= width - 1
			&& heroYPossible >= 0 && heroYPossible <= height - 1
			&& rows[heroYPossible][heroXPossible] != wall){
			heroX = heroXPossible;
			heroY = heroYPossible;
		}
		
	}
	
	function setSize(newHeight, newWidth){
		if (newHeight > 0)
		{
			height = newHeight;
		}
		
		if (newWidth > 0)
		{
			width = newWidth;
		}
	}
	
	return {
		getWidth: function (){ return width; },
		getHeight: function (){ return height; },
		generateDefault: generateDefault,
		generate: generate,
		getRows: getRows,
		setSize: setSize,
		heroStep: heroStep,
	};
})();












