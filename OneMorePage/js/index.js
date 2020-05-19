$(document).ready(function (){
	$('.popup').hide();
	
	$('.close').click(function (){
		$('.popup').hide();
	});
	
	$('.adv').hover(function (){
		$('.header').text('Smile');
	});
	
	$('.left .button').click(function (){
		// $('.left .button').css('background', 'red');
		// $(this).css('background', 'blue');
		$('.left .button').removeClass('active');
		$(this).addClass('active');
	});
	
	$('.girl .header').click(removeImageBlock);
	
	// $('#addNewBlock').click(function (){
		// var name = $('#nameNewGirl').val();
		// var url = $('#urlNewGirl').val();
		
		// var newGirlBlock = $('<div>');//document.createElement('div')
		// newGirlBlock.addClass('girl');
		
		// var header = $('<div>');
		// header.addClass('header');
		// header.text(name);
		// header.click(removeImageBlock);
		// newGirlBlock.append(header);
		
		// var imageBlock = $('<div>');
		// imageBlock.addClass('image');
		
		// var imageTag = $('<img>');
		// imageTag.attr('src', url);
		// imageBlock.append(imageTag);
		
		// newGirlBlock.append(imageBlock);
		
		// $('.gallery').append(newGirlBlock);
	// });
	
	$('#addNewBlock').click(function (){
		var name = $('#nameNewGirl').val();
		var url = $('#urlNewGirl').val();
		
		var copy = $('.template .girl').clone();
		copy.find('.header').text(name);
		copy.find('.image img').attr('src', url);
		
		$('.gallery').append(copy);
	});
	
	function removeImageBlock(){
		var headerIntoGirl = $(this);
		var girlBlock = $(this).parent();
		girlBlock.remove();
	}
	
	// document.querySelector('.close').onclick  = function (){
		// document.querySelector('.popup').style.display = "none";
	// };
});








