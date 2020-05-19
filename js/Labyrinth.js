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
	
	function generateHard(){
		rows = [];
		for(var y = 0; y < height; y++){
			var line = [];
			for(var x = 0; x < width; x++){
				line.push(wall);
			}
			rows.push(line);
		}
		
		rows[heroY][heroX] = ground;
		var wallToBreak = [];
		
		do{
			addNearCell(wallToBreak, heroX, heroY);
			wallToBreak = filterGoodWall(wallToBreak);
			
			var coor = getRandomElem(wallToBreak);
			rows[coor.y][coor.x] = ground;
			heroX = coor.x;
			heroY = coor.y;
		}while(filterGoodWall(wallToBreak).length > 0);
	}
	
	function getRandomElem(items){
		return items[Math.floor(Math.random() * items.length)];
	}
	
	function addNearCell(wallToBreak, x, y){
		if (x > 0){
			wallToBreak.push({
				x: x - 1,
				y: y
				});
		}
		if (x < width - 1){
			wallToBreak.push({
				x: x + 1,
				y: y
				});
		}
		if (y > 0){
			wallToBreak.push({
				x: x,
				y: y - 1
				});
		}
		if (y < height - 1){
			wallToBreak.push({
				x: x,
				y: y + 1
				});
		}
	}
	
	function filterOnleWall(wallToBreak){
		//return wallToBreak.filter(coor => rows[coor.y][coor.x] == wall);
		return wallToBreak.filter(function (elem){
			return rows[elem.y][elem.x] == wall;
		});
	}
	
	function filterGoodWall(wallToBreak){
		//return wallToBreak.filter(coor => rows[coor.y][coor.x] == wall);
		return wallToBreak.filter(function (elem){
			var near = [];
			addNearCell(near, elem.x, elem.y);
			var start = near.length;
			var end = filterOnleWall(near).length;
			
			return rows[elem.y][elem.x] == wall
				&& start - end < 2;
		});
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
		generate: generateHard,
		getRows: getRows,
		setSize: setSize,
		heroStep: heroStep,
	};
})();












