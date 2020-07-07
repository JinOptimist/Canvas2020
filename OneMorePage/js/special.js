$(document).ready(function (){
	var sliderModule = createSliderModule();
	sliderModule.start('.slider-my-cool', [
		'img/girl6.jpg',
		'img/girl7.jpg',
		'img/girl8.png'
	]);
	
	var sliderModule2 = createSliderModule();
	sliderModule2.start('.slider-my-bad',[
		'img/girl5.jpg',
		'img/girl2.jpg',
		'img/girl3.jpg',
		'img/girl4.jpg'
	]);
});








