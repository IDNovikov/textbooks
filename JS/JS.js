/* This is secondbook of js*/
/*


document.write('world')    команда запишет скриптом текст на старницу, но не в HTML

let W = 'text';
document.write('<p>' + W + '</p>');*/




				/*Перевод в числа и сумма

let num1=1;
let num2=2;
console.log('summ:'+ (Number(num1) + Number(num2)));

let num='123';
let sum=num[0]+num[1]+num[2];
console.log(sum)*/


				/*ИнкрNмент



let a =0;
console.log(++a)

let n=1234
let b=n.length;
console.log(b)*/


/*alert(60*60)*/



let r = 3;
const Pi = 3.14;
let S = r*r*Pi;
/*console.log(S);*/



				/*Массив     [] - скобки массива 



let arr = [1,2,3,4,5]
console.log(arr[0]+arr[1])
console.log (arr.length)
console.log (arr[arr.length-1])

console.log(arr.length)

*/
				/*Объект      {}- скобки объекта




-Что бы изменить элемент объекта используют:
obj[1] / obj['a']

-Что бы добавить элементы в объект:
obj[4]=7  /  obj.b=4

-Получить длину объекта:
let keys=object.keys(obj)
console.log(Object.keys(obj).lenght)

-внутри скобок пишется объект:свойство
для вывода можно использовать как obj[1] , так и obj.1 


let obj = {1:'a', 2:'b', 3:'c'}

let user = {name:123, surname: 321, patronymic: 444}
document.write(user['name'],' ',+user['surname'],' ',user['patronymic'])


*//*console.log(obj[2])


-при обращении к элементу объекта через квадратные скобки имена ключей нужно брать в кавычки, 
а имена переменных - нет.

let username = 'name'
console.log(obj[name])       <->       console.log(obj['name'])


-что бы менять имя свойства у объекта необходимо в имя записать переменную
let key='a';
let obj = {[key]:1, [key='2']:2, c:3];


-оператор IN - можно проверять наличе свойства в объеке:
console.log('3'in obj)
//true

- оператор delete
delete obj.b   / [1]
//true


-при объявлении массивов и объектов константами можно изменять свойства объектов или их значения




				  Типизация объектов 
console.log(typeof{})

-существуют сложные типы данных и примитивы (string, number, boolean, null, undefined, symbol, bigint)
-boolean можно записывать как 1(true) или 0(false), с нестрогим условием ==





					IF-ELSE
-если...то...
if (test>0) {
console.log('+++')}
else{ console.log('---')} 


 * - можно сравнивать две переменные
   - можно подставлять Boolean 
	let test=true
	if (test==true) {..
      СОКРАЩЕНО: if(test) {.. или folse    If(!test) 
		 if (test&&test2),  if (test||test2)
   - конструкция else необязательна

 >= - оператор больше илb равно
 == - оператор равенства (можно сравнивать строки и числа)
 === - строгий оператор  равенства
 != - оператор неравенства
 !== - строгий оператор неравенства
 && - оператор И, имеет приоритет над ИЛИ	
	 if (test>test&&test>10) {...

 || - логичекское ИЛИ  
	if (test>10&&test<15||test==test)
 () - группирование 
 !  - инвертрование условия 
	(!(test>0)  --> test<0 
 

				     if-else-else if
- возможность выставлять доп. условия
	ТАКЖЕ КОНСТРУКЦИИ МОЖНО ВСТАВЛЯТЬ ДРУГ В ДРУГА

let num=1
if (num==1) {
  console.log('value1');
}else if (num==2) {
  console.log('value2');
}else if (num==3) {
  console.log('value3');
}else{....}




					SWITCH-CASE



switch (переменная) {
case 'значение1': 
  какой-то код
 break;
case'значение2':
  какой-то код2
break;
defaut:
  какой-то код
break;}


let num=1

switch (num) {
case 1:
  console.log('value1');
 break;
case2:
  console.log('value2');
break;
 defaut:
  console.log('incorrect value');
break;
}



				    Тернарный оператор

-сокращенная формулировка if-else
let переменная = условие ? значение1:значение2;

let age= 17
let adult = age>=18 ? true:false;
console.log(adult);*/


				   /*Функция Confirm

-функция вызова диалогового окна, при выборе ОК=true / NO=false 
*/
/*
let ok=confirm('Fuck ur mom?');
console.log(ok);
if (ok==true){
document.write('<p>'+'momfucker'+ '</p>');}
 else {document.write('<p>'+'cocksucker'+'</p>');
alert('Pidor');}
*/


				       /* ЦИКЛЫ

					for-of(массив)
					for-in(объект)

-позволяет последовательно перебрать элементы массива (также подходит и для объекта)

for(let переменнаяДляЭлемента of/in Массив/объект){
  В переменную для элемента массива будут по очереди
  попадать элементы перебираемого массива;}


let arr2=[1,2,3,4,5,6,7];
for (let elem of arr2) {
 console.log(elem);}

let obj2=[a:1,b:2,c:3,e:4,d:5,f:6,g:7];
for (let key of obj2) {
 console.log(key)/console.log(obj2[key]);}

*/


					/*while

-цикл будет выполнять до тех пор, пока истинно выражение переданое ему параметром
 и будет выполнятся пока истина, если не верно сразу, то не выполнится

while (пока выражение истинно) {
  код}


let i=1
while (i<=100000000000) {
  console.log(i); 
i++;}*/


					/*for
-позволяет запустить цикл заданное количество раз

for(начальные команды, условия окончания, команды после прохода){
 code of circle }

for (let i=1; i<=9; i+=2){
console.log(i)}

 
перебор массивов:

let arr2=[1,2,3,4,5]
for (let i = 0; i<=arr2.lenght-1; i++){
console.log(arr2[i]);} 


Уcловия:

for (let elem of arr2) {
if (elem%2===0){
console.log(elem);}
}


Инструкция Break:
-позволяет досрочно останавливать любой цикл
let arr2=[1,2,3,4,5]
for (let elem of arr2) {
console.log(elem)
 if (elem===3){
console.log('have');
break;}
}

Инструкция continue: 
-запускает новую итерацию цикла

let arr=[1,2,3,4,5,6,7,8,9]
for (let elem of arr) {
 let result;
  if (elem%2==0){
    result=elem*elem
  }else if (elem%3==0){
    result=elem*elem*elem
  }else { continue;}
 console.log(result)
}

Вложенные циклы: 

for (let i =1; i<=3; i++) {
 for (let j=1; j<=3; j++){
document.write(String(i)+String(j)+' ');}}
*/


					 /*Метод PUSH


- метод для заполнения массива данными

let arr2=[];

for (let i=1; i<=5; i++){
  arr.push(i);
}
console.log(arr);

- элементы массивов можно изменять циклом 
 let arr = [1,2,3,4,5];

for (let i = 0; i<arr.lenght; i++){
 arr[i]++;} 
console.log(arr);

-заполнение объектов

let keys = ['a','b','c','d']
let values = [1,2,3,4]
let obj = {}

for (let i=0; i<=4; i++){
 let key = keys[i]
 let value = values[i]
obj[key]=value;}

console.log(obj) 

-изменение объекта

let obj = {a:1, b:2, c:3};

for (let key in obj) {
 obj[key]=obj[key]*2;}

*/


					/*Работа с флагами


флаг-специальная переменная, которая может принимать только 2 значения true/false
с помощью флага можно решать задачи, проверяющие отстутствие объекта



пример:

let arr=[1,2,3,4,5]
let flag=false
for (let elem of arr) {
 if(elem==3) {
  console.log('+++')
  flag=true;
   break;
 }
}

if (flag===true) {
console.log('+++');
 } else { 
 console.log('---');
}



					/*Многомерные массивы 


-массивы вмещающие в себя другие массивы


let arr=[
[a,b,c],
[d,e,f],
[g,h,i]
];

console.log(arr[0][1]) //b
console.log(arr[1][2]) //f


!Что бы перебрать многомерные массивы используют вложенные массивы 

for (let subArr of arr) {
 for (let elem of subArr) { 
console.log(elem);}}


for (let i=0; i<arr.length; i++;) {
	for ( let j=0; i<arr[i].length; j++;){
		console.log(arr[i][j]) ;}
		}

*Заполнение массива: 
  - важное место занимает создание подмассива  arr[i]=[]
for (let i=0; i<3; i++;) {
	arr[i]=[]
	for ( let j=0; i<3; j++;){
		arr[i].push(j+1);}
		}
console.log(arr)


** сумма всех элементов: 
 arr=[[1,2],[3,4],[5,6]]
 sum = 0
 for (let subArr of arr) {
   for (let elem of subArr) {
     sum+=+elem
   }}
 сonsole.log(sum);

*** 
let arr=[]
let k=1
for (let i=0, k=1; i<3; i++) {
    arr[i]=[]
    for ( let j=0; j<3; j++){
        arr[i].push(k++);}
        }

console.log(arr)



						Многомерные объекты


let obj = {
a: {key1: 'a1',
   {key2: 'a2',
   {key3: 'a3',
  },
b: {key1: 'b1',
   {key2: 'b2',
   {key3: 'b3',
  },
c: {key1: 'c1',
   {key2: 'c2',
   {key3: 'c3',
  },
}
  console.log(obj.['a']['key1])  /  console.log(obj.a.key1)

*

for (let key in obj) {
 let subObj = obj[key];
 for (let subKey in subObj) {
   console.log(subObj[subKey]);}
}



						Многомерные структуры

let students = { 
'group1':['student11', student12', 'student13'],
'group2':['student21', student22', 'student23'],
'group3':['student31', student32', 'student33'],
} 

for (let group in students) {
  for (let name of students[group]) {
   console.log(name);
}
}

*ДОБАВЛЕНИЕ элементов в многемерные объекты 

students.group1.push('student14')

students.group4=[]  -  что бы создать новый массив нужно объявить сначала пустой
students.group4.push('student41')





   			Математические методы 

console.log(Math.pow(2,-5));  /   2**4   / возведение в степень

console.log(Math.sqrt(4))

math.round(6.4) - округление до 6.0
math.ceil() - округление до большего целого числа 3,1 в 4
toFixed - округление до числа 
   let num = 1.1111111
   console.log(num.toFixed(2)) / 1.11
math.max / math.min 
   console.log(Math.max(1,2,3,4,5))) / 5
Math.abs
   console.log(Math.abs(-3) / 3


Math.random() - возвращает случайное число от 0 до 1

Для вывода рондомного числа из указанного диапазона используют: 

  function getRandomArbitary (min, max) {
  return Math.random()
  *(max-min) 
  +min;
  }

  function getRandomInt (min, max) {
  return Math.floor(Math.random()
  *(max-min+1))+min;}

  console.log(getRandomInt(10, 100))


			Текстовые методы

toUpperCase / toLowerCase - изменение регистра

 includes - поиск заданной строки в текущей с учетом регистра
	let res = 'abcde'.includes('ab')
		// true
startsWith - начинается ли строка с заданной подстроки
endsWith - заканчивается ли строка на указанную подстроку
indexOf - поиск подстроки в строке
lastIndexOf - поиск последнего вхождения подстроки в строку 

replace - осуществляет поиск и замену 
  let str = 'abcde';
  let newStr = str.replace('ab', '!')
  console.log(newStr)


split - разбивает строки в массив по указанному разделителю
     * если разделтель не задан то вернется вся строка
       если заданы '' то разделение будет по каждому знаку

	let str='ab-cd-ef'
	let arr=str.split('-')
	console.log(arr) 
	arr=str.split('') // ['a','b','-','c','d','-','e','f']

join - метод объединяет элементы массива в строку ()-разделитель
	
	let str=arr.join('-') 

		**применение:
		  поменять формат даты с 2025-12-31 на 31.12.2025
		  let date = '2025-12-31'
		  let res = date.split('-').reverse().join('.');
		  console.log(res)


.shift - удаляет первый элемент из массива
.pop - удаляет последний элемент из массива
.push - добавляет элемент в конец массива
.unshift - добавляет элемент в начало массива
.slice - вырезает указанную часть массива

	.slice (0, 2) (откуда отрезать, докуда дорезать)
.splice - удаляет и добавляет в массив элементы может и одновременно
		*первый параметр: номер элемента который нужно удалить
		 второй параметрЖ сколько элементов нужно удалить (если 0 то элементы не будут удалены)
		 дальше через запятую те элементы которые добавить нужно (добавляются вместо удаленных)
		**если первый параметр указан с -, то отсчет начнется с 0
 
	let arr = ['a', 'b', 'c', 'd', 'e']
	arr.splice(2,1,'1','2','3','4','5')
	console.log(arr) 


includes - поиск элемента в массиве 
find - поиск первого элемента в массиве согласно переданному в параметре коллбэку
	массив.find(function)
		arr=[1,2,3,4]
		let res = arr.find(function(currentValue){
	  	RETURN CurrentValue>0;
		})
		console.log(res)
indexOf - поиск элемента в массиве, возвращает первый найденный
lastIndexOf - поиск с конйа, возвращает первый с конца

object.keys - возвращает массив из свойств объекта
	let obj = ['a':1,'b':2,'c':3']
	console.log(Object.keys(obj))



						ФУНКЦИИ

-функция создается с помощью команды function, далее через пробел ИМЯ функции, потом круглые скобки
 (параметры), далее фигурные скобки 

	function func (){
 	console.log('I do something')
	alert('FUCK U')} 

-для запуска фунции пишется название с () параметром 

	func ()

-в пареметр можно заносить переменные, например: 
	function func(num) {
 	console.log(num**2)}
  func(5)
-или через переменные:
	
let num=10
	function func(num) {
 	console.log(num**2)}
 
-параметры функций можно делать НЕОБЯЗАТЕЛЬНЫМИ

	function func(num=5) {
 	console.log(num**2)}
     *при вызове func() будет выподится всегда 25


-можно вкладывать функцию в другую функцию 

	function func(num) {
	 return num**2; }

	let res=func(func(2));
	console.log(res);


-также можно делать разные функции

	function square(num) {
	 return num**2;}

	function cube(num) {
	 return num**3;}

  
						return

-для того, что бы передать "Возвратить" полученный результат функции в переменную
 !После того, как выполняется return функция работу ПРЕКРАЩАЕТ

	function funct(num) {		function funct(num) {			
	return num**2}			return num**2
	ras=funct(3)  // 9 		console.log("Не выполнится никогда")}	
	console.log(ras) // 9

*в функции может быть не только один return 

	function func(num){
	 if (num>=0) {
	  return "+++";}
	 else {
	  return "---";}
	 }
	
	console.log(func(3)) // +++


-можно вкладывать функцию в другую функцию 

	function func(num) {
	 return num**2; }

	let res=func(func(2));
	console.log(res);


-также можно делать разные функции

	function square(num) {
	 return num**2;}

	function cube(num) {
	 return num**3;}


- цикл и return 
 * если перенести return внтрь функции, то цикл остановится в 1 итерации
	
	function func() {
	 let sum=0;
	 for (let i=1; i<=5; i++) {
	  sum+=i;
	 } 
	  return sum;
	}
	let res = func();
	console.log(res);



*фунция будет делить число на 2 пока число не станет меньше 10 и выведет количество итераций 
	num=300

	function func(num) { 
	i = 0
	while (num>=10) {
	num=num/2
	i++
	console.log(num)} 
	console.log(i)
	return i}
	func(num) 

*функция принимает массив и выявляет два одинаковых элемента подряд
	arr=[1,2,3,4,5,5,6,7,8]
	function func(arr) {
	for (let i=0; i<arr.length; i++) 
	if (arr[i]===arr[i+1]) {
	return false;
	} return true;}
	func(arr) 

-сокращение if

function fun (a,b) {
if (a>b) {
return true;
} else { return false}}

	function fun (a,b) {
return a>b}		




**функция выбирает рондомную цифру из массива
arr = [1,2,3,4,5]
res = func(arr) 
console.log(res) 
function func(arr) { 
let min=0
let max=arr.length 
let func2 = (min, max) => {
  return Math.floor(Math.random()*(max-min))+min
  }
return (arr[func2(min,max)]) }


					Переменные и функции


-изменение объекта внутри функции приведет к изменению объекта в глобальной видимости
	function func (arr) {
	arr[0] = '!';
	}
	
	let arr = [1,2,3]
	func (arr);
	console.log(arr)

-запись функции в другую переменную 

	function func(){
	console.log('!')}

	let test = func

	
-существуют несколько способов объявления переменной :
  **Разница состоит в том, что Дек будет доступна и перед ее объявлением, а Экс - нет 
  function declaration (Дек)

	function func() {
	console.log('!') 
	}

	func ()

  function expression(Экс)

	let func = function(){
	console.log('!')
	};


-именованные функции:

	let test = function func() {console.log('!')
				func()// функция будет вызывать внутри себя себя же
				test()// как и этоже};
	

 
					Массивы/объекты с анонимными функциями

					
	let arr = [
    function () {console.log('1')},
    function () {console.log('2')},
    function () {console.log('3')}
    ]
    
    arr[0]()

    for (let func of arr) {func()}




	obj = {
    func1: function () {console.log('1')},
    func2: function () {console.log('2')},
    func3: function () {console.log('3')}
    };

    for (let key in obj) {obj[key]()};



					Функция как параметры 




	test(function (){return 1;}, function () {return 2;});
	
	function test (func1, func2) {
		console.log(func1());

		console.log(func2()) } 

DECLARACTION
	function get1(){
	 return 1;}
	function get2(){
	 return 2;}
	
	test(get1, get2) 

	function test (func1, func2) {
		console.log(func1()+func2())}
EXPRESSION

	let get1 = function (){
	 return 1;}
	let get2 = function (){
	 return 2;}
	
	test(get1, get2) 

	function test (func1, func2) {
		console.log(func1()+func2())}


**параметры передаваемых функций 


test (function(num) {
	  return num*num});

function test (func) {
	console.log(func(3));}


-функциональное выражение функция Эксп 
	пример ананимная функция записанная в виде выражения

	+function() {
		console.log('1') 
	} 

или 
	console.log(function (){console.log(1)}

* но нельзя сделать выражением unc Declaraction 

	ERROR:	+finction func (){...}

   синтаксическая ошибка: 
 	function (){}


					Именованные функциональные выражения


-можно использовать имя функции в самой функции (необхдимо привязывать имя функции Func не изменится а 
	test переменная которую можно легко поменять) 

	let test=function func() {
		console.log(1) 
		
		func() - функция будет выодиться бесконечно }





					Передача функций параметрами 


-т.е. вместо параметров использовать функции 

	test(
		function() {return 1;},  - первый параметр
		function() {return 2;}   - второй параметр
	) 


	function test (func1, func2) {
		console.log( func1());
 		console.log(func2 ())
	} 

* Именованные функции параметры 


	function get1() {
		return 1} 

	function get2() {
		return 2} 

	test(get1, get2) 
	
	function test (func1, func2){
		console.log (func1()+func2());  

** функция передавамаемая в параметре

	test (function(num) {
	  return num*num;
		});

	function test (func) {		-> если что то в func лежит function(num) {return num*num;})
		console.log(func(3));   -> и соответственно здесь тоже, а 3 это num в function(num)

*** передача и функции и переменной параметрами

	
	function test (num, function) {
		console.log(func(num));}

	test (2, function(num) {
		return num*num;}):

ПРИМЕР ПРИМЕНЕНИЯ 

		let result = test ([1,2,3], function(num) { 
			return num*num});

		function test(arr, func) {
			for (let i=0; i<arr.length; i++) {
			   arr[i]=func(arr[i])}
			return arr}
			
		console.log(result) 




						ВЛОЖЕННЫЕ функции

-делает функуции доступными только внутри функции 

	function func (num1, num2) {
		function square(num){
			return num*num} 
		return square(num1) + square(num2)} 
	
	console.log(func(2,3))


-параметр внешней и внутренней функции 


	function test(num) {
	 function func(localnum) { 
	   console.log (num)		// 1
	   console.log (localnum) ;}	// 1
	 func(num) ;} 
	test(1) 

*одноименные параметры во вложенных функциях это РАЗНЫЕ ПАРАМЕТРЫ


-функция RETURN функцию

	function func() {
	 return '!'; } 

	let result = func();
	console.log(result())

**можно делать любой уровень вложенности 
	function func() {
	 return function () {
	  return function () ; }}} 

	let result = func();
	console.log(result()()())


-параметр возвращаемой функции 

	
						ФУНКЦИЯ CALLBACK


-функция которая передается параметром в другую функци.


	function each (arr, callback) { 
      let result = [];
      for (let elem of arr) { 
       result.push(callback(elem));
         } 
    return result;
    }


     result = each([1,2,3,4,5], function (elem) {return elem**2})

    console.log(result)  


* именованная CALLBACK функция

	function square (elem) {
	 return elem**3} 


	
	function each (arr, callback) { 
      let result = [];
      for (let elem of arr) { 
       result.push(callback(elem));
         } 
    return result;
    }
	
	let result = each([1,2,3,4,5], square)
	
	console.log(result)


						СТРЕЛОЧНАЯ ФУНКЦИЯ

	
-упрощенный синтаксис обычных функций 
					Эквивалент: 
	let func=(num1,num2) => {			let func1 = function(num1, num2) {
	 let result = num1+num2;			  let result = num1+num2;
	 return result;} 				  return result; } 

Или проще: 
	
	let func= (num1, num2) => num1+ num2;
	
А если 1 параметр: 

	let func= num1 => num1+ num2;

Или мгновенный вызов

 	let func = () => Console.log(Gay)




						Счетчик на замыкании


	function test () {
	 let num=1; 
	 return function (){
	  console.log(num);
	  num++
	  ;}
	 }
	
	let func1 = test ();

	func1()  //1
	func1()  //2

	let func2 = test()
	
	func2()  //1
	func2()  //2


						IIFE

-немедленный вызов функции на месте 


	+function () {}
	 console.log('!');
	}()

-присваивание немедленной функции в переменную 


	let func = function () { console.log("!")} ()
	 console.log (func) // !



	let sum = 1+function () { return 2;}();
	console.log(sum)

-параметры :

	(function (str) {}
	 console.log(str);  /!!! 
	})(!!!)



					Рекурсия и многомерные структуры


-рекурсия многоразовый вызов функции

	let i = 0
	function func () { 
	 console.log(i);
	 i++;
	if (i <= 10) { 
	  func()}
	}

	func()

- для работы с многомерными структурами используют рекурсию
  сумма элементов массива
	function getSum (arr) {
	 let sum = arr.shift()
	 if (arr.lenght !==0) {
	  sum +=getSum(arr);
	  } 
	  return sum;}

	console.log(getSum([1,2,3])
	 

- перебор сложного массива

	function func(arr) {
	 for (let elem of arr) {
	 if (typeof elem == 'object') {
	  func(elem)
	 } else { 
	  console.log(elem); 
	}}}

	func([1,[2,7,8], [3,4,[5,[6,7]]]])
	  
- манипуляции с элементами

	function func(arr) { 
	  for (let i = 0; i< arr.length; i++) {
	   if (type of arr[i]=='object') {
	    arr[i] = func (arr[i]);
	  } else { 
	   arr [i] = 



						метод MAP


-позволяет применить заданную функцию для каждого элемента массива, при этом метод не изменяет массив
  а возвращает измененный. Метод в параметре получает функцию которая применится для каждого элемента
  В функцию можно передавать 3 параметра (элемент, его индекс, сам массив)

	let arr2 = arr.map(function (элемент, индекс, массив) {
	  code 
	  return elem })


	let arr = [1,2,3,4,5]
	
	let res = arr.map(function(elem, index, arr) {
	  return elem*2})
	console.log(res)


-если есть подмассивы


	let arr = [1,2,[4,5,6],3,4,5]
	
	let res = arr.map(function(elem, index, arr) {
	  return elem.map(function(num) {
	    return num*num}
	})
	console.log(res)



						метод forEach

-аналогичен методу map


	let arr = [1,2,3,4,5]

	let sum = 0

	arr.forEach(function(elem, ind){
	  sum+=elem+ind;
	});

	console.log(sum)


						метод filter

-метод позволяет фильтровать элементы подподающие под условия. Метод в параметре получает функцию, которая выполнится для каждого элемента. Метод возвращает массив с элементами которые подпадают под true


	let arr = [1,-2,3,-4,5]

	let res = arr.filter(function(elem) {
	  if (elem>=0) {
	    return true;
	  } else { return false}}) 

	console.log(res) 

-сокращение стрелочной функцией

	let res = arr.filter(elem=> {
	  return  elem>=0;
	 
-а можно вообще (т.к. стрелочная возращает ретерном поумолчанию) 


	let res = arr.filter(elem=>elem>=0);



						метод every

-служит для проверки массива условию. Возвращает true/false (аналогичный метод s ome)

	let arr = [1,2,3,4,5]
	let check = arr.every(elem=>elem>=0);
	console.log(check)




					find, findIndex, findLast, findLastIndex

-find  поиск первого элемента отвечающего условию (findLast - ищет с конца)
	
	let arr = [1,2,3,4,5]
	let res = arr.find(function (currentValue) {
	 return currentValue>=0});

-findIndex поиск индекса первого элементаотвечающего условию (findLastIndex - ищет с конца)
	
	let arr = [1,2,3,4,5]
	let res = arr.findIndex(function (currentValue) {
	  return currentValue>=3});




						reduce


-метод сворачивает массив к одному на значению (к сумме элементов). Первым параметром reduce получает функцию, в эту функцию можно передать 4 параметра (промежуточный результат, элемент, индекс эл., массив)
 промежуточный результат - переменная в которой накапливается сумма и возвращается результат


	let arr = [1,2,3,4,5,6]

	let res = arr.reduce(function(sum, elem) {
	 return sum+elem;} , 0);
	
	console.log(res);


- метод reduceRight работает точно также как и reduce, только справа налево



						spread

-разделяет массив на отдельные значения, превращая массив в набор параметров

	let arr = [1,2,3]
	func (...arr)

	func(...[1,2,3])
	func(1,2,3,...[3,4,5])

-экстремальные значения 

	let arr = [1,2,3]
	let max = Math.max(...arr)

-слияние массивов

	let arr1=[1,2,3]
	let arr2=[1,...arr1,2,3]

-для строк

	console.log(func(...'abcd'))// ['a','b','c','d']

-оператор не применим к числам, необходимо преобразовывать в строки

	let arr = [...String(12345)]

-сумма

	function func(...nums) {
	 let sum=0;
	 for (let num of nums) {
	  sum+=num;} 
	 return sum} 
	
	let result = func(1,2,3);
	console.log(result)

-слияние массивов

	function unite(...arrs){
	 return arrs;
	 }

	let result=unite([1,2,3],[4,5,6],[7,8,9])

	console.log(result) 


						rest

-если в передаваемом массиве больше элементов, чем параметров в функции, то оператор запишет лишние в 
 массив

	function func(a,b,...rest){
	 console.log(a)
	 console.log(b)
	 console.log(rest)}

	func(1,2,3,4)





						concat

-метод слияния 

	function merge(...arrs) {
	 return [].concat(...arrs);}

	let result = merge([1,2,3],[4,5,6],[7,8,9])

	console.log(result)




					ДЕСТРУКТУРИЗАЦИЯ МАССИВА/объекта
-через массив

	let arr=[2025,3,31]
	let [year,month,day]=arr


-через функцию 

	function func() {
	 return [2025,12,31]}

	let [year,month,day]=func()

-для пропуска элемента

	let arr=[2025,3,31]
	let [,mont,day]=arr


-для пропуска элемента

	let arr=[2025,3,31, 23,59,59]
	let [yeat,month,day,...time]=arr

-значние по умолчанию (можно также подставлять функцию)

	let arr=[2025,3]
	let [year,month,day=1]=arr

	console.log(day)//1

-можно объявлять переменные перед

	let arr=[2025,3,31]
	let year
	let month
	let day
	
	[year,month,day]=arr


-объект 

	let obj = {year:2025,
	           month:12,
		   day:31}

	let {year,month,day}=obj


-можно выставлять значение по умолчанию


	let obj = {month:12,
		   day:31}

	let {year=2025,month,day}=obj

-в аналогии с массивом можно объявлять переменные перед деструктуризацией

	let obj = {year:2025,
	           month:12,
		   day:31}

	let year
	let month
	let day

	({year,month,day}=obj)


					Деструктуризация параметров в функции

-позволяет задать как деструктуризир массив в функции

	func ([2025,12,31])
	
	function func ([year,month,day]) {}

*можно добавить объекты

	func ('str1',[2025,12,31],'str2')
	
	function func (param1,[year,month,day],param2) {}	
	


	func ({year:2025,month:12,day:31})
	
	function func ({year,month,day}) {}



									
						DATE

-работа с датами 
 (если передать в скобки дату в формате год, месяц,день,часы, минуты, сек, милисек, то запишется это время)
	new Date()
	
	let date=new Date() // выведется дата и время

	console.log(date.getFullYear())	

	console.log(date.getMonth())	//отсчет месяцев начинается с 0

	console.log(date.getDate())	
	
	console.log(date.getHours())	
	
	console.log(date.getMinutes())	


-форматирование даты

	let date = new Date()
	console.log(date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()// 2022-06-26

*что бы добавить 0 к месяцам

	function addZero(num) {
	 if (num>=0&&num<=9) {
	  return '0'+num;
	 }else{ return num}}
	

	let date = new Date()
	console.log(addZero(date.getFullYear())+'-'+addZero(date.getMonth()+1)+'-'+addZero(date.getDate())

**смена формата даты


	let str = '2025-12-31'
	let arr = str.split('-')
	console.log(arr)

	let res=arr[2]+'/'+arr[1]+'/'+arr[0]

		или

	let res=str.split('-').reverse().join('/')



-получение дня недели 


	let date = new Date();
	let day = date.getDay()
	let days = ['вс','пн','вт','ср','чт','пт','сб'] //необходимо 1е Вс, так как дни начинаются с Вс
	console.log(days[day])


-timestamp - формат, geTime - получить сколько времени прошло с даты


	let date = new Date(2015,11,4,23,59,59)
	console.log(date.getTime()/(1000*60*60))

- азница в датах

	let now = new Date()
	let date = new Date(2015, 4, 25, 12, 59, 59)
	let diff = now-date
	console.log(diff)


-валидация даты 

	let year = 2025
	let month = 0
	let day = 32

	let date = new Date(year,month,day) 
	if (date.getFullYear()==year&&date.getFullYear()==month&&date.getDate()==day){
	 console.log('Correct') 
	}else{ console.log('not Correct');}

-знать дату 

	now = new Date()
	 date = new Date(now.getFullYear()-20,2,8)


-циклическая проверка моментов времени


	let now = new Date()
	let year = now.getFullYear();

	for (let month = 0;
	      month <=11;
		month++){
	  let date = new Date() == 0) {
	    console.log(year+'-'+month+'-1')}}


-строковое сравнение дат (можно использовать любой формат, но сравнение идет слева направо)

	let date1 = '2020-12-01'
	let date2 = '2019-12-01'

	console.log(date1>date2)

-сравнение объектов дат

	let date1 = new date(2020,1,1);

	let date2 = new Date(2019,1,1)

	console.log(date1>date2)//true

-попадание даты в промежуток

	let date = '08-20'
	
	if (date >= '01-01'&&date<='03-08') {
	 console.log('1 промежуток')}

	if (date >= '03-09'&&date<='06-17') {
	 console.log('2 промежуток')}


	if (date >= '06-18'&&date<='12-31') {
	 console.log('3 промежуток')}
	}

Практики:
1) Дата в массив

	let date=new Date()

	function convert (date){
	 let arr = []
	 arr.push(date.getFullYear())
	 arr.push(date.getMonth()+1)
	 arr.push(date.getDate())	
	 arr.push(date.getHours())	
	 arr.push(date.getMinutes())
	 return arr}

	console.log(convert(date))








						D  O  M


-Существует 2 варианта писания кода:

1) в HTML разметке 

	<!DOCTYPE html>
	<html> 
	<head>

	</head>
	<body>
	  Ваши html теги

	<script>

	 JS code

	</script>
	</body>
	</html>

2) Подключение стороннего файла в HTML

	<body>
		HTML tags
	<script src='index.js'>
	</script>
	</body>
	</html>

-DOM элементы - объект соответствующий ХТМЛ тегу с значениями атрибутов, и т.д.

 НАпример: 

	<div id='elem'>text</div>

	elem => id
	text=> textContent

-что бы получить ссылку на эту кнопку используют метод 

		QUERYSELECTOR


	let button = document.querySelector('#button') 
	console.log(button)

('#button') - селектор, бывает сложный селектор, как в CSS





				Привязывание обработчиков (событий)
					addEventListener


- обработчик это отслеживание действий с элементами. Первым параметром addEventListener принимает метод 
события, вторым функцию или действие(функцию можно объявлять по разному)
	
	События:
click - клик 
dbclicl - двойной клик
mouseover - наведение мыши
mouseout - отведение мыши 
change - событие изменения
input-при каждом нажатии клавиатуры новый текст будет выводится в консоль
focus & blur-метод позволяющий менять фокус объектов


-можно привязывать несколько обработчиков к одному событию или много событий и один обработчик
Например:

	let button = document.querySelector('#button') 
	button.addEventListener('click', function(){
						console.log('!!!')})


	let button = document.querySelector('#button') 
	button.addEventListener('click', func)
	function func(){
	  console.log('!!!')})


				Изменение текса элемента


	<div id='elem'>text</div>
	
	let elem = document.querySelector('#elem') 
	console.log(elem.textContent)
	
	elem.textContent='123'

	console.log(elem.textContent)


				
	
				Изменение элементов innerHTML

<p id='elem'><b>text</b></p>

	let elem = document.querySelector('#elem p')

	console.log(elem.innerHTML)

	elem.innerHTML = '<i>!!!</i>'



				Получить текст от пользователя?

	<input id='elem' value='text'>

	let elem = document.querySelector('#elem')

	console.log(elem.value)

	elem.value = 'new text'


				Фокус текстового поля

-если нажать на инпут, то загорится ввод инпута, это и есть фокус ввода

	let elem = document.querySelector('#elem')
	elem.addEventListener('focus', function () {
		console.log(elem.value)
		})


*** Исключения при работе с атрибутами


Вместо class => className

	for => htmlFor



					Цепочки методов

Вместо:

let elem = document.querySelector('#elem')
console.log(elem.value)

=>

console.log(document.querySelector('#elem').value)

document.querySelector('#elem').value = '222'


					Объект This 

-данный объект необходим для указания в событии сосбтвенного объекта

	elem.addEventListener('blur', function(){
					this.value = '!!!'})

-приемущественно что можно использовать один обработчик для многих событий ОЧЕНЬ УДОБНАЯ ВЕЩЬ



					Получение группы элементов
					  document.querySelectorAll()

-получает все теги элемента и записывает в массив
 
 Пример работы: 
	
	<p class='www'>text</p>
	<p class='www'>text</p>
	<p class='www'>text</p>

	let elems = document.querySelectorALL('.www')

	for (let elem of elems) {
		console.log(elem.textContent)}

	for (let elem of elems) {
		elem.textContent = elem.textContent+'!'}


-для того что бы повесить обработчик и событие в эту схему лучше использовать

	let elems = document.querySelectorALL('p')
	for (let elem of elems) {
		elem.addEventListener('click', func}

	function func() { 
	  console.log(this.textContent)}



					  Отвязывание события 
					removeEventListener('click', func)

-отвзывание ранних событий 


	let button = document.querySelector('#button') 
	button.addEventListener('click', func)
		
	    function func(){console.log('!!!')
			this.removeEventListener('click',func)})



					  Отвязывание события в цикле


	<p class='www'>text</p>
	<p class='www'>text</p>
	<p class='www'>text</p>

	let elems = document.querySelectorALL('.www')

	for (let elem of elems) {
		elem.addEventListener('click', func)}

	function func(){
		console.log(this.textContent)
		
		this.removeEventListener('click',func)}

*/
/*
let btn = document.querySelector('button')
let inpts = document.querySelectorAll('input')


btn.addEventListener('click', 
	function() { 
for (let inp of inpts) {
	if (inp.value === 1){
	inp.classList.add('right')}
	else {
	inp.classList.add('wrong')}}})

*/


