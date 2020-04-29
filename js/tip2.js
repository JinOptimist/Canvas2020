//цифры number
var age = 20;

//Строки string
var name = "admin";

//boolean Правда/Ложь
var condition1 = true;
var condition2 = false;
var condition3 = age > 18 && name != "Ivan";

//Массив
var dayOfWeek = ['Mon','Thu','Wen','Ch','Fri','Sat','Sun'];

for(var i = 0; i < dayOfWeek.length; i++){
	//Берём массив dayOfWeek и конктреное значение 
	//при помощи индекса i
	//Например dayOfWeek[0]
	var oneDay = dayOfWeek[i];
	console.log(oneDay);
}

//Создание объекта
var human = {};
//Создание и заполнение свойств
human.name = "Maria";
human.age =  10;
human.likeDog = false;
//Меняем значение у свойства в объекте
human.age =  20;

console.log(human.name);




