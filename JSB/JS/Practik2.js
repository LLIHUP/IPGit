'use strict';




// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько оцените его?', '');


// persona.movies[a] = [b];
// persona.movies[c] = [d];
// console.log(persona);
// const Tom = prompt('какой актур?', '');
// const nameActors = 'Имя';
// persona.actors[nameActors] = Tom;

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const persona = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         persona.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }

// }

// let num = 0;
// while (num < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         persona.movies[a] = b;
//         console.log('done');
//         num++;
//     } else {
//         console.log('error');
//         num--;

//     }
// }




//     if (persona.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');
// } else if (persona.count >= 10 && persona.count < 30) {
//     console.log('Вы классический зритель');
// } else if (persona.count >= 30) {
//     console.log('Вы киноман');
// } else {
//     console.log('Произошла ошибка');
// }

// console.log(persona);
// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage('hello world');
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);


// const logger = function() {
//     console.log('hello');
// };
// logger();

// const calc = (a, b) => {
//     console.log('text');
//     return a + b;
// };
// console.log(calc(1, 2));



// // const usdCurr = 50;
// const eurCurr = 32;

// function convert(amount, curr) {
//     console.log(curr * amount);
// }
// convert(500, usdCurr);
// convert(500, eurCurr);

// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//     console.log(curr * amount);
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }
// const res = convert(500, usdCurr);
// promotion(res);

// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) {
//             return;
//         }

//     }
//     console.log('done');
// }
// test();

// function sayHello(name) {

//     return `Привет, ${name}!`;


// };
// sayHello('Саша');
// console.log(sayHello);

// function returnNeighboringNumbers(num) {
//     // console.log([num - 1, num, num + 1]);
//     return [num - 1, num, num + 1];


// }
// // returnNeighboringNumbers(5);
// console.log(returnNeighboringNumbers(5));

// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;

//         } else {
//             str += `${num * i}---`;

//         }

//     }

//     return str;
// }

// console.log(getMathResult(5, 25));

// const res = getMathResult;
// console.log(res(50, 'ggg'));

// метод
// строки
// const str = 'teSt';
// const arr = [1, 2, 3];
// // console.log(arr.length);
// // console.log(str[2] = 'd');
// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());
// console.log(str);

// let fruit = 'Some fruit';

// console.log(fruit.indexOf('fruit'));


// const logg = 'Hello World';
// // console.log(logg.slice(6, 11));
// // console.log(logg.slice(6));
// // console.log(logg.slice(-5, -1));

// // console.log(logg.substring(5, 2));
// console.log(logg.substr(3, 5));

// // Числа


// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px';
// // console.log(parseInt(test));
// console.log(parseFloat(test));

// 1)


// let numberOfFilms;


// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     }
// }
// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };



// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }

//     }
// }
// rememberMyFilms();



// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка');
//     }
// }

// detectPersonalLevel();



// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);



// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i - 1] = genre;
//     }
// }

// writeYourGenres();



// function calculateVolumeAndArea(H) {
//     if (typeof(H) !== 'number' || H < 0 || !Number.isInteger(H)) {
//         return "При вычислении произошла ошибка";
//     }

//     let volume = 0,
//         area = 0;

//     volume = H * H * H;

//     area = 6 * (H * H);

//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// calculateVolumeAndArea(5);

// //console.log(calculateVolumeAndArea(5));


// function getCoupeNumber(Seat) {
//     if (typeof(Seat) !== 'number' || Seat < 0 || !Number.isInteger(Seat)) {
//         return 'Ошибка. Проверьте правильность введенного номера места';
//     } else if (Seat === 0 || Seat > 36) {
//         return 'Таких мест в вагоне не существует';
//     } else if (Seat >= 1 && Seat <= 4) {
//         return '1';
//     } else if (Seat >= 5 && Seat <= 8) {
//         return '2';
//     } else if (Seat >= 9 && Seat <= 12) {
//         return '3';
//     } else if (Seat >= 13 && Seat <= 16) {
//         return '4';
//     } else if (Seat >= 17 && Seat <= 20) {
//         return '5';
//     } else if (Seat >= 21 && Seat <= 24) {
//         return '6';
//     } else if (Seat >= 25 && Seat <= 28) {
//         return '7';
//     } else if (Seat >= 29 && Seat <= 32) {
//         return '8';
//     } else if (Seat >= 33 && Seat <= 36) {
//         return '9';
//     }
// }



// //console.log(getCoupeNumber(36));
// getCoupeNumber(6);

// function getTimeFromMinutes(Minut) {
//     if (typeof(Minut) !== 'number' || Minut < 0 || !Number.isInteger(Minut) || Minut > 600) {
//         return 'Ошибка, проверьте данные';
//     }

//     const hours = Math.trunc(Minut / 60);
//     const minutes = Minut % 60;

//     let hoursStr = '';
//     switch (hours) {
//         case 0:
//             hoursStr = 'часов';
//             break;
//         case 1:
//             hoursStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = 'часа';
//             break;
//         default:
//             hoursStr = 'часов';
//     }

//     return `Это ${hours} ${hoursStr} и ${minutes} минут`;
//     //return `Это ${hours} часа и ${minutes} минут`;
//     // Это 2 часа и 30 минут
// }
// console.log(getTimeFromMinutes(61));

// function findMaxNumber(a, b, c, d) {
//     if (typeof(a) !== 'number' ||
//         typeof(b) !== 'number' ||
//         typeof(c) !== 'number' ||
//         typeof(d) !== 'number') {
//         return 0;
//     } else {
//         return Math.max(a, b, c, d);
//     }
// }

// console.log(findMaxNumber(1, 2, 5.4, 4));



// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }

//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < num; i++) { // i=8
//         if (i + 1 === num) {
//             result += `${first}`;
//             // Без пробела в конце
//         } else {
//             result += `${first} `; // 0 1 1 2 3 5 8 13 21
//         }

//          let third = first + second; // 1 2 3 5 8 13 21 34 55

//         first = second; // 1 1 2 3 5 8  13 21 34
//         second = third; // 1 2 3 5 8 13 21 34 55
//     }

//     return result;
// }

// console.log(fib(9));

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     }
// }
// start();
//console.log(start());

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };



// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
//             b = prompt('На сколько оцените его?', '');
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }

//     }
// }
// rememberMyFilms();
// //console.log(rememberMyFilms());
// console.log(personalMovieDB);

function learnJS(lang, callback) {
    console.log(`я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}

learnJS('JS', done);