/*


                                                    Работа с атрибутами
							getAttribute



-получение атрибута, считывание значения атрибута

	<input id="elem" value="abcde">

	let elem = document.querySelector('#elem')
	let value=elem.getAttribute('value')

	console.log(value) //"abcde"
	console.log(elem.getAttribute('value'))

-установить атрибут setAttribute


	<input id="elem" value="abcde">

	let elem = document.querySelector('#elem')
	elem.setAttribute('value',"!!!")

	<input id="elem" value="!!!">


-удаление атрибута removeAttribute


	<input id="elem" value="abcde">

	let elem = document.querySelector('#elem')
	elem.removeAttribute('value')

	<input id="elem">


-проверить наличие атрибута hasAttribute


	<input id="elem" value="abcde">

	let elem = document.querySelector('#elem')
	
	console.log(elem.hasAttribute('value'))//true

	
-пользовательские атрибуты. В ХТМЛ можно добавить свои атрибуты. Такие атрибуты ДОЛЖНЫ начинаться с DATA-
 чтобы обратиться к такому атрибуту используют dataset

	<div id='elem' data-num='100'></div>

	let elem = document.querySelector('#elem')

	elem.dataset.num=123

	console.log(elem.dataset.num)

*Если такой атрибут содержит в названии дефиса, то (camelCase)

	data-my-test 
	
	elem.dataset.myTest


**Если к такому атрибуту образаться через getAttribute, то пишется полное имя
	
	<div id='elem' data-my-test='100'></div>
	
	console.log(elem.getAttribute('data-my-test'))







						ClassList


-свойство содержит псевдомассив CSS классов элемента, а также позволяет добавить и удалять классы, проверять наличие

	<p id = "elem" class="www ggg zzz"></p>

	let elem = document.querySelector('#elem')
	let length = elem.classList.length

	console.log(length) // 3


-что бы вывести по очереди

	<p id = "elem" class="www ggg zzz"></p>
	let elem = document.querySelector('#elem')
	let classNames=elem.classList

	for (let Name of classNames){

	console.log(Name)}

-метод add позволяет добавялть CSS классы


	<p id = "elem" class="www ggg zzz"></p>
	let elem = document.querySelector('#elem')
	
	elem.classList.add('kkk')


-метод remove позволяет удалять CSS классы


	<p id = "elem" class="www ggg zzz"></p>
	let elem = document.querySelector('#elem')
	
	elem.classList.remove('kkk')



-метод toggle позволяет удалять(если есть) и добавлять(если нет) CSS классы


	<p id = "elem" class="www ggg zzz"></p>
	let elem = document.querySelector('#elem')
	
	elem.classList.toggle('kkk')


-метод contains позволяет проверить CSS классы


	<p id = "elem" class="www ggg zzz"></p>
	let elem = document.querySelector('#elem')
	
	Console.log(elem.classList.contains('kkk')) //true false



		
						Стилизация через Style

-позволяет присвоить элементу стиль CSS

	<p id = "elem"> text </p>

	let elem = document.querySelector('#elem')

	elem.style.color='red'
	

*Если style содержит в названии дефиса, то (camelCase)

	elem.style.fontSize='20px'

**Для свойства Float исключение, нужно писать cssFloat

 
	elem.style.cssFloat='right'




						Стилизация через класс!!!



-самая удобная стилизация через присваивание класса или отключение класса

  
	<p>text1</p>
	<p>text2</p>
	<p>text3</p>


	.colored {
	 color: green;}

	let elems = document.querySelectorAll('p')
	 for (elem of elems) {
	  elem.addEventListener ('click, function () {
	    this.classList.add('colored')
	})}

*для чередования вместо add используют toggle

-код для скрытия и отображения элементов


	<button id='btn'> click me </button>

	<div id='elem'></div>

	#elem{
	display:none;
	width:200px;
	height:200px;
	border: 1px solid green;
	}

	#elem.active {
	 display: block;
	  }

	let button = document.querySelector('#btn')
	let elem = document.querySelector('#elem')

	button.addEventListener('click', function(){
	 elem.classList.toggle('active')})




						Нахождение элементов


firstElementChild - содержит первый дочерний элемент(теги расположенные внутри блока)
*если дочерних элементов нет, возращается null

	<div id='parent'>
	<p>1</p>
	<p>2</p>
	</div>

	let parent = document.querySelector('#parent')
	let text = parent.firstElementChild.textContent

	console.log(text) 

lastElemetChild ....

-свойство children - хранит псевдомассив дочерних элементов


	<div id='parent'>
	<p>1</p>
	<p>2</p>
	<p>3</p>
	<p>4</p>
	</div>

	let parent = document.querySelector('#parent')
	let elems = parent.children
 	for (elem of elems) {
	console.log(elem.textContent)})

-parentElement - свойство содержит родительский элемент (обратное child)


	<div id='parent'>
	<p id='elem'>1</p>
	</div>

	let elem = document.querySelector('#elem')
	let id = elem.parentElement.id



-closest - ищет ближайший родительский элемент, подходящий под селектор (сам элемент тоже вкл в поиск) 

	<div class='www' id='paren2'>
	 <div class='ggg' id='paren1'>
	  <p class='zzz' id='child'>
	</p></div></div>


	let elem = document.querySelector('#child')
	let parent = elem.closest('.www')

	console.log(parent.id)



-previousElementSibling - содержит предыдущий элемент, находящийся в родителе (если элем нет, то null)
 *nextElementSibling - содержит следующий

	<p>sibling</p>
	<p id='elem'>elem</p>

	let elem = document.querySelector('#elem')
	let text = elem.previousElementSibling.textContent

	console.log(text) // sibling


-getElemetById - поиск элемента по id (позволяет получить весь элемент)
 * (getElemetByTagName - позволяет получить элементы по имени тэга
    getElemetByClassName

	<p id='elem'>elem</p>

	let elem = document.getElementById('#elem')
	elem.value='!!!'

-поиск элемента внутри родителя

	<div id='parent'>
	 <div class='child'>text</div>
	 <div class='child'>text</div>
	 <div class='child'>text</div>
	</div>

	let parent = document.querySelector('#parent')
	let elems = parent.querySelectorAll('.child')





						 Работа с узлами

-отличе работы узлов от элементов в том, что добавляются комментарии и обычный текст

 firstElementChild  =  irstChild

 lastElemetChild  =  lastChild

 nextElementSibling  =   nextSibling

 previousElementSibling  =  previousSibling

	<div id='elem'><!--comment-->
	 text<span>tag</span>
	</div>

	let elem = document.querySelector('#elem')

	console.log(elem.firstElementChild) // <span>...
	console.log(elem.firstChild) // comment

-перебор узлов циклом

 children = childNodes -содержит в себе все потомки узлы

	console.log(elem.childNodes[0])
	console.log(elem.childNodes[1])
	console.log(elem.childNodes[2])


	for (let node of elem.childNodes){
	 console.log(node);
	}

-все узлы имеют свойство nodeName
 для комментария - comment
 для текстового узла - text
 для тега - верхний регистр "P"

- nodeType - числовое значение. Для коммента =8, для текстового узла = 3, для элемента = 1
  для всех узлов работает textContent, для текстовых узлов и комментариев есть data
  innerHTML также применяется для элементов





						Работа с тегами
textarea:

-многострочное поле ввода
 *текст который будет стоять в теге по умолчанию (между тегами) нужно получать с value

	<textarea id='elem'> text </textarea>
	let elem = document.querySelector('#elem')
	console.log(elem.value) // text


Атрибут disabled:

-атрибут используется для блокировки элемента

	<input id='elem' disabled>
	let elem = document.querySelector('#elem')
	console.log(elem.disabled)

	elem.disabled = false


Чекбоксы checkbox: 

-галочка которая находится в 2 состояниях 
*что бы чекбокс был отмечан по умолчанию добавляют атрибут checked

	<input type="checkbox" checked id="elem">
	
	let elem = document.querySelector('#elem')
	console.log(elem.checked) // true

	elem.checked = false



Чередование атрибутов событий без значений

 	<input id="elem" disabled> 
	input id="button" type="submit">
	let elem = document.querySelector('#elem')
	let button = document.querySelector('#button')

	button.addEventListener('click', function (){
	 if (elem.disabled){
	  elem.disabled = false;
	} else {
	  elem.disabled = true; })

либо 

	button.addEventListener('click', function (){
	  elem.disabled = !elem.disabled})


Радиокнопки radio
*что бы радиокнопки были группой необходимо указывать одинаковый name
**что бы отличать кнопки добавляют value
**что бы была отмечана по умолчанию checked


	<input type="radio" name="elem" value="3" checked>
	<input type="radio" name="elem" value="3">
	<input type="radio" name="elem" value="3">
	
	<input type="submit" id="button">


	let radios = document.querySelectorAll('input[type="radio"]')
	let button = document.querySelector('#button')

	button.addEventListener('click', function (){

	  for (let radio of radios){
	   if (radio.checked){
	     console.log(radio.value)}}})


Событие change
-событие изменения текста input


	<input id="elem" value="text">

	let elem = document.querySelector('#elem')

	elem.addEventListener('change', function (){
	 console.log(this.value)})



Сoбытие input
-при каждом нажатии клавиатуры новый текст будет выводится в консоль

	<input id="elem">

	let elem = document.querySelector('#elem')	


	elem.addEventListener('input', function (){
	 console.log(this.value)})



Метод focus & blur
-метод позволяющий менять фокус объектов

	<input id="elem" value="text">
	<input type="submit" id="button">

	let elem = document.querySelector('#elem')		
	let button = document.querySelector('#button')



	button.addEventListener('click', function (){
	  elem.focus()	})



Работа с Select (выпадающие списки)
*как правило дают значение value, но можно и без, тогда будет value=текст селекта

  Получение пункта:

	<select id="select">
	<option value='1'>one</option>
	<option selected value='2'>two</option>
	<option value='3'>three</option>
	</select>

	let select = document.querySelector("#select')
	select.addEventListener('change', function (){
	  console.log(this.value)})

  Изменение пункта:

	<select id="select">
	<option value='1'>one</option>
	<option selected value='2'>two</option>
	<option value='3'>three</option>
	</select>

	<input type="submit" id="button">
	let select = document.querySelector("#select')
	let button = document.querySelector('#button')

	button.addEventListener('click', function (){
	  select.value='one'})

  Номер выбранного пункта selectedIndex:

	<select id="select">
	<option value='1'>one</option>
	<option selected value='2'>two</option>
	<option value='3'>three</option>
	</select>

	let select = document.querySelector("#select')
	console.log(select.selectedIndex) // 1 (начало с 0)

	select.selectedIndex=2//3

  Что бы получить селекты:

	let options = document.querySelectorAll("#select option')
		//	
	let select = document.querySelector("#select')
	let options = document.querySelectorAll("option')


   Массив пунктов

	let select = document.querySelector("#select')
	  for (let option of select){
	     console.log(option)}

   Работа с селектом

	let select = document.querySelector("#select')
	let option = select[0]
	console.log(option.text)
	console.log(option.value)
	console.log(option.selected)//true

	let option = select[2]
	option.selected=true

	console.log(select[select.selectedIndex])



						Работа с Event


-данный объект содержит информацию о произошедшем событии. (если по элементу был клик, координаты клика, была ли
  нажата клавиша, или нажата в момент клика
  
  Чтобы получить Event

	<button id="elem">text</button>

	let elem = document.querySelector('#elem')
	elem.addEventListener('click', function (event){
	  console.log(event)  // увидем объект с Евентом
	  })

client - координаты относительно ОКНА браузера, а не документ
event.clientX-координаты мыши по оси Х
event.clientY-координаты мыши по оси Y

page - координаты относительно всего документа с учетом скрола
event.pageX-координаты мыши по оси Х
event.pageY-координаты мыши по оси Y


  Отображение перемещения мыши

	<div id='elem'>0:0</div>

	elem.addEventListener('mousemove', function (event){
	 elem.innerHTML=event.pageX+':'+event.pageY})

event.type - тип события (клик, наведение и т.д.)

event.target - позволяет получить элекмент в котором произошло событие
 *необходим для обозначения конкрентого элемента
	
	<style>
	ul {
	padding;30px;
	border:1px solid red
	}

	li{
	list-style-type: none;
	margin-bottom:20px;
	border: 1px dashed black;
	}
	</style>

	<ul id='elem'>
	  <li>text</li>
	  <li>text</li>
	  <li>text</li>
	  <li>text</li>
	  <li>text</li>
	</ul>

	let elem = document.querySelector('#elem')
	let li = elem.querySelector('li')
	

	elem.addEventListener('click', function (event){
		
	  if (event.target.tagName=="UL") {
	  console.log('gay')
	} if (event.target.tagName=="LI") {
	console.log('notgay')
	li.textContent='ha-ha ur ga'}}
		)



event.code - свойство, позволяющее узнать код нажатой клавиши 

	<input id="elem">

	let elem = document.querySelector('#elem')
	
	elem.addEventListener('keydown', function (event){
	 console.log(event.code)})


event.key - позволяет узнать значение нажатой клавиши (видны русские буквы=ЗНАЧЕНИЕ)

	let elem = document.querySelector('#elem')
	
	elem.addEventListener('keydown', function (event){
	 console.log(event.key)})


отслеживание клавиш модификаторов - (контрол, альт, шифт и т.д.)

	<button id="elem">text</button>

	let elem = document.querySelector('#elem')
	elem.addEventListener('click', function (event){
	 if(event.altKey) {
	   console.log('Alt')}
	if(event.shiftKey) {
	   console.log('shift')}
	})

				

					Отмена действия по умолчанию

-иногда требуется отменить действие тега (отменить переход по ссылке)
 метод preventDefault()

	<a href="/" id="elem">link</a>

	let elem = document.querySelector("#elem")
	elem.addEventListener('click', function (event){
	 event.preventDefault();
	  console.log('You cant go next')
	})

				

					Всплытие событий

-если дан ДИВ и внутри ДИВа еще один, то если повесить на каждый див отдельное событие и запустить внутренний,
  то сработают все события
	
Получение целевого элемента:

	<div> <p></p> </div>

	<style>
	div {
	padding: 30px;
	border:1px solid red
	}

	p{
	width: 200px
	height: 200px
	border:1px solid green
	}
	</style>
	
	let div = document.querySelector("div")

	div.addEventListener('click', function(event){
	  if (event.target.tagName=="DIV") {
	  console.log('gay')
	} if (event.target.tagName=="P") {
	console.log('notgay')
	p.textContent='ha-ha ur gay'}})

(вместо tagName=matches('div'))

Прекращение всплытия события

-можно прекратить через любое, через которое проплывает событие с методом stopPropagation

	elem1.addEventListener('click', function(){
	 console.log('green')
	})

	elem2.addEventListener('click', function(event){
	 console.log('red')
	event.stopPropagation()
	})

	elem3.addEventListener('click', function(){
	 console.log('blue')
	})


НЮАНСЫ:

*если имеется второе событие повешенное, то с stopPropagation оно все равно сработает

	elem1.addEventListener('click', function(){
	 console.log('green')
	})

	elem2.addEventListener('click', function(event){
	 console.log('red')
	event.stopPropagation()
	})

	elem2.addEventListener('click', function(){ // сработает все равно
	 console.log('red')
	})

	elem3.addEventListener('click', function(){
	 console.log('blue')
	})

**но если использовать stopImmediatePropagation то такого не будет)
Реализация кода

	<div id="parent">
	 <button>click me</button>
	  <div id="block"> text</div>
	</div>

	<style>
	#block:not(.active){
	  display:none;
	}
	</style>
	let parent = document.querySelector("#parent")
	let button = document.querySelector("button")
	let block = document.querySelector("#block")

	button.addEventListener('click', function(event){
	 block.classList.add('active')
	 event.stopImmediatePropagation()})


	parent.addEventListener('click', function(){
	 block.classList.remove('active')
	 
	})



						Погружение событий 

-сначала событие погружается вниз (без реализации), потом всплывает (реализуется), но можно прекратить всплытие
 на стадии погружения 3м параметром addEventListener =true/false

	elem1.addEventListener('click', function(){
	 console.log('green')
	}, true)

	elem2.addEventListener('click', function(){
	 console.log('red')
	}, false)

	elem2.addEventListener('click', function(){ // сработает все равно
	 console.log('red')
	},true)

	elem3.addEventListener('click', function(){
	 console.log('blue')
	}, false)



						Навешивание обработчиков на
							новые элементы

	<ul>
	  <li>text</li>
	  <li>text</li>
	  <li>text</li>
	  <li>text</li>
	  <li>text</li>
	</ul>

	<button>add</button>

	let button = document.querySelector('button')
	let list = document.querySelector('ul')
	let items = list.querySelectorAll('li')
	
	for (let item of items) {
	 item.addEventListener("click", handler)}

	button.addEventListener('click', function(){
	 let item = document.createElement('li');
	 item.textContent = 'item'
	 item.addEventListener("click", handler)
	 list.appendChild(item);})
	
	function handler(){
	  this.textContent=this.textContent+'1'}
	 



						Делегирование событий 

-более удачный способ исполнения предыдущей задачи

	list.addEventListener('click', function (event) {
	 event.target.textContent=event.target.textContent+'!';})
	
Универсальное делегирование событий:

	<ul>
	  <li>text<i>italic</i>item</li>
	  <li>text<i>italic</i>item<</li>
	  <li>text<i>italic</i>item<</li>
	  <li>text<i>italic</i>item<</li>
	  <li>text<i>italic</i>item<</li>
	</ul>

	list.addEventListener('click', function(event) {
		let li = event.target.closest('li')

	if (li) {
	  li.textContent=li.textContent+'!'}})


			

						Основы работы с контекстом
							this

-this универсальное решение указывающее на действующий элемент

	<imput id="elem1" value='text1'>
	<imput id="elem2" value='text2'>

	let elem1 = document.querySelector('#elem1')
	elem1.addEventListener('click, func)
	let elem2 = document.querySelector('#elem2')
	elem1.addEventListener('click, func)
	
	function func (){
	 console.log(this.value)}
	
-если this не привязана контекстом то в строгом режиме будет выдавать Undefind, а в простом window
*ПОТЕРЯ КОНТЕКСТА (во подфункциях this теряется)

	'use strict'
	<input id='elem' value='text'>


	let elem = document.querySelector('#elem')
	elem.addEventListener('click, parent)

	function parent(){
	 console.log(this)  //выведет ссылку на инпут
	  function child(){
	   console.log(this)  //выведет undefind
	 }
	child();
	}

  
РЕШЕНИЯ ПРОБЛЕМЫ С КОНТЕКСТОМ:
1) через переменную

	let elem = document.querySelector('#elem')
	elem.addEventListener('click, parent)

	function parent(){
	 console.log(this)  
	 let self=this;
	  function child(){
	   console.log(self.value)  
	 }
	child();
	}


2)Через параметр

	let elem = document.querySelector('#elem')
	elem.addEventListener('click, parent)

	function parent(){
	child(this)  /
	  function child(param){
	   console.log(param.value)  /
	 }
	
	}

3)Через стрелочную функцию

	let elem = document.querySelector('#elem')
	elem.addEventListener('click, parent)

	function parent(){
	 console.log(this)  
	  let child = ()=> {console.log(this.value)  
	 }
	child();
	}


4)ЧЕРЕЗ МЕТОДЫ
call-позволяют принудительно указать в каком контексте вызывается функция
  (принудительно сказать чему равен this)


	'use strict'

	<input id='elem' value='text'>

	let elem = document.querySelector('#elem')
							здесь должен быть addEventListener, но не нужен
	function func(){
	 console.log(this.value) 
	} 

	func.call(elem)   call приаязывает elem в параметр и можно передавать this


**-можно передавать с параметрами


	function func(param1, param2){
	 console.log(this.value+param1+param2) 
	} 

	func.call(elem, param1, param2)


2)apply-позволяет вызывать функцию с заданным контекстомю 
Первым параметро указывают контекст функции, а вторым массив параметров функции


	<input id="elem" value="text">

	let elem = document.querySelector('#elem')

	function func(param1, param2, param3){
	  console.log(this.value+param1+param2+param3)}

	func.apply(elem,[param1,param2,param3])


3)bind- результатом возвращает новую функцию, внтури которой будут this
 Первый параметр= контекст, а последующие = параметры функции


	<input id="elem" value="text">

	let elem = document.querySelector('#elem')

	function func(param1, param2){
	  console.log(this.value+param1+param2)}

        let newFunc = func.bind(elem)//сделаем новую функцию, которая будет копией func, но this в ней будет равен elem
	newFunc('1','2')
	
	let func = func.bind(elem)//или перезапишем








						Функция setInterval



-таймер (работа функции через заданный промежуток времени). 
Первым параметром функция принимает - исходный код функции, а вторым - интервал (в милисекундах 1000мс=1с)

	setInterval(timer, 2000)

	function timer(){
	 console.log('!')
	}
	
-реализация счетчика

	let i = 0

	setInterval(timer, 2000)

	function timer(){
	i++ 
	console.log(i)
	}
	
-остановка таймера clearInterval (принимает номер таймера который нужно остановить)


	let timerID = setInterval (function()
	 {console.log(i++)
	  if (i>=10) {
	   clearInterval(timerID)
	  }
	 }
	1000
	)

	alert(timerID)

**!** при создании счетчика через кнопку для избежания много кратного нажатия, используют
	this.removeEventListener('click', func)

Счетчик времени:

	let start = document.querySelector('#start')
	let stop = document.querySelector('#stop')

	let timerID

	start.addEventListener('click', function(){
	
	timerID = setInterval(function()
	 {
	  let date = new Date;
	   console.log(date.getMinutes()+' '+date.getSeconds())
	clearInterval(timerID)
	},1000) 
	});
	


	stop.addEventListener('click', function(){
	 clearInterval(timerID)
	})

Усовершенств счетчик



						Задержка setTimeout

-аналогичен setInterval, только задержка

	setTimeout(timer, 3000)

	function timer(){
	 console.log('!')
	}
	



				  	Создание и вставка элементов 

-createElement (параметром передается имя тега, которое вставляем) 
**для размещения на странице используется: appendChild

	<div id="parent">
	<p>1</p>
	<p>2</p>
	<p>3</p>		
	</div>

	let parent = document.querySelector('#parent")
	let p = document.createElement('p')
	p.textContent='!'

	parent.appendChild(p)

				   Привязывание событий созданным элементам


	<div id="parent">
	<p>1</p>
	<p>2</p>
	<p>3</p>		
	</div>

	let parent = document.querySelector('#parent")
	let p = document.createElement('p')
	p.textContent='!'

	p.addEventListener('click', function(){
	 console.log(this.textContent)
	})
	
	parent.appendChild(p)


					Создание элементов в цикле

	<div id="parent"> </div>


	let parent = document.querySelector('#parent")

	for (let i=1; i<=9; i++){
	 let p = document.createElement('p')

	p.textContent = '!';
	
	parent.appendChild(p)
	}

				Привязывание событий созданным элементам
						в цикле




	<div id="parent"> </div>


	let parent = document.querySelector('#parent")

	for (let i=1; i<=9; i++){
	 let p = document.createElement('p')

	p.textContent = '!';
	
	p.addEventListener('click', function(){
	 console.log(this.textContent)
	})

	parent.appendChild(p)
	}



					Удаление элементов 

-для удаления используется метод remove

	<p>1</p>
	<p>2</p>
	<p>3</p>
	<p>4</p>
	<p>5</p>


	let elems = document.querySelectorAll('p')
	
	for (let elem of elems){
	 elem.addEventListener('click', function () {
	  elem.remove()});
	}


					Вставка элементов в начало и конец


-для вставки в начало используется метод append и обратный preend


	<div id="parent">
	<p>1</p>
	<p>2</p>
	<p>3</p>		
	</div>

	let parent = document.querySelector('#parent')
	let p = document.createElement('p')
	p.textContent = '!'

	parent.append(p)


-чтобы вставить элемент перед другим insertBefore
(метод применяется к родителю перед которым произойдет вставка)

	<div id = "parent">
	 <p>elem1</p>
	<p id="before">elem2</p>
	<p>elem3</p>
	</div>

	let parent = document.querySelector('#parent')
	let before = document.querySelector('#before')
	let p = document.createElement('p')
	p.textContent = '!'

	parent.insertBefore(p,before)

**можно вставить с поиском firstElementChild

		parent.insertBefore(p, parent.firstElementChild)


-для смежной вставки (в любое место) элементов используется insertAdjastmentElement
  чаще всего используется после создания элемента с помощью createElement. 
  Код вставляется относительно ОПОРНОГО элемента (Можно сделать вставку перед опорным элементом, используя
   beforeBegin
   afterEnd -после опорного 
   afterBegin
   beforeEnd

beforeBegin:
	
	<div id='target'>
	 <p>elem</p>
	</div>

	let p = document.createElement('p')
	p.textContent='!'

	let target = document.querySelector('#target')
	target.insertAdjustmentElement('beforeBegin, p)

	//<p>!</p>
	<div id='target'>
	 <p>elem</p>
	</div>

afterEnd:

	<div id='target'>
	 <p>elem</p>
	</div>

	let p = document.createElement('p')
	p.textContent='!'

	let target = document.querySelector('#target')
	target.insertAdjustmentElement('afterEnd, p)

	//
	<div id='target'>
	 <p>elem</p>
	</div>
	<p>!</p>


afterBegin



	<div id='target'>
	 <p>elem</p>
	</div>

	let p = document.createElement('p')
	p.textContent='!'

	let target = document.querySelector('#target')
	target.insertAdjustmentElement('afterBegin, p)

	//
	<div id='target'>
	<p>!</p>
	 <p>elem</p>
	</div>
	
beforeEnd

	<div id='target'>
	 <p>elem</p>
	</div>

	let p = document.createElement('p')
	p.textContent='!'

	let target = document.querySelector('#target')
	target.insertAdjustmentElement('afterBegin, p)

	//
	<div id='target'>
	 <p>elem</p>
	<p>!</p>
	</div>




					Смежная вставка тегов
					insertAdjastmentHTML

-позволяет вставит строку кода в любое место
 (все по аналогии с insertAdjastmentElement)


beforeBegin:
	
	<div id='target'>
	 <p>elem</p>
	</div>

	let p = document.createElement('p')
	p.textContent='!'

	let target = document.querySelector('#target')
	target.insertAdjustmentElement('beforeBegin, p)

	//<p>!</p>
	<div id='target'>
	 <p>elem</p>
	</div>




					Клонирование элементов

-для клонирования используют cloneNode, в который передается true/false
 если передан true, то элемент клонируется полностью (вместе с атрибутами и дочерними элементами)
 если передан false, то только сам элемент


	<div id='parent'>
	 <div class='elem'>
	  <p>child1</p>
	  <p>child2</p>
	 </div>
	</div>

	let parent=document.querySelector('#parent')
	let elem=parent.querySelector('.elem')
	let clone = elem.cloneNode(true)
	parent.appendChild(clone)

	//
	<div id='parent'>
	 <div class='elem'>
	  <p>child1</p>
	  <p>child2</p>
	 </div>
 	<div class='elem'>
	  <p>child1</p>
	  <p>child2</p>
	 </div>
	</div>



					Проверка элементов


-метод matches - позволяет проверить удовлетв. элемент указанному селектору

	<p id="elem' class='www'></p>

	let elem=document.querySelector('#elem')
	console.log(elem.matches('p.www'))
	//true

-метод contains - позволяет проверить содержит ли один параметр в себе другой


	<div id='parent'>
	 <div class='child'>
	 </div>
	</div>

	let parent=document.querySelector('#parent')
	let child=document.querySelector('#child')

	let contains = parent.contains(child)
	console.log(contains)

			

					Создание элемента из массива

	
	let arr = [1,2,3,4,5]
	<div id='#parent'></div>

	let parent=document.querySelector('#parent')
	
	for (let elem of arr) {
	let p = document.createElement('p')
	 p.textContent=elem
	p.addEventListener('click',function () {
	 this.textContent=elem+'1'}
	parent.appendChild(p)}




					Создание HTML таблиц 


	<table id="table'></table>
	let k = 1
	let table = document.querySelector('#table)
	for (let i = 0; i<3; i++) {
	 let tr = document.createElement('tr')
	for (let i = 0; i<3; i++) {
	 let td=document.createElement('td')
	  td.textContent = k;
 	  tr.appendChild(td)
	   k++
	 }
	table.appendChild(tr)
	}


<table id="table'></table>
 <tr> 
 <td>1</td>
 <td>2</td>
 <td>3</td>
 </tr>
 <tr> 
 <td>4</td>
 <td>5</td>
 <td>6</td>
 </tr>
 <tr> 
 <td>7</td>
 <td>8</td>
 <td>9</td>
 </tr>
</table>



					Создание HTML таблиц из массива



	let arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]

	let table = document.querySelector('#table)

	for (let subArr of Arr) {
	 let tr = document.createElement('tr')

	 for (elem of subArr) {
	    let td=document.createElement('td')
	    td.textContent = elem;
 	    tr.appendChild(td)
	    
	 }
	table.appendChild(tr)
	}


<table id="table'></table>
 <tr> 
 <td>1</td>
 <td>2</td>
 <td>3</td>
 <td>4</td>
 </tr>
 <tr> 
 <td>5</td>
 <td>6</td>
 <td>7</td>
 <td>8</td>
 </tr>
 <tr> 
 <td>9</td>
 <td>10</td>
 <td>11</td>
 <td>12</td>
 </tr>
</table>





					Создание HTML таблиц из массива объектов

	let users = [
	 {
	  name:'name1',
	  surname: 'surname1',
	  patronymic: '	patronymic1'
	 },
	 {
	  name:'name2',
	  surname: 'surname2',
	  patronymic: '	patronymic2'
	 },
	 {
	  name:'name3',
	  surname: 'surname3',
	  patronymic: '	patronymic3'
	 },
	]


<table id='table'></table>

	

	let table = document.querySelector('#table)

	for (let user of users) {
	
	 let tr = document.createElement('tr')
	 let td1=document.createElement('td')
	 td1.textContent = user.name
	 tr.appendChild(td1);

	 let td2=document.createElement('td')
	 td1.textContent = user.surname
	 tr.appendChild(td2);

	 let td3=document.createElement('td')
	 td1.textContent = user.patronymic
	 tr.appendChild(td3);

	 table.appendChild(tr)
	}


				

						Добавление рядов и колонок


Добавление рядов:

	let table = document.querySelector('#table')
	
	let tr = document.createElement('tr')

	for (let i = 1; i<3; i++)
	 let td = document.createElement('td')
	 tr.appendChild(td)}

	table.appendChild(tr)

Добавление колонок:

	let trs = document.querySelector('#table tr');

	for (let tr of trs){
	 let td = document.createElement('td')
	 tr.appendChild(td) 




					Самоудаление новых элементов 


<div id='parent'></div>



let ul = document.querySelector('#parent')

let button = document.querySelector('#button')
button.addEventListener('click' function () {
	let li = document.createElement('li')



let parent = document.querySelector('#parent')
for (let i = 1; i<=9; i++){
 let p = document.createElement('p')
 p.textContent = i;
 p.addEventListener('click', function() {
  this.remove()
  })
 parent.appendChild(p)
 }



По клику на кнопку будет добавляться Ли, а по клику на ли он будет удаляться сам

	<ul id='parent'>
	<li>1</li>
	<li>2</li>
	<li>3</li>
	</ul>
	<input type='submit' id='button'>
	
	let input = document.querySelector('#button')

	let ul = document.querySelector('#parent')
	let i = 4
	button.addEventListener('click', function () {
	 let li = document.createElement('li')
	 li.textContent = i;
	 i++
	 ul.appendChild(li)
	 li.addEventListener('click', function () {
	   this.remove()})
	    })

	let li = ul.querySelectorAll('li')

	for (elem of li) {
	  elem.addEventListener('click', function () {
	   this.remove()
	  })}


Hедактированиe отдельного элемента


	<div id ="parent">
	 <p id="elem">text</p>
	 <input id="input">
	</div>

	let elem = document.querySelector('#parent')
	elem.addEventListener('click', function () 
	  let input = document.createElement('input')
	  input.value=elem.textContent

	  input.addEventListener('blur', function func (){
	 
	  elem.textContent=this.value
	  this.remove()
	  })

	 elem.parentElement.appendChild(input)


Прячем текст при редактировании элемента


	<div id ="parent">
	 <p id="elem">text</p>
	</div>

	let elem = document.querySelector('#elem')
	elem.addEventListener('click', function () {
	  let input = document.createElement('input')
	  input.value=elem.textContent
	  elem.textContent=""
	  elem.appendChild(input)
	  input.ddEventListener('blur', function () 
	  elem.textContent=this.value
	elem.addEventListener('click', func)

	})

	elem.removeEventListener('click', func)
	})


Стилизация элементов (скрытие)

	<p id="elem'>text</p>
	<input type="submit" id="show" value="show'>
	<input type="submit" id="hide" value="hide'>

	.hidden {
	 display: none}

	let elem = document.querySelector('#elem')
	let show = document.querySelector('#show')
	let hide = document.querySelector('#hide')

	show.addEventListener('click', function () {
	  elem.classList.add('hidden')})

	hide.addEventListener('click', function () {
	  elem.classList.remove('hidden')})


Много элементов с кнопками показа

	<p>1</p> <button>toggle</button>
	<p>2</p> <button>toggle</button>
	<p>3</p> <button>toggle</button>

	let buttons = document.querySelectorAll('#button')
	for (let button of buttons) {
	 button.addEventListener('click', function () {
	  this.previosElementSibling.classList.toggle('hidden')
	  })
	 }

///

	let buttons = document.querySelectorAll('#button')
	let elems = document.querySelectorAll('p')

	for (let i=0; i<buttons.length; i++) { 
	 
	 button[i].addEventListener('click', function () {
	  elems[i].classList.toggle('hidden')
	})
	}


Автоматическое изменение стилей

	.color1 {
	 background: red}

	.color2 {
	 background: green}

	.color3 {
	 background: blue}


	let colors = [color1, color2, color3]

	let tds = document.querySelectorAll('#table td')

	let i = 0
	
	for (let td of tds) {
	 td.addEventListener('click', function(){ 
	 this.classList.add(colors[i])
	 i++ 
	 if (i==colors.length){
	 i=0
	  }
	 })
	 }


					Bcпомогательные функции для DOM

функция первым параметром принимает ИД, а вторым текст элемента и будет устанавливать элементам новый текст


	<p id='elem1'></p>
	<p id='elem2'></p>

	function setText (id, text) {
	 let elem = document.getElementById(id);
	 elem.textContent = text;
	}

	setText('elem1', 'text1')
	setText('elem2', 'text2')




				Bcпомогательные функции для с группой DOM элементов


	<p class='elem'></p>
	<p class='elem'></p>
	<p class='elem'></p>

	function setText (selector, text) { 
	 let elems = document.querySelectorAll(selector)

	for (let elem of elems) {
	  elem.textContent = text;
	 }
	}

	setText('.elem', 'text')


				Передача колбэка для работы с ДОМ

	
	<p class='elem'>1</p>
	<p class='elem'>2</p>
	<p class='elem'>3</p>
	<p class='elem'>4</p>
	<p class='elem'>5</p>

	function forEach (selector, func) {
	 let elems = document.querySelectorAll(selector)

	 for (let elem of elems) {
	  func(elem);
	 }
	}


	forEach ('.elem', function (elem){ 
	 elem.textContent=elem.textContent**2
	})
	

			

			Передача порядкового номера в колбэк для работы с ДОМ


	function forEach (selector, func) {
	 let elems = document.querySelectorAll(selector)

	 for (let i = 0; i< elems.length; i++) {
	  func(elem[i], i);
	 }
	}

	forEach ('.elem', function (elem), index){ 
	 elem.textContent=elem.textContent+index
	})
	



				Передача DOM элемента параметром функции


	<p id='elem1'></p>
	<p id='elem2'></p>


	function setText (selector, text) { 
	 elem.textContent=text; 
	 }

	let elem1 = document.getElementById('elem1')
	setText(elem1, 'text1')
	let elem2 = document.getElementById('elem2')
	setText(elem2, 'text2')




			Передача группы DOM элемента параметрами функции


	<p class='elem'></p>
	<p class='elem'></p>
	<p class='elem'></p>
	<p class='elem'></p>
	<p class='elem'></p>

	function setText (elems, text) {
	 for (let elem of elems){
	  elem.textContent = text;
	 }
	}

	let elems = document.querySelectorAll('.elem');
	setText(elems, 'text');




					Функция для создания ХТМЛ таблиц

-функция будет создавать таблицу заданного размера

	<div id='elem'></div>

	td {
	width:50px;
	height:50px;
	border:1px solid black;
	}

	let div = document.querySelector('#elem');

	
	function createTable(rows, cols, parent){
	  let table = document.createElement('table')
	  
	   for(i=0; i<=rows; i++) {
	    let tr=document.createElement('tr')
	    table.appendChild(tr)
	      for(k=0; k<=cols; k++) {
	  	let td = document.createElement('td')
	          tr.appendChild(td)}}
	   parent.appendChild(table)}

	let table = createTable(2,2,div)


 
				Функция для создания ХТМЛ таблиц из массива

	

	let div = document.querySelector('#elem');
	
	let arr = [[1,2,3],[4,5,6],[7,8,9]]

	let table = createTablebyArr(arr)
	
	function createTablebyArr(arr){
	  let table = document.createElement('table')
	  
	   for(subArr of arr) {
	    let tr=document.createElement('tr')
	    table.appendChild(tr)
	      for(elems of SubArr) {
	  	let td = document.createElement('td')
	          tr.appendChild(td)}}}

	  div.appendChild(table)





						  МОДУЛИ
				  	КОНФЛИКТЫ ИНТЕРЕСЫ  ПЕРЕМЕННЫХ 


Пусть есть ХТМЛ в котором используется скрипт с переменной str

	<HTML>
	 <head>
	  <script> 
	 	let str = 'script text';
		alert(str)
	  </script>
	  <script src="js.js"></script>
	 </head>
	   <body>
	     ...
	   </body> 
        </html>

и, есть подключаемый файл, в котором также используется 

		...
	let str = 'another text'


!!!И таким образом произойдет конфликт, при котором будет использована переменная которая написана ниже 






		 			Модули через замыкания

для решения проблемы используют модули
это позволяется сделать так, что переменные  и функции этой конструкции были видны только внутри неё и не мешали снаружи

	;(function() {
        	//тут код модуля
	})()



Практическое применние:


	<div id='div1'>10</div>
	<div id='div2'>10</div>


	;(function(){
	 let elem = document.querySelector('#div1')
	 
 	 function func(num){
	  return num*num}
	
	elem.addEventListener('click', function(){ 
	 this.textContent = func(elem.textContent);
	});
	})()
	
	;(function(){
	 let elem = document.querySelector('#div2')
	 
 	 function func(num){
	  return num*num*num}
	
	elem.addEventListener('click', function(){ 
	 this.textContent = func(elem.textContent);
	});
	})()




				Передача параметров в модуль через замыкания


практика не зашивать переменные в модули а передавать их параметрами

	;(function(arg1, arg2)
	  {//параметры попадают в переменны
	  })(1,2)



	<div id='div'>3</div>
	<button id='btn'>click me</button>

	;(function(selector1, selector2){
	 let div = document.querySelector(selector1)	
	 let btn = document.querySelector(selector2)

	function func(num) {
	 return num*num;
	}
	btn.addEventListener('click', function(){
	div.textContent = func(div.textContent);
	});
	})('#div', '#btn')



				Передача родительского элемента в модуль через
	 					замыкание

	<div id='parent'>
	<div id='div'>1</div>
	<div id='div'>2</div>
	<div id='div'>3</div>
	<div id='res'></div>
	<button id='btn'>click me</button>
	</div>

	;(function(root){

	 let parent = document.querySelector(root)
	 let div1 = parent.querySelector('#div1')	
	 let div2 = parent.querySelector('#div2')
	 let div3 = parent.querySelector('#div3')
	 let res = parent.querySelector('#res')
	 let btn = document.querySelector('#btn')

	function func(num) {
	 return num*num;
	}
	btn.addEventListener('click', function(){
	btn.textContent = func(div.textContent);

	let num1 = Number(div1.textContent);
	let num2 = Number(div2.textContent);
	let num3 = Number(div3.textContent);

	res.textContent=num1+num2+num3;
	});
	})('#div', '#btn')



				Передача настроек в модуль через объект



	let config = {
	 root: '#parent',
	 type: 'p',
	 amount: 5}

	;(function ({root, type, amount}){

	 let parent = document.querySelector(root)

	for (let i = 1; i<=amount; i++){
	 let elem = document.createElement(type)
	 parent.append(elem);
	 }
	})(config)

			

					Параметры по умолчанию


-если настройка будет не указана, то она примет вид по умолчанию

	let config = {
	 root: '#parent',
	 }


	;(function ({root, type='p', amount=5}){
	 let parent = document.querySelector(root)
	 for (let i = 1; i<=amount; i++){
	 let elem = document.createElement(type)
	 parent.append(elem);
	 }
	 })(config)		



					Экспорт переменных и функций в модулях 
						  через замыкания


window-функция встроенная в браузер позволяющая отобразить из скрипта переменные и функции

	;(function (){
	  let str="something'
	  function func(){
	  alert('function od module')
	 }
	 window.func=func
	 })()
	window.func()  // func()



					Экспорт объекта в модулях через замыкания


	;(function(){

	 function func1(){
	  alert('module function')}
	 
	 function func2(){
	  alert('module function')}

	 function func3(){
	  alert('module function')}

	window.module = {func1,func2,func3}
	 })()


//или записывать функции сразу в модуль


	;(function(){
	  let module = {};

	 module.func1(){
	  alert('module function')}
	 
	  module.funcfunc2(){
	  alert('module function')}

	  module.funcfunc3(){
	  alert('module function')}

	window.module = module
	 })()


					Библиотеки через замыкания



-библиотеки это наборы функций, которые оборачиваются в модули. Результат функции - объект с функциями





					Стилизация через атрибут style



	<div id="elem">
	 text
	</div>

	
	let elem = document.querySelector('#elem')

	elem.style.color = 'red'

	console.log(elem.style.color)

-через указаие tyle при задании размеров необходимо указывать размерность (px)
при необходимости можно убирать размерность с parseInt

Пример увеличения ширины:

	let widthPx = elem.style.width

	let widthPx = parseInt(width)

	elem.style.width = (widthNm + 30) + 'px'

Или:



	<div style="font-size: 2.5em">
	 text
	</div>

	let elem = document.querySelector('div')

	elem.style.fontSize = (parseInt(elem.style.fontSize)+2)+'em'



-в некоторых ситуациях необходимо вернуть исходное значение стиля


	elem.style.display=' ';

-массовое присваивание стилей (оно заменяет стиль, а не добавляет) Используется редко

	elem.style.cssText = 
	 width:100px;
	 height: 100px;
	 display:block;





					Чтение стилей в из файлов


getComputedStyle - функция, позволяющая получать стили в виде объекта
  существует проблема: при использовании любой размерности, функция возвращает значения в px


	<div id="elem">
	 text
	</div>
	

	#elem {
	 width:100px;
	 color:red;}


	let elem = document.querySelector('#elem')

	let computedStyle = getComputedStyle(elem)



						Стилизация классами



	.success {
	 color: green;
	 }

	.error {
	 color: red;
	}

	
	elem.textContent = 'good'
	
	elem.classList.add('success')


	elem.textContent = 'bad'
	
	elem.classList.add('error')


-также можно изменять одним классом в зависимости от состояния

	div.active {
	 color:red;}
	
	div.passive {
	 color:black;}

-а можно записать через отсутсвие состояния

	
	div.active {
	 color:red;}
	
	div.not(active) {
	 color:black;}

	elem.classList.toggle('active')


				

					Чередование стилей через data атрибут


-при изменении атрибута, предыдущий будет удаляться, что позволит их чередовать


	<div id="elem" data-type:'error'>
	 text
	</div>

	[data-type='success'] {
	 color:green;}

	[data-type='warning'] {
	 color:orange;}
	
	[data-type='error'] {
	 color:red;}

	elem.dataset.type = 'success'
	elem.dataset.type = 'error '


Пример реализации


	<style>
	  [data-type='success'] {
	   color:green;}

	  [data-type='warning'] {
	    color:orange;}
	   
	  [data-type='error'] {
	    color:red;}
	</style>

	<div id='elem'>
	 <input id='input' data-type=" ">
	</div>


	let input = document.querySelector('#input')

	input.addEventListener('blur', function () {
	 if (input.value<=10) {
	input.dataset.type='success'}

	 if (input.value>=10&&input.value<=20) {
	input.dataset.type='warning'}

	 if (input.value>=20) {
	input.dataset.type='error'}
	})




					Работа с экраном и старницей 


*существуют некоторые особенности в CSS при работе с изменением размеров объектов. Так, например, если объекту задан width и height и добавить к нему padding, то отображение объекта будет = width+padding
(или height), а также дополнительный размер создает border.

Для того, что бы указанный изменения не реагировали необходим box-sizing: border-box


 Практический код:

	<div id='elem'>
	 a long text </div>

	#elem { 
	 width: 300px;
	 height: 150px;
	 margin: 50px auto;
	 padding: 25px;
	 background: #CFF5BF;
	 border: 25px solid #F0D7A1;
	 overflow: auto;
	 text-align: justify;}

				
						Клиентский размер элемента

включает размер содержимого и внутреннего отступа и не включает в себя полосу прокрутки


	let elem = document.querySelector('#elem')

	console.log(elem.clientWidth)

	console.log(elem.clientHeight)

	
						Полный размер элемента


	let elem = document.querySelector('#elem')

	console.log(elem.offsetWidth)

	console.log(elem.offsetHeight)




					Размеры элемента с прокруткой	

		
-размеры элемента с учетом спрятанной прокрутки

	let elem = document.querySelector('#elem')	
	
	console.log(elem.scrollWidth)
	
	console.log(elem.scrollHeight)





					Размеры прокрутка элементов

-то, насколько элемент прокручен


	let elem = document.querySelector('#elem')	
	
	console.log(elem.scrollTop)
	
	console.log(elem.scrollLeft)


			
 					Изменение прокрутки элемента

-свойства содержащие прокрутку элементов можно изменять. В этом случае элемент будет прокручен к указанному
  значению



	let elem = document.querySelector('#elem')

	elem.scrollTop = 200

	elem.scrollTop = elem.scrollTop + 100

	Реализация

	let elem = document.querySelector('#elem')


	let down = document.querySelector('#down')

	down.addEventListener('click', function(){
	 	elem.scrollTop = 30
		elem.scrollLeft = 30

	console.log(elem.scrollTop)
	
	console.log(elem.scrollLeft)})

ПРОКРУТКА ЭЛЕМЕНТА ДО КОНЦА

	
	elem.scrollTop = elem.scrollHeight - elem.clientHeight;

	Реализация:

	let elem = document.querySelector('#elem')

	let down = document.querySelector('#down')

	down.addEventListener('click', function(){
	 	elem.scrollTop = elem.scrollHeight - elem.clientHeight; })



					Распахивание элемента
-увеличение размера элемента до скрола

	let elem = document.querySelector('#elem')
	
	elem.style.height = elem.scrollHeight + 'px'

	elem.style.width = elem.scrollWidth + 'px'


    Реализация с кнопкой

	let elem = document.querySelector('#elem')


	let down = document.querySelector('#down')

	down.addEventListener('click', function(){
	 		
	elem.style.height = elem.scrollHeight + 'px'

	elem.style.width = elem.scrollWidth + 'px'})



 					Ширина полоски прокрутки


-зависит от браузера

	let div = document.createElement('div')

	div.style.overFlow = 'scroll'
	div.style.width = '50px'
	div.style.height = '50px'

	document.body.append(div)

	let scrollWidth = div.offsetWidth - div.clientWidth

	div.remove()



 					Размеры окна браузера

-свойства содержащие размеры окна браузера

	let w = document.documentElement.clientWidth
	//ширина
	let h = document.documentElement.clientHeight	
	//высота


	let w = window.innerWidth
	//ширина
	let h = window.innerHeight	
	//высота
	


					Размеры окна с учетом прокуртки 

-высота с учетом прокрученной области

	let scrollHeight = Math.max(
	 document.body.scrollHeight,
	 document.documentElement.scrollHeight,
	
	 document.body.offsetHeight,
	 document.documentElement.offsetHeight

	 document.body.clientHeight
	 document.documentElementclientHeight);

	console.log(scrollHeight)


-ширина с учетом прокрученной области


	let scrollWidth = Math.max(
	 document.body.scrollWidth,
	 document.documentElement.scrollWidth,
	
	 document.body.offsetWidth,
	 document.documentElement.offsetWidth

	 document.body.clientWidth
	 document.documentElementclientWidth);

	console.log(scrollWidth)




					Получение прокрутки оkна 


	let x = window.pageXOffset

	let y = window.pageYOffset




				Получение и изменение прокрутки окна


	let t = document.documentElement.scrollTop

	let i = document.documentElement.scrollLeft
	
	document.documentElement.scrollTop = 200


Прокуртка вниз до конца

	document.documentElement.scrollTop = document.body.scrollHeight





				Метод для прокрутки окна в положение



crollTo - метод прокрутки. Первым параметром принимает Width, а вторым height

	window.scrollTo(100, 20)

и альтернтивный метод, для передачи параметров объектом


	element.scrollTo ({
	 top: 100, 
	 left: 100,
	behavior: 'smooth'})



				Метод для прокрутки окна на величину


-метод прокручивает окно на заданную величину от текущего положения (по аналогии с scrollTo)

	window.scrollBy(100, 200)



	
				Метод ля прокрутки окна к элементу

scrollIntoView - прокручивает к заданному элементу
(параметром регулируют где должен находиться элемент: сверху или снизу)

Что бы был сверху:

	elem.scrollIntoView(true)

Внизу: 

	elem.scrollIntoView(false)

Объект с настройками:

	elem.scrollIntoView({
	 behavior: 'smooth', //медленное перемещение
	 block: 'start', // вертикальное выравнивание
	 inline: 'end' // горизонтальное
	 });

strat, center, end, nearesrt




					Событие scroll

scroll момент когда прокручивается окно

	window.addEventListener('scroll', function (){ 
	 console.log("!")





						Коллекции MAP
					


-это объекты, в которых в качестве ключей могут выступать как примитивы, так и объективы

СОздать коллекцию: 

	let map = new Map

Чтобы добавить элемент: set

	let arr1 = [1,2]
	let arr2 = [3,4]

	map.set(arr1, 'data1')
	map.set(arr2, 'data2')

Чтобы получить элемент: get

	console.log(map.get(arr1))
	console.log(map.get(arr2))


Возможности коллекции Map:

-в свойстве size содержится размер

	console.log(map.size)

-проверить наличие ключа has:

	console.log(map.has(arr1))

-удаление по ключу delete: 

	map.delete(arr1)

-чистка коллекции clear:

 	map.clear()


					Перебор коллекции Мар циклом

	let map = new Map

	let arr1 = [1,2]
	let arr2 = [3,4]

	map.set(arr1, 'data1') // arr1 ([1,2]) - это keys   'data1'- это values
	map.set(arr2, 'data2') 

	for (let elem of map) {
	 console.log(elem) } // будут попадать массивы пары ключ-значение [[1,2], 'data1'], [[3,4],'data2']

Можно отделить ключи и значения с помощью деструктуризации 

	for (let [key, elem] of map)
	 console.log(key)
	 console.log(elem)}

	

					Ключи и значения в коллекциях Map


что бы получить только ключи или только значения

Для значений:
	let values = map.values();

Для ключей: 

	let keys = map.keys()

Набор пар ключ-значение

	let entries = map.entries()




						Применение коллекций 


-по нажатию на абзац добавляется его порядковый номер

	<p>aaa</p>
	<p>bbb</p>
	<p>ccc</p>
	<p>ddd</p>
	<p>eee</p>

	let elems = document.querySelectorAll('p')

	let map = new Map

	let i = 1

	for (let elem of elems) {
	 map.set(elem, i++)
	 elem.addEventListener ('click', function () {
	  this.textContent +=map.get(this)})}

-При вводе в инпут и нажатии enter в коллекцию записывается значение. При потери фокуса, в консоль
 выводится полная коллекция 

	let ins = document.querySelectorAll('.in')

	let map = new Map
	
	let values = map.keys()
	
	let i = 0
	for (let ine of ins) {
	 ine.addEventListener ('keypress', function (event) {
	 	
	   if (event.keyCode===13) {      
		i++
		map.set(this.value, 'value'+i)
		
	this.addEventListener ('blur', function (){ 
	 console.log(map)})
}})}








						Коллекции Set



-позволяют создать массивы без дублей

	let set = new Set

-добавление элементов

	set.add(1)
	set.add(2)
	set.add(3)
	set.add(1)// не добавится, т.к. уже есть

*можно задать первоначальный массив, если в массиве будут дубли, то они исчезнут

	let set = new Set ([1,2,3,4,4,5,5,6])
	console.log(set)

Возможности коллекции set:

-в свойстве size содержится размер

	console.log(set.size)

-проверить наличие ключа has:

	console.log(set.has(1))

-удаление по ключу delete: 

	set.delete(1)

-чистка коллекции clear:

 	set.clear()

-можно также перебрать циклом

	let set = new Set

	set.add(1)
	set.add(2)
	set.add(3)

	for (elem of set) {
	 console.log(elem)}


					
					Преобразование коллекций set


(можно совершать в обе стороны)

В массив:

	let set = new Set([1,2,3])

-деструктуризация

	let arr = [...set]

-метод Array.from

	let arr = Array.from(set)


В коллецию set

	let arr = [1,2,3,4,4]

	let set = new Set (arr) // дубли будут удалены

Удаление дублей

	
	let arr = [1,2,3,4,4]
	let res = [...new Set(arr)]

	console.log(res)// [1,2,3,4]

					

					Получение DOM элементов без дублей


	<p>aaa</p>
	<p>bbb</p>
	<p>ccc</p>
	<p>ddd</p>
	<p>eee</p>
	<button></button>

	let elems = document.querySelectorAll('p')
	let btn = document.querySelector('button')				


	let set=new Set

	for (let elem of elems) {
	
	 elem.addEventListener ('click', function () {
	  set.add(this)})

	btn.addEventListener ('click', function (){
	  elem.textContent = elem.textContent+'!';})}


					


						Псевдомассивы

-массивы, которые возникают при работе с DOM элементами. Данные массивы не обладают некоторыми 
возможностями массивов

	<p></p>
	<p></p>
	<p></p>
	<p></p>
	<p></p>

	let elems = document.querySelector('p')

	console.log(elems)

+можно получить индекс
	console.log(elems[0])
+можно узнать длину
	console.log(elem.length)
+можно перебрать циклом
	for (let elem of elems) {
	 console.log(elem)


-нельзя использовать методы map, join, slice



					Проверка на пидора (массив)

метод Array.isArray

	let test1 = [1,2,3]
	let res = Array.isArray(test1) 
	console.log(res)//true

	let test2 = {a:1, b:2}
	let res = Array.isArray(test2) 
	console.log(res)//false

	let test3 = 'abcd'
	let res = Array.isArray(test3) 
	console.log(res)//false

	let test4 = document.querySelectorAll('p')
	let res = Array.isArray(test4) 	
	console.log(res)//false


					Преобразование псевдомассива

1) Создать в массиве пусты массивы

	let elems = document.querySelectorAll('p')
	let arr = []

	for (let elem of elems){
	 arr.push(elem)

2) Деструктуризация

	let arr = [...elems]

3) метод Array.from

	let arr = Array.from(elems)



						Типы псевдомассивов
	
-псевдомассивы бывают разных типов. Тип зависит от способа получения псевдомассива.
 Разница между типами псевдомассивов состоит в том, как мы получили его в HTMLCollection/NodeList
 Если создавать объекты в разных коллекциях, то они не будут появляться в другой

	let elems = document.querySelectorAll('p')
	console.log(elems) //NodeList
	
	let elems = document.getElementsByTagName('p')
	console.log(elems) //HTMLCollection

	let elems = document.getElementsByClassName('p')
	console.log(elems) //HTMLCollection




						Symbol

-тип Symbol предназначен для создания уникальных идентификаторов. Эти идентификаторы могут быть  использованы для создания уникальных ключей объектов

	let sym = Symbol()
	let sym1 = Symbol()

*При сравнении символов они будут разными

	console.log(sym===sym1) // false

-символам можно добовлять описание 

	let sym = Symbol('someShit')


					Symbol в объектах


	let  obj = {a:1, b:2, c:3}

	let sym = Symbol()
	obj[sym] = 'text'

	console.log(obj[sym]) // text
	console.log(obj) // Object { a: 1, b: 2, c: 3, Symbol(): "text" }


-Ключи с символом не участвуют в переборе массива циклом


	let  obj = {a:1, b:2, c:3}

	let sym = Symbol()
	obj[sym] = 'text'

	for (let key in obj) {
	 console.log(obj[key])} // 1,2,3


-С помощью символов можно добавлять функции в объекты, которые также не будут участвовать в переборе

	let  obj = {a:1, b:2, c:3}

	let sym = Symbol()
	obj[sym] = function(){console.log('!!!')}

	let func = obj[sym]
	func()

*функция находит сумму элементов объекта:

 	  obj = {a:1, b:2, c:3}
   	 sym = Symbol()
	
   	 obj[sym] = function(){
   	  let sum = 0
   	  for (let key in this) {
    	  sum += this[key]
    	 }
    	 return sum}
     
    	func = obj[sym]()
   	 console.log(func) 
	

	

					Глобальные символы Symbol.for

-Symbol.for - метод с помощью которого создаются глобальные символы, доступ можно получить из любого места

	function func1() {
	 let sym = Symbol.for('test')
	 return sym }

	function func2() {
	 let sym = Symbol.for('test')
	 return sym }

	let sym1 = func1()
	let sym2 = func2()

	console.log(sym1===sym2)

-Symbol.keyFor метод для получения имени символа 

	let sym = Symbol.for('test')

	let key = Symbol.keyFor(sym)
	console.log(key) // test



					Хорошо известные символы


- 'well-known symbols' - встроенные символы, использующиеся в служебных целях

Пример:
  Symbol.iterator - содержит в себе функцию, перебирающую массив

	let arr = [1,2,3];
	let func = arr[Symbol.iterator]
	console.log(func)
	


					 	 Итерирование


-любой объект, который можно перебрать через цикл for of называется итерируемым (в т.ч. коллекции).
 Все итерируемые объекты имеют специальную структуру, которая называется ИТЕРАТОР

ИТЕРАТОР - функция, позволяющая перебирать объект
 функция итератор хранится с ключом в виде хорошо известного символа Symbol.iterator


ВЫЗОВ ИТЕРАТОРА
-каждый последовательный вызов должен возвращать объект специальной структуры

	let arr = [1,2,3];
	let iter = arr[Symbol.iterator]()
	console.log(iter.next())

*теперь в iter содержиться объект с методом next
   метод next служит для переключения итерации и будет возвращать объект с ключом 
	value: // содержит значение элемента в массиве (объекте)
	done: // true or false - закончился перебор или нет

  вызов метода next будет каждый раз выдавать следующий элемент:

	Object { value: 3, done: false }
	Object { value: undefined, done: true }
	
					

						Аналогия с map

   	 map = new Map

    	 arr1 = [1,2]
  	 arr2 = [3,4]
	
   	 map.set(arr1, 'data1')
   	 map.set(arr2, 'data2')


	iter = map[Symbol.iterator]()
    	
	console.log(iter.next()) // Object { value: (2) […], done: false }
	console.log(iter.next() // Object { value: (2) […], done: false }
	console.log(iter.next()) // Object { value: undefined, done: true }





						ГЕНЕРАТОРЫ


генераторы-функции с помощью которых можно создавать итераторы.
 Имена функций генераторов начинаются с *

	function * func (){}

 внутри функций используется ключевое слово yield

yield указывает на то, что должен вернуть генератор на следующем вызове


Пример

	function * func (){
	 yield 1;
	 yield 2;
	 yield 3;}
	
	let iter = func ()
	console.log(iter.next())

Циклы генераторами:

	function *func(){
	 for (let i = 0; i<=3; i++)
	  yield i}}

	let iter = func ()
	console.log(iter.next())

Практики на генераторы:

	let m = 4 

	function *func(){
	 while (m>=0){
	  yield m
	  m=m-1}}	

	let iter = func (m)
	console.log(iter.next())


					Однократная работа итераторов

-каждый итератор может участвовать только 1 раз

*перебор итератора вторым циклом
	

	function * func (){
	 yield 1;
	 yield 2;
	 yield 3;}

	let iter = func ()

	for (let elem of iter){
	 console.log(elem);}

И этот итератор будет работать толлько 1 раз. Что бы его запустить заново, нужно переписать iter

	let iter1 = func()
	for (let elem of iter1){
	 console.log(elem);}


	let iter2 = func ()
	for (let elem of iter2){
	 console.log(elem);}


Решениие
	
	for (let elem of func()){
	 console.log(elem);}




						Итератор объекта
	
-Создаем генератор

	function *func(obj) {
	 for (let key in obj){
	  yield obj[key]
	}}

-Создаем итератор

	let iter = func({a:1, b:2, c:3})

Или сразу

	for (let elem of func()){
	 console.log(elem);}

-Переберем итератор циклом

	for (let elem of iter){
	 console.log(elem);}


Практика: ////////////////////////////////////////////?????/////////////////////////////////



	let obj={a:1, b:2, c:3}

	let iter = func(obj)

	function *func() {
	 for (let key in obj){

	yield object.entries(obj)
	
	}}

	let arr = []

	for (let elem of iter){
	console.log(elem)
	arr.push(elem)
	;}

	console.log(arr)







					Создание итерируемого объекта


-итерируемый объект, который можно перебрать циклом for of.
 Для этого необходимо добавить функцию Symbol.iterator


	let obj={
	  a:1,
	  b:2,
	  c:3}

Добавим ф-цию:

	obj[Symbol.iterator]
	 =function *() {
	  for (let key in this){
	   yield obj[key]

	
	for (let elem of obj){
	 console.log(elem)}




					Генератор через вычисляемое свойство

-вычисляемое свойство, это свойство которое вычисляется в объекте и записано там

	let obj={
	  a : 1,
	  b : 2,
	  c : 3,
	  obj[Symbol.iterator] : function *() {
	    for (let key in this){
	      yield obj[key]}}
	
        for (let elem of obj){
	 console.log(elem)}


			


					Встроенный итератор values

-все итерируемые объекты имеют встроенный итератор values, позволяющий переберать значения

Проверка на коллекции мар:

	let map = new Map

	map.set('a', 1)
	map.set('b', 2)
	map.set('a', 3)
						
	let iter = map.values()

	for (let elem of iter) {
	 console.log(elem); }

Проверка на коллекции arr:

	let arr = []
 
	arr.push(1)
	arr.push(2)
	arr.push(5)
						
	let iter = arr.values()

	for (let elem of iter) {
	 console.log(elem); }




					Встроенный итератор keys

-все итерируемые объекты имеют встроенный итератор keys, позволяющий переберать ключи


	let map = new Map

	map.set('a', 1)
	map.set('b', 2)
	map.set('c', 3)
						
	let iter = map.keys()

	for (let elem of iter) {
	 console.log(elem); }




					Встроенный итератор entries

-все итерируемые объекты имеют встроенный итератор entries, позволяющий получать пару ключ:значение

	let map = new Map

	map.set('a', 1)
	map.set('b', 2)
	map.set('c', 3)
						
	let iter = map.entries()

	for (let elem of iter) {
	 console.log(elem); }

С деструктуризацией

	for (let [key, value] of iter) {
	 console.log(key)
	 console.log(value); }
	
	
Для коллекции

	let elems = document.querySelectorAll('p')

	let iter = elems.entries()

	for (let elem of iter) {
	 console.log(elem); }



					Оператор spread и итераторы


-оператор разлагает любой объект у которогоесть итератор. При этом будет браться итератор по умолчанию


	let map = new Map

	map.set('a', 1)
	map.set('b', 2)
	map.set('c', 3)

	let arr = [...map]
	console.log(arr) //  [[ "a", 1 ],[ "b", 2 ],[ "c", 3 ]]
​
Только ключи:

	let map = new Map

	map.set('a', 1)
	map.set('b', 2)
	map.set('c', 3)

	let arr = [...map.keys()]
	console.log(arr) //[ "a", "b", "c" ]




					Встроенный итераторы строк

-строки также имеют итератор

Циклом:
	for (let elem of 'abc') {
	 console.log(elem); }

Спредом:

	console.log([...'abc'])

Практика: 


	let str = '12345'

	let arr = [...str]

	console.log(arr)

	let sum = 0
	for (let elem of arr){
	sum=sum+(Number(elem))
	}
	console.log(sum)




					Массив цифр из числа


	let num = 12345

	let arr = [...String(num)].map(Number)




			Нумерация DOM элементов и получение данных элементов


- с помощью итераторов можно легко добавлять нумерацию DOM элементам


	let elems = document.querySelectorAll('p')


	for (let [num, elem] of elems.entries()) {
	 console.log(num, elem)
	elem.textContent +=num+1; }


C помощью деструктуризации можно получить текст и значение элементов в цикле

	let elems = document.querySelectorAll('p')

	for (let [key, {id, textContent}] of elems.entries()) {
	 console.log(key, {id, textContent}) }







						ФОРМАТ JSON


-строковый формат хранения данных, который используется для передачи через интернет или сохранить в хранилище.
  Формат джейсон может содержать либо объект, либо массив с ограничением:

Все строки и строковые ключи объектов должны быть взяты в кавычки.
 А после последнего элмента запятая не ставится


	let JSON = '{
	 "a": "aaa",
	 "b":111,
	 "c" : "ccc",
	 "111" : "ddd"}'


Также разрешены true, false, null

	let json = '[null, true, false]'




					Преобразование JSON to JS


JSON.parse - метод преобразования структуры JSON to JS


	let json = '[1,2,3,4,5,"a","b"]'

	let arr = JSON.parse(json)


Практика:
1)
	let json = `{
	 "data1":[1,2,3],
	 "data2":[4,5,6],
	 "data3":[7,8,9]
	}`;

	let obj = Object.values(JSON.parse(json))
	let sum = 0

	for (let elems of obj.values()) {
	 for (let elem of elems)
	  sum+=elem}

	console.log(sum)

2)

	let json = '["user1","user2","user3"]'
	let arr = JSON.parse(json)
	let div = document.querySelector('div')
	
	for (let elem of arr) {
	 let ul = document.createElement('ul')
	 ul.textContent = elem
	 div.appendChild(ul)}



					Преобразование JS to JSON


JSON.stringify - метод преобразования структуры JS to JSON

Пример:
	
	let arr = [1,2,3,4,'a','b']

	let json = JSON.stringify(arr)

	console.log(json)




					Изменение данных в JSON


-Чтобы что-то изменить в JSON нужно преобразовать в JS  затем обратно


	let json = '[1,2,3,4,5,"a","b"]'

	let arr = JSON.parse(json)

	arr.push(7)

	json = JSON.stringify(arr)






						LocalStorage

Хранение данных

Для хранения данны используется два типа хранилища:

1)sessionStorge-хранит данные до закрытия браузера

2)localStorage-хранит данные всегда (около 5 мегабит)


Работа с данными

setItem - предназначен для хранения данных. Первым параметром принимает ключ, а вторым значение
getItem - для получения. Выдает один параметр - ключ, под которым хранится значение

Практика:


	function func (arr) {
	 let keys = []
	 let i = 0
	for (elem of arr) {
	 localStorage.setItem(i, elem)
	 keys.push(i)	
	 i++
	 }
	 return keys
	}

	let save = func([4,5,6])
	console.log(save)

	function one (keys) {
	 for (let key of keys) {
	 let str = localStorage.getItem(key)
	 console.log(str)
	}}

	one(save)




					Однократное сохранение в localStorage

-если вывести ключ для которого не записано значение, то будет null.
 Это можно использовать для однократного хранения

Пример:

	let time = localStorage.getItem('time')

	if (!time) {
	 let now = Date.now()
	 localStorage.setItem('time', now)}

		

Практики:

1)Получение даты рождения Инпутом и сравнения с сегодняшней датой:

	<input id='inp'></inp>

	let inp = document.querySelector('#inp')
	let dateBirth = inp.value.split('.')
	let res = dateBirth.map(parseFloat)
	console.log(res)

	let date = new Date
	let dateArr = []
	dateArr.push(date.getMonth()+1)
	dateArr.push(date.getDate())
	console.log(dateArr)

	function check (res, dateArr) {
	 for(let i = 0; i<=1; i++) {
	  if (res[i]!==dateArr[i])
	   return false
	 }
	}
	alert('Congr!')} 

	let birth = localStorage.getItem('birth')

	document.addEventListener('DOMContentLoaded', function(){
	 if (birth===null){
	  localStorage.setItem('birth', res)
	   alert('thnks')
	  }
	else {
	 check(res, dateArr)
	}


2) Вторая практика

	let inp = document.querySelector('#inp')
	let inpValue = inp.value
	inp.addEventListener('blur', inpValue)})

	document.addEventListener('DOMContentLoaded', function(){
	 let localValue = localStorage.getItem('data')
	 inp.value=localValue
	 console.log(localValue)})


						Перезапись данных в localStorage


-можно перезаписывать данные под определенным ключом

	localStorage.setItem('key', '1')

	let value1 = localStorage.getItem('key')

	console.log(value1)

	localStorage.setItem('key', '2')

	let value2 = localStorage.getItem('key')

	console.log(value2)



Практика (счетчик обновления):

	
	document.addEventListener('DOMContentLoaded', function (){
	 
	 let get = localStorage.getItem('number')
	 alert(get)
	 get = Number(get)+1
	 localStorage.setItem('number', get)
	 return get
	 })

	localStorage.setItem('number', get)



					Удаление данных в localStorage


removeItem - можно удалить ключ и данные

	localStorage.removeItem('key')
	let value = localStorage.getItem('key')
	console.log(value)





					Очистка хранилища  в localStorage


clear - метод очистки

	localStorage.clear()



					Количество записей в localStorage


length - метод получает количество записей 

	let num = localStorage.length
	console.log(num)



					Получение ключа по номеру в localStorage



каждая запись в локальном хранилище имеет свой номер. По номеру можно получить ключ

let key = localStorage.key(0)
console.log(key)
let val = localStorage.getItem(key)

console.log(val)



					Перебор хранилища по индексам


объект localStorage не является итерируемым. Можно обойти циклом

	for (let i = o; i<localStorage.key(i); i++) {
	 let key = localStorage.key(i)
	 let val = localStorage.getItem(key)
	 console.log(val)
	 }




					Массивы ключей и значений хранилища


можно получить массив ключей и значений
	
	let keys = Object.keys(localStorage)
	let values = Object.values(localStorage)


			

					Хранение структур в localStorage


можно хранить только строки. Однако в структуре JSON можно хранить массивы и объекты
Сохраним массив:

	let arr = [1,2,3,4,5]
	localStorage.setItem('arr', JSON.stringidy(str))

	let str = localStorage.getItem('arr')
	let res = JSON.parse(str)

	console.log(res)





					Модификация хранимых структур в localStorage


	let arr = [1,2,3,4,5]
	localStorage.setItem('data', JSON.stringify(arr))

	let json = localStorage.getItem('data')
	let data = JSON.parse(json)

	data.push(6)
	data[0] = '!'

	localStorage.setItem('data', JSON.stringify(data));



						ПРАКТИКА

Стикеры для составления записей.
Стикеры это блоки текста в виде плиточки
Можно создавать новые, редактировать их или удалять
Каждый стикер добавляется в конец плиточки

	<style>
	 #parent{
	 display:flex
	 }
	.child {
	 width: 200px;
	 height: 200px;
	 box-shadow: 2px 2px 1px black;
	 border: 1px solid black;
	 background-color: orange; 
	 opacity: 0.6;
	 border-radius: 10px;
	 margin: 15px;
	 padding: 5px;
	 justify-content:center;
	 }
	textarea {
	 margin:20px;
	 width: 400px;
	 height: 200px;
	 }
 	</style>


	<div id='parent'>
	 <div class='child'></div>
	</div>
	<textarea></textarea>
	<button>Save</button>


	let parent = document.querySelector('#parent')
	let child = document.querySelector('.child')
	let txt = document.querySelector('textarea')
	let btn = document.querySelector('#save')

	let data = localStorage.getItem('data')


	btn.addEventListener('click', add)
	function add (){
	  if (data===null) {
	  let arr = []
	  arr.push(txt.value)
	  localStorage.setItem('data',JSON.stringify(arr))
	  
	} else {
	  let get = localStorage.getItem('data')
	  arr = JSON.parse(get)
	  arr.push(txt.value)
	  localStorage.setItem('data', JSON.stringify(arr))
	}
	txt.value='';
	return arr
	}

	let arr = JSON.parse(data)
	

	for (let i = 0; i<=arr.length; i++) {

	  let child = document.createElement('div')
	  parent.appendChild(child)
	  child.classList.add('child')
	  let span = document.createElement('span')
	  child.appendChild(span)
	  span.textContent = arr[i]


	let deleteBtn = document.createElement('button')
	child.appendChild(deleteBtn)
	deleteBtn.textContent = 'delete';
	deleteBtn.addEventListener('click', function(){
	let data = localStorage.getItem('data')
	arr.splice(i,i)
	console.log(arr)
	localStorage.setItem('data', JSON.stringify(arr))
	child.remove()
	return data
	})

	let editBtn = document.createElement('button')
	child.appendChild(editBtn)
	editBtn.textContent = 'edit'
	editBtn.addEventListener('click',edit)

	function edit (){
	btn.removeEventListener('click', add)
	txt.value=arr[i]
	btn.addEventListener('click', function(){
	let get = localStorage.getItem('data')
	arr = JSON.parse(get)
	arr[i] = txt.value
	span.textContent = arr[i]
	txt.value=' ' 
	localStorage.setItem('data', JSON.stringify(arr))
	btn.removeEventListener('click', edit)
	btn.addEventListener('click', add)
	})}
	}

	let res = localStorage.getItem('data')
	console.log(res)

  





						Регулярные выражения


-команды для сложного поиска и замены. Существует несколько методов работы с ними. Разберем метод
Replace, метод принимает 2 параметра (что менять, на что менять)

	'bab'.replace('a', '!') //'b!b'

в первый параметр можно передавать регулярное выражение
-Набор команд, расположенных внутри //
/-ограничители регулярных выражений

Регулярные выражения состоят из:
1)выражения обозначающие себя
2) спецсимволы

	'bab'.replace(/a/, '!') //'b!b'


 точка - это спецсимвол, обозначающий любое значение

	'xax eee'.replace(/x.x/, '!') // "! eee"

после ограничителей можно писать модификаторы - команды изменяющие общие свойства

 g - включает гломальный поиск (найдутся все варианты, а не только первый)


	'aab'/replace(/a/, "!") // '!ab'

	'aab'/replace(/a/g, "!") // '!!b'



					Операторы повторений 

-операторы квантификаторы

 + одно или более повторений
 * ноль или более раз
 ? ноль или одно повторение

+
	let str = 'xx xax xaax xaaax xbx'
	let res = str.replace(/xa+x/g, "!") // 'xx ! ! ! xbx'

*
	let str = 'xx xax xaax xaaax xbx'
	let res = str.replace(/xa*x/g, "!") // '! ! ! ! xbx'

?
	let str = 'xx xax xaax xaaax xbx'
	let res = str.replace(/xa?x/g, "!") // '! ! xaax xbx'




				Группирующие скобки в регулярках


-в пердыдущих примерах мы действовали только на 1 символ, Для того что бы действовать больше:

() - если что-то стоит в группирующих скобках и сразу после ) стоит оператор повторения, то
	он подействует на все что стоит внутри скобок


	let str = 'xabx xababx xaabbx'
	let res = str.replace(/x(ab)+x/g, "!") // '! ! xaabbx'


					Экранировка спецсимволов

что бы спецсимвол обозначал сам себя - экранирование с помощью обратного слеша


	let str = 'a+x ax aax aaax'
	let res = str.replace(/a\+x/g, "!") // '! ! xaabbx'


ИСключения - цифры, их экранировать нельзя

Спецсимволы:
$ ^ . * + ? \/ {} [] () |


Не спецсимволы:

@ : , ' " ; - _ = <> % # `~ & !



				Фигурные скобки в рег.выражениях

что бы указать конкретное число повторений оператор {}

{5} - 5 повторений

{2,5} - от 2 до 5 включительно повторений

{2,} - 2 и более раз

{,2} - ТАКОГО НЕТ


	let str = "xx xax xaax xaaax'
	let res = str.replace(/xa{1,3}x/g, '!')



				Ограничение жадности в регулярках

по умолчанию регулярки - жадные (захватывают максимальное количество символов)

	let str = 'aeeex zzz x kkk'
	let res - str.replace(/a.+x/g, "!") //"! kkk"

т.к. регулярка будет искать до последнего Х

Что бы ограничить жадность нужно ставить ? (или любым оператором повторения)

	let res - str.replace(/a.+?x/g, "!")





				Группы символов в регулярных выражениях

команды выбора группы символов

\d - значает цифру от 0-9
\w - значит цифру, латинскую букву или знак подчеркивания
\s - пробел, перевод строки, табуляцию

для инвертирования значения ставится заглавная буква

\D


				
				Наборы символов в регулярных выражениях


Группы символов \d и \w не гибкие
Задача найти все цифры или буквы не будет решена ими

Для использования - квадратные скобки, означающие "или"

[]-заменяют один символ, любой из перечисленных в них

x[abc]x - внутри иксов должна стоять любая одна буква из АВС
x[abc]+x - внутри иксов любое количество символов АВС в любых комбинациях

[a-d] - символы от a до d

[a-z1-9] -любая буква от a до z, или любая цифра от 1 до 9 

[a-z19] - любая буква от a до z, или 1 и 9



				Инвертирование наборов символов в регулярках


[^...] - с ^ внутри квадратных скобок можно инвертитровать желаемое

[ab] - ищет букву а или b
[^ab] - ищет все буквы, кроме а или b



				Особенности кириллицы в регулярках

символы кириллицы не входят в группу \w
Для их получения нужно использовать [а-я] НО сюда не войдет ё. Чтобы включить: [а-яё]



				Спецсимволы и группы символоввнутри квадратных скобок

-становятся обычными символами(их не нужно экранировать обратным слешем)

-\d, \D, \w, \W, \s \S внутри [] будут по прежнему группами

	let str = 'xax xbx x1x x2x xhx x@x'
	ler res = str.replace(/x[\da-f]x/g, "!"]//'! ! ! ! xhx x@x'

-если квадратные [] скобки нужны как просты символы, то их нужно экранировать

	let res = str.replace(/x[\[\]]x/g,"!')



				Игнорирование регистра в регулярках

i - модификатор для игнорирования

	let str = 'aaa bbb CCC DDD'
	let res = str.replace(/[a-z]+/ig)


				Начало и конец строки в регулярках


^ - начало строки в регулярках
$ - конец

	
	let str = 'aaa aaa aaa aaa'
	let res = str.replace(/^aaa/g) // '! aaa aaa aaa'

	let str = 'aaa aaa aaa aaa'
	let res = str.replace(/aaa$/g) // 'aaa aaa aaa $'




					Границы слов


'\b' - обращение к границе слова
'\В' - не к границе


	let str = 'aaa aaa aaa aaa'
	let res = str.replace(/\b/g) // '!aaa! !aaa! !aaa!'

	let str = 'aaa aaa aaa aaa'
	let res = str.replace(/\B/g) // 'a!a!a a!a!a a!a!a'



				Многострочность в регулярках

	let str = '111
		   222
		   333
		   444'
Перевод строки \n
	let res = str.replace(/\n/g, '!') // '111! 222! 333! 444!'   

Табуляция \t	
	let res = str.replace(/\n/g, '!') // '111
						!222
						!333
						!444' 
Работа точки .
	let res = str.replace(/\n/g, '!') // "
						!!!
						!!!!
						!!!!
						!!!!'

Что бы поймать символы в многострочной строке [\s\S]
	let res = str.replace(/[\s\S]/g,'!')// '!!!!!!!!!!!!!!!!!!!!!!!!!"

Ловить начало каждой строки c модфикатором м:
	let res = str.replace(/^/gm, '!') // '!111
					      !222
					      !333
					      !444'
$ - овить конец каждой строки
	let res = str.replace(/$/gm, '!') // ' 111!
222!
333!
444!'   



					Команда или в регулярках


'|' - более сильный по сравнению с [], позволяет разделить регулярку на несколько частей
	и искомое может попасть под разные части регулярки

	let str = 'aaa bbb abb'
	let res = str.replace(/a{3}|b{3}/g) // '! ! abb'

	let str = 'aaa bbb bbbb bbbbb abb'
	let res = str.replace(/a{3}|b+/g) // '! ! ! ! axx'


				

					Переменная с регуляркой 


	let str = 'aaa bbb ccc'
	let reg = /\w+/
	let res = replace.match(reg, '!')




						Метод test



test - проверяет, есть ли в строке хотя бы одно совпадение с регуляркой
Если есть - true , если нет - false

	регулярка.test(де искать)

	/a+/.test('eee aaa bbb')///true

для проверки на соответствие целой строки

	/^a+$/.test('aaaaaa')

Практика

1)
/http+/.test('http://gayorg.com')

2) 
if (/https+/.test('http://gayorg.com')){
console.log('true')}
else {
console.log('false')}



						Метод search


search - осуществляет поиск в сроке по регулярному выражению


	строка.search(регулярка)

метод возвращает позицию первой найденной подстроки, а если она не найдена, то -1

	let str = 'a aa aaa aaaa aaaaa'
	let res = str.search(/aaa/); /// 5




						Метод split


.split - разбивает строку в массив по разделителю (разделитель передается параметром и им является строка)

Но, параметром можно передать и регулярное выражение. В этом случае разделителем будет выступать все подстроки, которые попали под регулярное выражение


	let str = 'a-b+c-d+e'
	let res = str.split(/[-+]/)

	let res = ['a', 'b', 'c', 'd', 'e')

Практика:

	let str = '2025-12-31 12:59:59'
	let res = str.split(/[-\s:]/)
	console.log(res)




						Метод match


match - находит певрое совпадение с регулярным выражением и возвращает массив, в нулевом элементе
  будет лежать найденная строка.

	let str = 'xax xaax xaaax'
	let res = str.match(/xa+x/)
	console.log(res[0]) //xax

-в свойстве index удет лежать позиция, на которой обнаружено совпадение

	console.log(res.index)//4

-в свойстве input - строка по которой был поиск

	console.log(res.index)//'xax xaax xaaax'




				Карманы в методе match в регулярках


В остальные элементы массива попадают "Карманы" - способ разбить найденое на отдельные части. Для 
  их использования нужно заключать часть регулярки в круглые скобки. В этом случае в массиве появятся 
и то, что попало в регулярку


	let str	= '12:34'
	let res = str.match(/(\d+):(\d+)/)

	console.log(res[0]) // '12:34'
	console.log(res[1]) // '12'	
	console.log(res[2]) // '34'





					Глобальный match в регулярках


-match вызванный с g, возвращает все найденные совпадения в виде массива.

	let str = 'a aa aaa aaaa'
	let res = str.match(/a+/g)
	//['a', 'aa', 'aaa', 'aaaa']

	let str = '1 23 456 789'
	let res = str.match(/\d+/g)// ['1', '23', '456', '789']

	
	let str = '1 23 456 789'
	let res = str.match(/\d/g)// ['1', '2', '3', '4', '5', '6', '7', '8', '9']





					Глобальный matchAll в регулярках

matchAll - возвращает все совпадения в виде итерируемого объекта, каждый элемент которого содержит смассив из найденного и его карманов. Метод можно вызывать с g 


	let str = '12 34 56'
	let matches = str.matchAll(/(\d)(\d)/g)

	for (let match of matches){
	 console.log(match)}

//
	Array(3) [ "12", "1", "2" ]

	Array(3) [ "34", "3", "4" ]

	Array(3) [ "56", "5", "6" ]





					Метод exec в регулярках

exec - осуществляет поиск по строке. Результатом возращается найденная строка и ее подкарманы.
  При этом, каждый последующий вызов данного метода будет начинать поиск с того места, в котором закончилась предыдущая найденная строка


	let str = '12 34 56'
	let reg = /\d+/g

	let res1 = reg.exec(str)
	console.log(res[0]) //12

	let res2 = reg.exec(str)
	console.log(res[1]) // 34

	let res3 = reg.exec(str)
	console.log(res[2])//56

	let res4 = reg.exec(str)
	console.log(res[3])//null

Удобно использовать в цикле

	let str = '12 34 56'
	let reg = /(\d)(\d)/g

	let res
	while(res = reg.exec(str)) {
	  console.log(res)}



				
					Свойство lastIndex

lastIndex - свойство регулярного выражения. Содержит позицию с которойбудет начинать поиск следующий вызов метода exec.

	let str = '12 34 56'
	let reg = /\d+/g
	onsole.log(lastIndex)

	let res
	while(res = reg.exec(str)) {
	  console.log(res)

	  console.log(reg.lastIndex)//2,5,8
	}

lastIndex можно изменять, начиная поиск с заданной позиции

	let str = '12 34 56'

	let reg = /\d+/g
	reg.lastIndex = 2

	let res = reg.exec(str)
	console.log(res) // [34]



					Карманы в методе replace


-при работе с replace, если мы что-то положим в карман в регулярке, то в строке замены мы можем вставить содержимое этого кармана написав знак $ и номер кармана.

Например: $1 - первый карман
	  $2 - второй карман

	let str = '1 23 456 xax'
	let res = str.replace(/(\d+)/g,'($1)')// '(1) (23) (456) xax'


	let str = 'x1x x23x x456x xax'
	let res = str.replace(/x(\d+)x/g,'!$1!')// '!1! !23! !456! xax'


	let str = 'aaa@bbb ccc@ddd'
	let res = str.replace(/([a-z+)@([a-z]+)/g,'$2@$1')// 'bbb@aaa ddd@ccc'





					Колбэк в методе replace


-replace вторым параметром может принимать не только строку, но и функцию-колбэк, которая применится для каждого найденного совпадения.
  Каждая подстрочка, которую нашла регулярка заменится на то, что вернет эта функция именно для этой подстрочки

В эту колбэк функцию можно передавать параметры:
В 1 параметр положится найденная строка
В 2 параметр положится первый карман
В 3 параметр положится второй карман и т.д.

В предпоследний параметр положится позиция найденного совпадения
В последний параметр - вся строка

	let str = '2 3 4 5'

	str.replace(/\d+/g, function(match) {
	 console.log(match) })

	let result = str.replace(/\d+/g, function(match) {
	 return match**2 })
	console.log(result)

Пример 2 :

	let str = '2+3= 4+5= 6+7='

	let result = str.replace(/(\d)\+(/d)=\g, function(match0, match1, match2) {
	 let sum = Number(match1) + Number(match2)
	  return match0+sum })
	
	console.log(result)
	

				Карманы по умолчанию в методе replace

В методе replace, помимо карманов всегда доступны также стандартные карманы: 
 
 $&  все найденное совпадение
 $` часть строки до совпадения
 $' часть строки после совпадения


	let str = '1 23 456'
	let res = str.replace(/\d+/g, '($&)') // '(1) (23) (456)'

	let str = '123@456'
	let res = str.replace(/@/g, "($`@$')")) // '123(123@456)456'

	let str = 'aaa $ bbb'
	let res = str.replace(/\$/g, '`$$`') // 'aaa `$` bbb '




					Карманы в самой регулярке


Содержимое карманов доступно в самой регулярке
Содержимое доступно по их номерам, перед которыми стоит обратный слеш. Например, первый карман будет доступен вот так: \1 и так далее

	let str = 'aa bb cd ef'
	let res = str.replace(/(a-z]\1/g, '!')// '! ! cd ef'

	let str = 'asxca buzxb csgb'
	let res = str.replace(/([a-z])[a-z]+\1/g, '!'0 // '! ! csgd'



					Именованные карманы в регулярках


-можно давать имена карманам с помощью синтаксиса

(?<name>pattern)
name- имя кармана
pattern - карман

	let str = '2025-10-29'

	let reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/

	let res = str.match(reg) - применем регулярку

	console.log(res.groups) - все карманы попадут в группу в виде объекта

	console.log(res.year)

	console.log(res.month)

	console.log(res.day)



					Именованные карманы внутри регулярки

	
	let res = str.replace(/([a-z)\1/g, '!')

что бы обратиться к карману не по имени а по номеру:

	let res = str.replace(/(&<letter> [a-z])/g, '!')

tеперь можно обратится по номеру через синтаксис \k<name>

	let res = str.replace(/?<letter> [a-z])\k<letter>/g, '!')




				Несохраняющие скобки в регулярках


() - выполняют функции символов и группировки кармана

Что бы сгруппировать, но не убрать в карман используют

(?:) - несохраняющие скобки

Пример: 1)

	let str = 'abab123'
	let res = str.match(/(ab)+([1-9]+)/)

	console.log(res[0])//'abab123'
	console.log(res[1])//ab
	console.log(res[2])//123

2)

	let str = 'abab123'
	let res = str.match(/(&:ab)+([1-9]+)/)

	console.log(res[1])//'123'



				Позитивный и негативный просмотр в регулярках


Задача: найти строку 'aaa' и заменить ее на '!', но только если после 'aaa' стоит 'x', а сам'x'
  при этом не заменять

Просмотр вперед:

-сказать что 'x' не следует заменять с поиощью: (?= ) - позитивный просмотр вперед

(?= ) - просто смотрит, но не заменяет

'должен быть Х и только тогда произойдет"

	'aaax aaab'.replace(/aaa(?=x)/g, '!')
	 //!x aaab


(?!) - негативный просмотр вперед

'должен быть Х и только тогда не произойдет"

	'aaax aaab'.replace(/aaa(?!x)/g, '!')
	  //aaax !b


Просмотр назад:

(?<=) - позитивный назад
(?<!) - негативный назад



					Строка с регуляркой


регулярные выражения можно представлять ввиде строк. Удобно в случае вставок переменных в руглярки, 
 либо формировать их динамически

	let str = 'img.png'
	let reg = /\.(png|jpg)$/
	let res = str.match(reg)

RegExp - специальный объект

	let reg = new RegExp('\.(png|jpg)$')
	let res = str.match(reg)
	
-вынесем часть регулярки и вставим конкатенацией

	let pat = 'png|jpg'
	let reg = new RegExp('\.('+pat+')$')
	let res = str.match(reg)

-вставим шаблонной строкой

	let pat = 'png|jpg'
	let reg = new RegExp('\.(${pat})$')
	let res = str.match(reg)

-вставим частью массива 

	let pat = [png, jpg]
	let pat = exts.join('|')
	let reg = new RegExp('\.(${pat})$')
	let res = str.match(reg)



					Флаги для строк


-флаги в регулярках, созданных через RegExp следует передавать параметром:

	let str = 'abc def'

	let reg = /[a-z]+/g
	let res = str.match(reg)

	let reg = new RegExp('[a-z]+', 'g')
	let res = str.match(reg)



					Обратный слеш в регулярках

В строках с регулярками можно экранировать (фактически удваивать) обратные слеши

	let str = 'xyz'

	let reg = /\w+/
	let res = str.match(reg)

если переделать рег выражение в строку. В этом случае проблема с обратным слешем

	let reg = new RegExp ('\w+') // not working
	let res = str.match(reg)

-если удвоить, то заработает

	let reg = new RegExp ('\\w+') // working
	let res = str.match(reg)





			


					ИСКЛЮЧИТЕЛЬНЫЕ СИТУАЦИИ

Исключительные ситуации - ситуации когда программа не может продолжить работу (исправить ошибку)

Пример: 
-если пользователь водит некорректный email, но программа продолжает запрашивать его, это ОШИБКА
-деление на 0 - исключительная ситуация (но не в JS)

Виды исключительных ситуаций:

1) Некорректный JSON

	let data = JSON.parse('{1,2,3,4,5}')

2) Переполнение кэша
	
	let str = ' '
	for (let i = 1; i<=6*10**6; i++) {
	 str += '+';
	}

	localStorage.setItem('key', str) 

Возникновение таких ситуаций полностью останавливает скрипт.

Что бы не произошло использовать конструкцию try-catch


	try {
	 // выполнение кода
	} catch {
	 // обработка ошибки
	}


-если в блоке try будет исключ ситуация, то будет выполнен catch (альттернативный код)


Пример:

1)
	try {
	 let data = JSON.parse('{1,2,3,4,5}')
	} catch {
	 alert('невозможно выполнить операцию разбора')
	}

2)
	try {
	 let str = ' '
	 for (let i = 1; i<=6*10**6; i++) {
	 str += '+';}
	 localStorage.setItem('key', str) 
	} catch {
	 alert('память заполнена')
	}

Практика:

	try {
	 let data = JSON.parse('[1,2,3,4,5,"a","b"]')
	 let ul = document.querySelector('ul')
	 for (let elem of data){
	   let li = document.createElement('li')
	   ul.appendChild(li)
	   li.textContent = elem}
	}catch{
	 alert('невозможно выполнить операцию разбора')
	}





					Разработка с try-catch

-разработку кода необходимо учитывать с try-catch




				Перехват исключений во вложенном коде

-можно ловить ошибку каждый раз при вызове функции

	function save(str) {
	 localStorage.setItem('key', str);}

	try {
	 save('некая строка'); 
	} catch (error) { 
	 alerty('место закончилось')}


Пример:
	
	function getArr(json){
	try{
	 return JSON.parse(json)
	 
	}catch{
	 alert('Wrong json')}}

	let arr = getArr('[1,2,3,4,5,"a","b"]')
	console.log(arr)



					Объект с ошибкой

-при возникновении исключительных ситуаций браузер создает объект c ошибкой, который попадает в catch
Свойства:
 name: имя ошибки
 massage: текст ошибки

	try {
	 let data = JSON.parse('{1,2,3,4,5}')
	} catch (error) {
	 console.log(error.name)//SyntaxError
	console.log(error.message)//JSON.parse: expected property name or '}' at line 1 column 2 of the 					JSON data

	}




					Основные типы исключений

1) TypeError - ошибка, при недопустимом типе для переменной или параметра

2) SyntaxError - ошибка при разборе JSON

3) RangeError - при попытке передать параметром функции число, которое не входит в допустимый диапазон
   		значений этого параметра функции. А также может возникать при создании массива 
	 	неправильной длинны черезх конструктор Array, или при передаче плохих значений в методы
		Number.toExponential(), Number.toFixed(), Number.toPrecision()



					Применение типов исключений в JS


в случае если функция обрабатывает JSON  записывает в хранилище могут произойти 2 исключения

	function saveData (json) {
	 let arr = JSON.parse(json)

	  for (let i = 0; i<arr.length; i++) { 
	   localStorage.setItem(i, arr[i]) 
	}}


=>

	try {
	 saveData('[1,2,3,4,5]')
	} catch (error) {
	 if (error.name == "QuotaExceededError') {
	  alert('Place is over')}
	 if (error.name == "SyntaxError') {
	  alert('Uncorrect JSON')}



					Выбрасывание исключений 


создание пользовательских исключений:
1) Нобходимо создать исключение методом new Error ('текст исключения')

2) Затем выбросить исключение throw

	throw new Error ('text')

3) Отловить исключение try-catch

	function div(a,b) {
	if (b!==0) {
	 return a/b}
	else { 	
	 throw new Error ('деление на ноль')

	try {
	 alert (div (3,0)) {
	} catch { 
	 alert ('вы делите на 0!')


				Выбрасывание различных типов исключения 

	

	try {
	 throw new Error ('текст исключения')
	} catch (error) {
	
	console.log(error.name)
	console.log(error.message)
	}	
	
Можно задавать конкретный тип исключений TypeError, SyntaxError, RangeError

	try {
	 throw new SyntaxError ('текст исключения')
	} catch (error) {
	
	console.log(error.name) //SyntaxError 
	console.log(error.message)
	}	

Создание своих типов исключений:  в throw передать объект с name&massage

	try {
	 throw {name: 'MyError', message: 'Text Error'}
	} catch (error) {
	console.log(error.name) //SyntaxError 
	console.log(error.message)
	}	

Пример:

	function div(a,b) {
	if (b!==0) {
	 return a/b
	} else { 	
	 throw {name: 'Ощибка', message: 'Епта на 0 делишь!'}}
	}


	try {
	 alert(div (3,0))
	} catch (error) { 
	 console.log(error.name)  
	console.log(error.message)
	}


Пример с data атрибутами:

	<div id='product'
		data-product='apple' data-price=' ' data-amount='5'></div> // в цене должно быть число

	fuction getCost(elem) {
	 return elem.dataset.price*elem.dataset.amount

	let prod = document.querySelector('#product)
	let cost = getCost(prod)

	alert(cost) //выдаст NaN


=>

	function getCost(elem) {
	 if (elem.dataset.price!==undefind&&elem.dataset.amount!==undefind) {
	   return elem.dataset.price*elem.dataset.amount
	}else{
	  throw {
	   name:'ProductCostError'
	   message: 'отсутствует цена илb количество'
		}
	
	try {
	 let cost = getCost(product)
	 alert(cost)
	}catch (error){
	 реагируем на ошибку }

Пример с JSON

нихуя блять не работает и я в душе не ебу почему((() (п.с. какие то ебучие скобки и формат ДЖИЭЙСОН БЛЯТЬ

    try {
    let json = {'product':'apple','price':1000,'amount':5}
    let prod = JSON.parse(json);

    if (prod.price!==undefind&&prod.amount!==undefind){
       alert( prod.price*prod.amount)
    }else{
      throw{
       name:'ProductCostError'
       message: 'отсутствует цена илb количество'
};
    }
  }catch(error){
     if(error.name=='SyntaxError'){
alert('Uncorrect JSON')
}else if(error.name=='ProductCostError'){
    alert('No price or amount')}
          }
    

					Проброс исключений 


	catch (error) {
	 if(error.name == 'SyntaxError') {
	 alert('Uncorrect product code') }
	else if (error.name == 'ProductCostError'){
	 alert('No price or amount')
	 }
	}

-у нас предусмотрено 2 исключения, но если будет другое оно тоже попадет в catch но не выдаст ничего

!И если мы не предполагаем нашего исключения, то просто бросаем в throw




	catch (error) {
	 if(error.name == 'SyntaxError') {
	 alert('Uncorrect JSON') }
	else if (error.name == 'ProductCostError'){
	 alert('No price or amount')
	 } else {
	  throw error
	 }
	}

Практики

c ДАТА:

	let prod = document.querySelector('#product')


	function getCost(elem) {
	 if (elem.dataset.price!==undefined&&elem.dataset.amount!==undefined){
	   return elem.dataset.price*elem.dataset.amount}

	if (elem.dataset.price==undefined){
	throw{name:"ProductPrice",message:"noPrice"}}

	if (elem.dataset.amount==undefined){
	throw{name:'ProductAmount',message:'отсутствует количество'}}
	
	else{
	throw{name:'Pizdec',message: 'ti daun'}}
	
	}

	try {
	 let cost = getCost(prod)
	 alert(cost)
	}catch (error){
	 console.log(error.name)
	 console.log(error.message) }


с JSON:

	let json = '[{"name":"user1","age": 25,"salary":1000},{"name":"user2","age": 	24,"salary":2000},{"name":"user3","age": 27,"salary":5000}]'

	
	try{
	let arr = JSON.parse(json)
	
	if (arr==Array) {
	 alert("Chetko")}
	}catch(error){
	 console.log(error)
	}









						АСИНХРОННЫЙ КОД


Синхронный  код:

	console.log('1')
	console.log('2')


Асинхронный код-возникает при работе с таймерами, событиями, загрузке картинки, AJAX (загрузка страницы с сервера),при работе NODeJS

1) таймер

	setTimeout(function(){
	 console.log(1)}, 3000)

	console.log('2')

2) событие

	elem1.addEventListener('click', function(){
	  	 	console.log('1')})

	console.log('2')

3)загрузка картинки

	let image = document.createElement('img')
	image.src='img.png'
	
	image.addEventListener('load', function(){
	document.body.appendChild(image)})



!!!!!!!ИСКЛЮЧЕНИЕ В АСИНХРОННОМ КОДЕ НЕ МОЖЕТ БЫТЬ ПОЙМАНО В TRY-CATCH!!!!!!!!!!!!!!!!





					Асинхронный код с колбэками

-подход для последоватьного выполнения асинхронных функций

	function make(callback) {
	 setTimeout(function(){
	  console.log('1');
	   callback()
	},3000)}

	make(function(){
	 console.log('2')})

-асинхронная передача результата в коллбэк

	function make(callback){
	 setTimeout(function(){
	  let res = [1,2,3,4,5]
	  let sum = 0
	for (let elem of res) {
	  sum +=+elem}
	  callback(sum)
	}, 3000)}

	make(function(sum) {
	 console.log(sum)})


-передача параметров в асинхронный колбэк

 так, что бы в асинхронную функцию можно было передавать входные праметры
Пример: в качестве параметра номер элемента, который хотим получить

      function make (num, num2, callback) {
       setTimeout(function(){
        let arr = [1,2,3,4,5]
        callback(arr[num]+arr[num2])
      }, 3000)}

      make(3, 4, function(res){
       console.log(res)})

				

					Исключения в асинхронных колбэках


Что бы поймать исключение: 
 в первый параметр колбэка отправляют результат, а во второй ошибку

	function make(num, callback) {
	 setTimeout(function(){
	  let arr = [1,2,3,4,5]

	 let err;
	 if (arr[num]==undefind){
	  err= 'elem not exist'
	 }else{ 
	  err=null //ошибки нет
	 }

	callback(arr[num],err)
	},3000)
	 }

     make(8, function(res, err){
	if (!err) { console.log(res)}
         else {
    	  console.log(err)}
          })




				Загрузка картинок через асинхронные колбэки

-функция loadImage принимает первым параметром принимает путь к картинке, а вторым - колбэк, который     выполнится, когда картинка загрузится



	let image = document.createElement('img')

	image.addEventListener('load', loadImage('k.jpg', function(image, err) {
	 if (err==null) {
	  document.body.append(image)
	 }else{
    	  console.log('произошла ошибка'+err)
	    }
          }))

	function loadImage (src, callback){
	let err;

	if(src==undefined) { ////блять не получается поймать src
	err='БЛЯЯЯЯЯЯ'
	  
	}else{
	  err=null 
	  image.src=src
	  callback(image, err)
	  }
	}




					Проблема callback hell

-ловинное увеличение вложенности кода (колбэк в колбэк и т.д.):


	loadImage('img1.png', function (image, err1) {

	 document.body.append(image) 
	 loadImage('img2.png', function (image, err) {
	    
	    document.body.append(image)
	    loadImage('img3.png', function (image, err) {
	 
	       document.body.append(image)
		console.log('все картинки загружены')
		  })
		})
              })


				Асинхронная загрузка картинок в цикле

Пример:
	let arr = ['img1.png','img2.png','img3.png']

	for( let path of arr) {
	 loadImage(path, function(image, err) {
	   document.body.append(image)})
	}

Основная проблема: нельзя загрузить последовательно, невозможно поймать момент загрузки всех картинок







						ПРОМИСЫ (promise)

-представляет собой объект, в который параметром передается функция, внутри которой размещается асинхронный код

	let promise = new Promise(function(){})

-далее к этой переменной можно применить метод then, передав в него функцию с кодом, который должен выполнится по завершении асинхронного кода, написанного при создании промиса:

	promise.then(function () {

	})

-задача выполнить код после асинхронной функции:

    let promise = new Promise(function (resolve){//что бы результат попал в параметр завершения
	setTimeout(function(){
        let result = [1,2,3,4,5]
        resolve(result)//передаем результат
	console.log('test')
       }, 3000)
       })

-теперь можем вызвать функцию в другом месте через метод then

	promise.then(function(result) {
	 console.log(result)})



				ИСключительные ситуации в промисах

-для исключительных ситуаций пользуются отклонением промиса

	let promise = new Promise(function(resolve, reject) {
	 setTimeout(function(){

	 let isError = false{
	if (!isError) {
	 resolve([1,2,3,4,5])

	}else{ 
	 reject('Error in promise')}
	
	},3000)})


-затем в методе then казываем 2 функции

	promise.then(
	 function(result) {
	  console.log(result)},
	 function(error){
	  console.log(reject)
	 })

Пример:функция делит 1 на рандомное число, если делит на 0, то возвращает ошибку


	let promise = new Promise(function(resolve, reject){
 	 setTimeout(function() {
	  
	let result = 1/Math.floor(Math.random()*6)
	
	if (result!==Infinity) {
	  resolve(result)
	}else{
	
	reject('деление на 0')}
	},3000)})


	promise.then(
	 function(result) {
	  console.log(result)},
	 function(reject){
	  console.log(reject)
	 })



Объект с ошибкой:

new Error:

	let promise = new Promise(function(resolve, reject) {
	 setTimeout(function(){
	  reject(new Error('error in promise')
	}, 3000)})

throw:

	let promise = new Promise(function(resolve, reject) {
	 setTimeout(function(){
	  throw new Error('error in promise')
	}, 3000)})	


Пример:

	let promise = new Promise(function(resolve, reject) {
	 setTimeout(function(){
	  let isError = false
	if (!isError){
	 resolve('success')
	}else{
	throw new Error ('false')
	reject(new Error('false')
	}, 3000})


					Отдельный перехват исключений


в then можно указать толбко функцию обработчик исключительной ситуации передав вместо первого 
  параметра null

	promise.then(null, function(error){console.log(error)})

-сокращенно используют catch

	promise.catch(function(error){console.log(error)})	

Пример:

	let promise = new Promise(function(resolve, reject) {
	 setTimeout(function(){
	  let isError = false
	if (!isError){
	 resolve('success')
	}else{
	throw new Error ('false')
	reject(new Error('false')
	}, 3000})

	promise.catch(err=>console.log(err.message))





					Состояние промиса


-может находиться в трех состояниях: при создании в ожидании (pending), исполненным(fulfilled), отклоненным(rejected), вернув причину отказа

Для просмотра:

	let promise = new Promise(function(resolve, reject) {
	 setTimeout(function(){
	  let isError = true
	if (!isError){
	 resolve([1,2,3,4,5])
	}else{
	reject('error in promise')
	}},3000)})

	setInterval(function(){
	 console.log(promise)},1000)
	


					Цепочки промисов


	let promise = new Promise(function(resolve, reject){
	 setTimeout(function(){
	  resolve('string');
	}, 3000)})

	promise.then(
	 function(result) {
	  console.log(result)
	  return result+'1'
	 }
	).then(
	 function(result) {
	  console.log(result)
	  return result+'2'
	 }
	).then(
	 function(result) {
	  console.log(result)
	  return result+'3'
	 }
	).then(
	 function(result) {
	  console.log(result)
	 })



					Промисы внутри цепочки


-функции цепочки могут также возвращать промисы, и результат промиса попадет в следующий then

	let promise = new Promise(function(resolve, reject){
	 setTimeout(function(){
	  resolve('string');
	}, 3000)})


	promise.then(
	 function(result) {
	  return result+'1'
	 }
	).then(
	 function(result) {
	  return new Promise(function(resolve) {
	   setTimeout(function(){
	    resolve(result+'2')}
	   ,2000)}
	 )}
	).then(
	 function(result) {
	  return result+'3'
	 }
	).then(
	 function(result) {
	  console.log(result)
	 })



					Исключение в цепочках промисов

-Промис с ошибкой:

	let promise = new Promise(function(resolve, reject){
	 setTimeout(function(){
	  reject('error');
	}, 3000)})

-в цепочке промисов выполнение кода перейдет сразу к обработке ошибок:

	promise.then(
	 function (result) {
	  return result+'1'
	 }
	).then(
	 function (result) {
	  return result+'2'
	 }, function (error) {
	 ///обработка ошибки, промис перейдет сюда
	 }
	).then (
	 function (result) {
	  return result+'3'}
	)

или catch

	promise.then(
	 function (result) {
	  return result+'1'
	 }
	).then(
	 function (result) {
	  return result+'2'
	 },
	).catch (
	 function (error) {
	 ///обработка ошибки, промис перейдет сюда
	 }
	).then(
	 function (result) {
	  console.log(result)
	 },


!!!Существует 2 варианта действий:
   1) если функция справилась с ошибкой, то может вернутб результат через return и выполнение продолжится дальше по цепочке
   2) если функция не справилась с ошибкой, то может или ничего не возвращать, или выкинуть throw.
В случае с throw функция перейдет к следующей then или catch - что встретится раньше


КАК ПРАВИЛО ПЕРЕХВАТ ПРОИСХОДИТ В КОНЦЕ МЕТОДОМ CATCH

	promise.then(
	 function (result) {
	  return result+'1'
	 }
	).then(
	 function (result) {
	  return result+'2'}
	).catch(
	 function(error) {
	///попадаем сюда в случае ошибки
	 }
	)

Можно также добавить в throw в цепочку ПРАВИЛЬНЫЙ МЕТОД!!!!

	promise.then(
	 function (result) {
	  return result+'1'
	 }
	).then(
	 function (result) {
	 if (allIsGood) {
	  return result+'2'
	 }else{
	  throw new Error ('Error')
	 }
	}
	).then(
	 function (result) {
	  return result+'3'
	 }
	).catch(		///ближайший перехватчик
	 function(error){
	  if(ошибкаРешаема){
	   return data  	///отправляем на сл. then
	  }else{	
	console.log(error.message)  ///ничего не возвращаем или throw
	  }
	 }
	).then(
	 function (result) {
	  			//тут решаем ошибку
	 }
	)
	
!!! Сatch нужен для диагностики ошибка, а получение в then




					Работа с массивами промисов

	let promises = [
	 new Promise(resolve => setTimeout(()=>resolve(1), 1000))
	 new Promise(resolve => setTimeout(()=>resolve(2), 2000))
	 new Promise(resolve => setTimeout(()=>resolve(3), 3000))
	]

Promise.all - метод позволяющий выполнить код по окончанию выполнения всех промисов из массива
Promise.race - метод дожидается загрузки первого промиса, отбрасывая остальные

Оба метода возвращают новый промис. Для Promise.all результатом будет массив результатов всех промисов

Пример:

	let promises = [
	 new Promise(resolve => setTimeout(()=>resolve(1), 1000)),
	 new Promise(resolve => setTimeout(()=>resolve(2), 2000)),
	 new Promise(resolve => setTimeout(()=>resolve(3), 3000))
	]

	Promise.all(promises).then(function(res){console.log(res)}) //[ 1, 2, 3 ]

	Promise.race(promises).then(function(res){console.log(res)}) // 1

!!! Если хотя бы один промис из массива будет отключен, то промис с результатом перейдет в reject,
     поэту исключение ловим catch

	Promise.all(promises).then(function(res){console.log(res)}).catch(
	 function(err) {console.log(err)})


Практика:
недоработана***

	function setInt () {
	  return new Promise(function(resolve){
	   setTimeout(function() {
	    let random = Math.floor(Math.random()*10)
	    resolve random}, random*1000)

console.log(setInt)

let promise = new Promise(function(resolve, reject){
 	 setTimeout(function() {
	  
	let result = 1/Math.floor(Math.random()*6)
	
	if (result!==Infinity) {
	  resolve(result)
	}else{
	
	reject('деление на 0')}
	},3000)})

	promise.then(
	 function(result) {
	  console.log(result)},
	 function(reject){
	  console.log(reject)
	 })





					Создание сработавших промисов


Для создания сработавших промисов используют два метода:

Promise.resolve - создает успешно выполненный промис
Promise.reject - создает отклоненный промис

Параметром они получают то, что станет результатом промиса или ошибкой

	function func(num) {
	 if(num>0){
	 return new Promise(function
	  setTimeout(function(){
	   resolve(num*num)
	 }else{
	  reject 0}; //теперь получим число и then нельзя использовать
	 }, 3000)
	})
	}

	func(0).then(function(res) {
	 console.log(res)})

-Что бы можно было дальше использовать then спользуем метод

	function func(num) {
	 if(num>0){
	 return new Promise(function
	  setTimeout(function(){
	   resolve(num*num)
	 }else{
	  reject Promise.resolve(0)}; //Возвращаем промис, а не число
	 }, 3000)
	})
	}

-Если для чисел меньше 0

	function func(num) {
	 if(num>0){
	 return new Promise(function
	  setTimeout(function(){
	   resolve(num*num)
	 }else if(num==0){
	  return Promise.resolve(0); //Возвращаем промис, а не число
	}else{
	  return Promise.reject('incorrect number') //возвращаем исключение (отклоненный промис)
	 }, 3000)
	})
	}





					Промисификация асинхронного кода

-некоторый асинхронный функуционал может быть не действительным. Для этого создают оболочку ввиде промиса. Это и называется промисификацией

Пример 1: загрузка картинок


let images = ['k.jpg','a.jpg','b.jpg','c.jpg']

let promises = []
	
	function loadImage(path) {
	 return new Promise(function(resolve, reject) {
	  let image = document.createElement('img')
	  image.src = path
	  image.addEventListener('load', function(){
	  resolve(image);
	  })
	 image.addEventListener('error', function(){
	 reject(new Error('image"'+path+'"load Error'))
	})})}

for (let path of images){
promises.push(loadImage(path))}

console.log(promises)

////здесь проблема, мы получили массив промисов, но не можем запустить(((( Надо подумать


	Promise.all(promises).then(function(image){
	for(let promise of promises) {
	 document.body.appendChild(image)
	}}).catch(function(error){
	 console.log(error);
	})
	

Пример 2: /// ОДЕЛАТЬ((((


*/
	function DomLoad () {
return new Promise(function (resolve, reject) {
let b = false
window.addEventListener('DOMContentLoaded', function () {resolve b = false})
reject (new Error('Somethin wrong with DOM'))
})}

