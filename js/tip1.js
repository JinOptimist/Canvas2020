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

function GetFullName(name, secondName){
	if (!secondName){
		return "Cool bro " + name;
	}
	//return "Mr. " + name + " " + secondName;;
	return `Mr. ${name} ${secondName}`;
}

function returnVsContnue(){
	var counter = 0;
	while(true){
		counter++;
		if (counter % 2 == 0){
			continue;
		}
		
		console.log(counter);
		if (counter > 10){
			return counter;
		}
	}
}

var a = returnVsContnue();

var name = "Ivan";
//Вызов
SayHi(name);
//Вызов
SayHi("Ia");

var fullNameIvanov = GetFullName('Ivan', 'Ivanon');
var fullNameMar = GetFullName('Mar', 'Petrova');
var fullNameRap = GetFullName('Jd');


















