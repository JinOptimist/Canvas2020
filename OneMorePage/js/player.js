$(document).ready(function (){
	var music = [
		'music/Time in a Bottle.mp3', 
		'music/yesterday.mp3', 
		'music/ooh-la-la-in-l-a.mp3'];
	var musicIndex = 0;
	
	
		
	$('#play').click(function(){
		play();
	});
	
	$('#stop').click(function(){
		$('#player')[0].pause();
	});
	
	$('#next').click(function(){
		musicIndex++;
		if (musicIndex >= music.length){
			musicIndex = 0;
		}	
		play();
	});
	
	$('#prev').click(function(){
		musicIndex--;
		if (musicIndex <= -1){
			musicIndex = music.length - 1;
		}	
		play();
	});
	
	function play(){
		$('#player').attr('src', music[musicIndex]);
		$('#player')[0].play();
	}
	
});








