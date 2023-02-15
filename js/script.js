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

const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');

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

console.log(personalMovieDB);


if (4 == 4) {
    console.log('Ok!');
} else {
    console.log('error');
}

const num = 50;
if (num < 49) {
    console.log("error");
} else if (num > 100) {
    console.log("too much");
} else {
    console.log("OK!");
}

//тернарный оператор

(num === 50) ? console.log("OK!") : console.log("error");

//switch

const num = 50;
switch (num) {
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

