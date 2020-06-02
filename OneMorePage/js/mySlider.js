function createSliderModule(){
	var arrayImgSrc = [];
	var currentImgIndex = 0;
	var mainBlock;
	
	function left(){
		currentImgIndex--;
		updateImage();
	}
	
	function right(){
		currentImgIndex++;
		updateImage();
	}
	
	function updateImage(){
		if (currentImgIndex < 0){
			currentImgIndex += arrayImgSrc.length;
		}
		if (currentImgIndex >= arrayImgSrc.length){
			currentImgIndex -= arrayImgSrc.length;
		}
		var url = arrayImgSrc[currentImgIndex];
		mainBlock.find('.visible-image').attr('src', url);
		mainBlock.find('.current').text(currentImgIndex + 1);
		mainBlock.find('.max').text(arrayImgSrc.length);
	}

	function createButton(className, value){
		var buttonBlock = $('<div>');
		buttonBlock.addClass('button');
		//var input = $("<input type='button' class='" +  className + "' value='" + value + "' />");
		var input = $(`<input type='button' class='${className}' value='${value}' />`);
		buttonBlock.append(input);
		return buttonBlock;
	}
	
	function createHtml(){
		var sliderBlock = $('<div>');
		sliderBlock.addClass('my-slider');
		
		var left = createButton('left', 'Left');
		sliderBlock.append(left);
		
		var imageBlock = $('<div>');
		imageBlock.addClass('image-block');
		var spanCounter = $("<span class='counter'><span class='current'></span>/<span class='max'></span></span>")
		imageBlock.append(spanCounter);
		var img = $("<img class='visible-image' />");
		imageBlock.append(img);
		sliderBlock.append(imageBlock);
		
		var right = createButton('right', 'Right');
		sliderBlock.append(right);
		
		mainBlock.append(sliderBlock);
	}
	
	function init(selector, urls){
		//mainBlock = document.querySelector(selector);
		mainBlock = $(selector);
		createHtml();
		mainBlock.find('.my-slider .right').click(right);
		mainBlock.find('.my-slider .left').click(left);
		arrayImgSrc = urls;
		updateImage();
	}
	
	return {
		start: init
	};
};