var name = 'Test';

function SayHi(name, fam){
	//var fullName = 'Mr. ' name + ' ' + fam;
	var fullName = `Mr. ${name} ${fam}`;
	console.log(fullName);
	
	//Копирует значения при работе с базовыми типами.
	//string, number, boolean
	return fullName;
}

//Сюда будет скопированно значение которое вернёт функция.
//Но переменная из функции SayHi, будет удалена.
var niceString = SayHi('Pavel', 'Optimist');

//fullName здесь уже не существует
//console.log(fullName);

function CreateHero(name, fam){
	var hero = {};
	var firstName = name;
	var secondName = fam;
	
	hero.getFullName = function (){
		return `Mr. ${firstName} ${secondName}`;
	};
	//Возвращаем объeкт
	return hero;
}

var newHero = CreateHero('Pavel', 'Optimist');
//newHero здесь всё ещё жив. 
//Как и все переменные которые ему нужны для работы
//При этом, область видимости, не позвоялет нам получить 
// напрямую доступ к перменной fullName
//Но сама пременная fullName жива, её можно увидеть, вызвав метод getFullName
console.log(newHero.getFullName());

//Вариант 1. Хороший
//Пример само вызывающейся функции
(function (){
	var aaa = 'Smile';
	console.log(aaa);
})();
//После её выполнения, мы не будем знать ничего о перменной aaa



//Вариант 2. Плохой
var a = 'Smile';
console.log(a);
//После выполнения варианта 2, мы БУДЕМ знать перменной aaa.
//И она нас будет отвлекать



var direction = 1;
//Вариант 1. switch/case
switch(direction){
	case 0://up
		heroYPossible--;
		break;
	case 1://right
		heroXPossible++;
		break;
}

//Вариант 2. if/else
if (direction == 0){
	heroYPossible--;
}else if (direction == 1){
	heroXPossible++;
}

function compareInt(a, b){
	return a > b;
}

function mySort(array, sortFunc){
	for(var i = 0; i < array.length - 1; i++){
		if (sortFunc(array[i], array[i+1])){
			var temo = array[i];
			array[i] = array[i+1];
			array[i+1] = temo;
		}
	}
}

mySort([1,6,2,8,10], compareInt);
mySort([1,6,2,8,10], (a,b) => a > b);









