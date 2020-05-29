$(document).ready(function (){
	$('.popup').hide();
	
	$('.showPreview').click(function (){
		var errors = validAndGetErrors();
		if (errors.length > 0){
			$('.errors').text('validation is fail');
			for(var i = 0; i < errors.length; i++){
				var error = errors[i];
				var p = $('<p>');
				p.text(error);
				$('.errors').append(p);
			}
			return;
		}else{
			$('.errors').empty();
		}
		
		fillName();
		
		fillSex();
		
		fillCity();
		
		fillAge();
		
		fillBorder();
	});
	
	$('.close').click(function (){
		$('.popup').hide();
	});
	
	$('.adv').hover(function (){
		$('.header').text('Smile');
	});
	
	$('.left .button').click(function (){
		$('.left .button').removeClass('active');
		$(this).addClass('active');
	});
	
	$('.girl .header').click(removeImageBlock);
	
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

	function validAndGetErrors(){
		var errors = [];
		var name = $('#login').val();
		if (name.length < 2){
			errors.push("name must be more than 2 symbol");
		}
		
		var pass = $('.password').val();
		if (pass == '123'){
			errors.push("pass not able 123");
		}
		
		var sex = $("[name=sex]:checked").val();
		if (!sex){
			errors.push("sex not choosen");
		}
		
		var age = getAge();
		if(!Number.isInteger(age)){
			errors.push("Select date");
		}
		if (age > 20){
			errors.push("Too old");
		}
		
		//RGB
		//#ab00f2
		var borderColor = $('.border-color').val();
		if (borderColor[1] != '0'
			|| borderColor[2] != '0'){
			errors.push("No Red!");
		}
		
		return errors;
	}
	
	function getAge(){
		var dateStr = $('.birthday').val();
		var date = Date.parse(dateStr);
		var age = (Date.now() - date)/1000/60/60/24/365;
		age = Math.round(age);
		return age;
	}

	function fillName(){
		var name = $('#login').val();
		$('.preview span.name').text(name);
	}

	function fillSex(){
		var sex = $("[name=sex]:checked").val();
		if (sex == 'm'){
			$('.preview span.sex').text('man');
		}else if (sex == 'f'){
			$('.preview span.sex').text('woman');
		}
	}

	function fillCity(){
		var city = $(".data .city option:checked").val();
		switch(city){
			case '1':
				$('.preview .city').text('capital');
				$('.cityImg').attr('src', 'https://q-xx.bstatic.com/xdata/images/hotel/840x460/166839295.jpg?k=f9bfea9847a3ad2b21294535af7209f226e09b2cc68ddcf7a3be4ec801f13659&o=');
				break;
			case '2':
				$('.preview .city').text('in another country');
				$('.cityImg').attr('src', 'https://img5.eadaily.com/r650x400/o/c41/294c6d744c4511fc1cc4af9b75bc7.jpg');
				break;
			case '3':
				$('.preview .city').text('not so far');
				$('.cityImg').attr('src', 'https://static.bobr.by/2015/07/14/kvadro_bobr.by_1.jpg');
				console.log('3');
				break;
		}
	}

	function fillAge(){
		var age = getAge();
		$('.preview .age').text(age);
	}
	
	function fillBorder(){
		var borderSize = $('#sizeInput').val() - 0;
		$('.preview').css('border-width', borderSize);
		// '#ff00ab'
		var borderColor = $('.border-color').val();
		$('.preview').css('border-color', borderColor);
	}
});








