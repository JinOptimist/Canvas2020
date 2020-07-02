var age = 15;

if (age > 18){
	// если внутри скобок была правда
	console.log('qrowing');
}else {
	// если внутри скобок была лож
	console.log('child'); 
}

for (var i = 0; i < 3; i++){
	console.log('Smile ' +i); 
}

// for (/*Один раз!*/;
/*проверка на продолжение*/;
 /*каждый раз в конце итерации*/
 // ){}
    // создание функции 
function test (){
	console.log('how do you do');
	console.log("I'm dine");
}
//вызов 
test () ;
for (var i = 0; i < 3; i++){
	test (); 
}