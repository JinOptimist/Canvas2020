$(document).ready(function (){
	var arrayImgSrc = [
		'img/girl6.jpg',
		'img/girl7.jpg',
		'img/girl8.png'
	];
	
	var currentImgIndex = 0;
	
	init();
	
	$('.my-slider .left').click(function(){
		currentImgIndex--;
		updateImage();
	});
	
	$('.my-slider .right').click(function(){
		currentImgIndex++;
		updateImage();
	});
	
	function updateImage(){
		if (currentImgIndex < 0){
			currentImgIndex += arrayImgSrc.length;
		}
		if (currentImgIndex >= arrayImgSrc.length){
			currentImgIndex -= arrayImgSrc.length;
		}
		var url = arrayImgSrc[currentImgIndex];
		$('.visible-image').attr('src', url);
		$('.current').text(currentImgIndex + 1);
		$('.max').text(arrayImgSrc.length);
	}

	function init(){
		updateImage();
	}
});