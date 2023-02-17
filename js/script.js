/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

"use strict"

/* const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); */


if (4 == 4) {
    console.log('Ok!');
} else {
    console.log('error');
}

const num1 = 50;
if (num1 < 49) {
    console.log("error");
} else if (num1 > 100) {
    console.log("too much");
} else {
    console.log("OK!");
}

//тернарный оператор

(num === 50) ? console.log("OK!") : console.log("error");

//switch

const num2 = 50;
switch (num2) {
    case 49:
        console.log('error');
        break;
    case 100:
        console.log('error');
        break;
    case 50:
        console.log('Ok!!!!');
        break;
    default:
        console.log('next time');
        break;
}



//логические операторы

const hamburger = true;
const fries = true;

if (hamburger && fries) {
    console.log('я сыт');
}

console.log((hamburger && fries));




const hamburger = 2;
const fries = 1;
const cola = 0;

console.log((hamburger === 3 && cola === 1 && fries === 1));

if (hamburger === 3 && cola === 1 && fries === 1) {
    console.log('все сыты');
} else {
    console.log('мы уходим');
}


console.log(1 && 0);
console.log(1 && 5);
console.log(null && 0);
console.log(0 && 'sdsdwddsd');


//или

const hamburger = 3;
const fries = 0;
const cola = 0;

if (hamburger || cola || fries) {
    console.log('все довольны');
} else {
    console.log('мы уходим');
}



let johnReport, alexReport, samReport, mariaReport = 'done';
console.log(johnReport || alexReport || samReport || mariaReport); 


//

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('все довольны');
} else {
    console.log('мы уходим');
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);


console.log(!0);


////////////////////////////////////////////////////////////////////////////




const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}



let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}




let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}


//Циклы

let num = 50;

while (num <= 55) {
    console.log(num);
    num++;    
}

do {
    console.log(num);
    num++; 
}
while (num < 55);


for (let i = 1; i < 8; i++) {
    console.log(i);
}


let num = 50;
for (let i = 1; i < 8; i++) {
    console.log(num);
    num++; 
}


for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue;
    }

    console.log(i);
}


//цикл в цикле и метки

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}


let result = '';
const length = 7;

for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) { 
        result += '*';
    }

    result += '\n';
}

console.log(result);



//метка
first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`Third level: ${k}`);  
        } 
    }
}

//ФУНКЦИИ

//Function declaration

let num = 20;

function showFirstMessage(text) {
    console.log(num);
    console.log(text);
}

showFirstMessage("Hello World!");



function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));


function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

//function expression

let logger = function() {
    console.log("Hello");
};

logger();

//стрелочная функция

const calc = (a, b) =>  a + b;
//const calc = (a, b) => { return a + b };
function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));



////
const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
    console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);  
////

const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

/* promotion(convert(500, usdCurr)); */
const res = convert(500, usdCurr);
promotion(res);

////// сметоды и свойства строк и чисел

const str = "teSt";

// console.log(str.[2] = 'd');

// console.log(str.toUpperCase( ));
console.log(str.toLowerCase( ));  

console.log(str);


const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));


const logg = "Hello world!";

console.log(logg.slice(6, 11));
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));



const num = 12.2;
console.log(Math.round(num));


const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));