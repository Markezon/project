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

console.log(personalMovieDB);


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

 */
//Циклы

/* let num = 50;

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

 */
//цикл в цикле и метки

/* for (let i = 0; i < 3; i++) {
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


 */
//метка
/* first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`Third level: ${k}`);
        }
    }
}
 */

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/



const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');   

    if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }    
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);