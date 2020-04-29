var LAB = (function (){
	var _rows = [];
	var width = 3;
	var height = 3;
	
	function generateFullWall(){
		for(var y = 0; y < height; y++){
			var line = [];
			for(var x = 0; x < width; x++){
				line[x] = 'X';
			}
			_rows[y] = line;
		}
	}
	
	function generateMyLab(){
		_rows = [
			['@', 'X', ' '],
			[' ', ' ', ' '],
			[' ', 'X', ' '],
		];	
	}
	
	function getRows(){
		//clone array
		return _rows.slice();
	}
	
	function getWidth(){
		return width;
	}
	
	function getHeight(){
		return height;
	}
	
	function stepDown(){
		_rows[0][0] = ' ';
		_rows[1][0] = '@';
	}
	
	return {
		name: "Lvl 1",
		getRows: getRows,
		cells: [],
		generate: generateMyLab,
		getWidth: getWidth,
		getHeight: getHeight,
		stepDown: stepDown
	};
})();