DomLoad().then

/*



					Проблема promise hell


-промисы также не решают проблему колбэк хела, и создают проблему промис хэла

	function getSmth(num){
	 return new Promise((resolve, reject) => {
	  setTimeout(()=> resolve(num*num)), 1000)
	})

	function func(){
	 getSmth(2).then(res1=>{//делаем что-то и возвращаем промис}
	          ).then(res2=>{//делаем что-то и возвращаем промис}
	          ).then(res3=>{//делаем что-то и возвращаем промис}
	          ).then(res4=>{//делаем что-то и возвращаем промис}
		)}
	func()

А если воспользоваться функцие два раза и просуммировать результаты

 	   function getSmth(num){
  	   return new Promise((resolve, reject) => {
  	    setTimeout(()=> resolve(num*num), 1000)
 	   })}
  	  function func(){
  	   getSmth(2).then(res1=>{
   	    getSmth(3).then(res2=>{console.log(res1+res2)
   	     })
   	    })
 	 }
    	func()




					Промисы в синхронном стиле

-синтаксис для решения проблемы промис хел



	function getSmth(num){
	 return new Promise((resolve, reject) => {
	  setTimeout(()=> resolve(num*num)), 1000)
	})

	

	function func(){
	 getSmth(2).then(res=>{console.log(res)}
		)}
	func()


async - объявление функции асинхронной

	async function (){}

await -специальная команда внутри аsync функции, которая заствляет ждать до исполнения кода, после чего
	команда вернет промис и код продолжится


	async function func(){
	 let res1 = await getSmth(2)
	 let res2 = await getSmth(4)
	 console.log(res1+res2) }
	func() 

вызов в цикле

	async function func(){
	 let arr = [1,2,3,4,5]
	 let sum = 0

	 for (let elem of arr) {
	  sum +=await getSmth(elem);}

	console.log(sum) }
	
	func()


ИСКЛЮЧЕНИЯ в асинхронном стиле:
-поддерживает try-catch
	
	async function func(){
	 try {
	  let res1 = await getSmth(2)
	  console.log(res1)}
	 catch{
	  console.log(err)
	 }
	}

	func() 



						Библиотеки снова????

существует несколько вариантов подключения библиотек:
1. Файлом в проекте и ссылкой на файл в html 

	<script src="path/biblioteca.js"></script>

2.CDN (client delivery network) - ссылка

	<script src="https://cdn.biblioteka.net/...../main.js"></script>

*при использовании популярных библиотек, вероятность сохранения ее кода в кэше
**главное неудобство-зависимость от CDN, а также созависимость одних библиотек+контроль версий



					Семантическое версионирование

Версии 0.0.0 , 1.12.0, 1.2.3

Все цифры версий исходят от правила xyz

	x-мажорная версия, когда сделаны обратно несовместимые API

	y-минорная версия, когда сделаны обратно совместимые API (новая функциональность)

	z-патч версия, исправлены баги






						URLSearchParams



-при работе с НТТР при передаче форм GET возникают строки 

	let paramString = 'a=1&b=2&c=3'

Для изменения значений используют метод URLSearchParams

Пример работы:

	let paramString = 'a=1&b=2&c=3'

	Let searchParams = new URLSearchParams = new URLSearchParams(paramsString)

get - получить значения параметра

	let res = searchParams.get('a')
	console.log(res) //a, для несуществующего параметра null

has - проверка наличия параметра

	let res = searchParams.has('a')
	console.log(res) //true, для несуществующего параметра false

toString - перевод в строку

	let res = searchParams.toString()
	console.log(res) //'a=1&b=2&c=3', для несуществующего параметра false

set - изменение параметров и добавление

	
	searchParams.set('b', 'x')

	let res = searchParams.toString()
	console.log(res) //'a=1&b=x&c=3'


	searchParams.set('d', '28')

	let res = searchParams.toString()
	console.log(res) //'a=1&b=x&c=3&d=28'

append - добавление параметров

	searchParams.append('e', '82')


	let res = searchParams.toString()
	console.log(res) //'a=1&b=x&c=3&d=28&e=28'

*если добавить существующий параметр, то метод добавит в конец одноименный параметр


delete - даление параметров

	searchParams.delete('b')

	let res = searchParams.toString()
	console.log(res) //'a=1&c=3&d=28&e=28'


Перебор параметров циклом:

	for (let p of searchParams) {
	 console.log(p)
	}

getAll - Несколько одинаковых параметров (что бы найти их):

	let paramString = 'a=1&a=2&b=2&c=3'

	let res = searchParams.getAll('a')
	console.dir(res) //[1,2]




						Работа с URL 

URL - класс для работы с адресами ссылок
Пример:

	let path = 'http://site.ru:3000/dir/eee/page.html#show?a=1&b=2&c=3'

	ler url = new URL(path)

protocol - получить протокол

	let res= url.protocol
	console.log(res) // 'http://'


host - получить имя домена с портом

	let res= url.host
	console.log(res) // 'site.ru:3000'


hostname - имя домена

	let res= url.hostname
	console.log(res) // 'site.ru'



port - порт

	let res= url.port
	console.log(res) // '3000'


pathname - только путь

	let res= url.pathname
	console.log(res) // '/dir/eee/page.html#show?a=1&b=2&c=3'


hash - значение хеша

	let res= url.hash
	console.log(res) // 'show'


search - получить строку ГЕТ параметров

	let res= url.search
	console.log(res) // 'a=1&b=2&c=3'


searchParams: получить в виде объекта

	let res= url.searchParams
	console.log(res) // 'Объект класса URLSearchParams'





			

						FORMS ФОРМЫ



-служат для отправки вводимых данных на сервер для последующей обработки
Пример how to do:


	<form>	//обязательный тег формы для отправки данных
	<input name='test1'>
	<input name='test2'>
	<input type='submit'>
	</form>

*Чтобы на сервере можно было получить данные формы им необходимо дать каждому инпуту имя, тогда данные придут на сервер в форме ключ-значение, где ключами будут имена элементов формы, а значения введенные данные


action - oбязательный атрибут для отправки формы, указывающий адрес


	<form action="/handler/">
	<input name='test1'>
	<input name='test2'>
	<input type='submit'>
	</form>


ТЕперь в файле server.js апишем обработчик адреса отправки формы

	export default {
	 "/handler/": function(data){ // в параметр попадут отправленные данные формы
	  console.log(data)
	 return 'form data received';
	}
































						Команда new Event

-конструктор событий с помощью которого можно создать объект события, а затем вызвать это событие с помощью метода
  dispatchEvent
 *(с помощью можно имитировать нажатие пользователя на кнопку, клик, фокус и т.д.) КРУТО!!!
 **созданное событие будет отличаться только event.isTrusted

	

	<button id="elem">text</button>

	let elem = document.querySelector('#elem')
	
	elem.addEventListener('click', function (){
	  alert('message') 
	  })

	elem.addEventListener('mouseover', function() {
	 let clickEvent = new Event('click')  //создаем событие

	 this.dispatchEvent(clickEvent);})  // имитируем клик


					
		

						Метод call 

call-обращение
-позволяет вызвать функцию с заданным контекстом. Первым параметром метода получает контекст, а остальными 
  параметрами - параметры функции

	<input id="elem" value="text">

	function func(param1, param2, param3){
	  console.log(this.value+param1+param2+param3)}

	let elem = document.querySelector('#elem')

	func.call(elem, 1,2,3)

*условно call создает дополнительный параеметр в функции


					







						Значение this

-ссылается на текущий объект (используется в функциях и в ООП)
  В функциях 


	<input id="input" value="text">

	let input = document.querySelector('#input')
	input.addEventListener('blur', func)

	function func(){
	  console.log(this.value)}

  В ООП


	class Student {
	 name;
	 surn;

	show(){
	  return this.name+' '+this.surn}
	};

	let stud = new Student
	stud.name = 'John';
	stud.surn = 'Smit';
	console.log(stud.show())























*/

/*						cssText

-свойство позволяет задать CSS стили массово и одной строкой (если свйоства есть, то перезапишуться)


	<p id = "elem"> </p>

	let elem = document.querySelector('#elem')

	elem.style.cssText = 'color:red; font-size:40px


*что бы предыдущие не перезаписывались:

	elem.style.cssText += 'color:red; font-size:40px'



-функция getComputedStyle - позволяет получить значение любого свойства (даже из файла с стилем)

	Параметром функция получает элемент, а возвращает ОБЪЕКТ с CSS свойствами


*/
















































