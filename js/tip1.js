//Создали переменную
var age = 15;

if (age > 18){
	//Если внутри скобок была правда
	console.log('growing');
}else{
	//Если внутри скобок была ложь
	console.log('child');
}

for(var i = 0; i < 3; i++){
	console.log('Smile ' + i);
}

//for(
	/*Один раз!*/;
	/*Проверка на продолжение*/ ; 
	/*Каждый раз в конце итерации*/
//){}


// Создание функции
function SayHi(parmName){
	console.log("Hi " + parmName);
	if (parmName.length > 3){
		console.log('Nice name');
	}
	console.log('How do you do?');
}


var name = "Ivan";
//Вызов
SayHi(name);
//Вызов
SayHi("Ia");


















