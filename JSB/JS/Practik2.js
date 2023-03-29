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

// function learnJS(lang, callback) {
//     console.log(`я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок!');
// }

// learnJS('JS', done);

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('Test'); //
//     }
// };

// options.makeTest();

// const { border, bg } = options.colors;
// console.log(border);

//console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;
// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имееи значение ${options[key][i]} `);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имееи значение ${options[key]} `);
//         counter++;
//     }

// }

// console.log(counter);


// const arr = [2, 25, 43, 16, 3];

// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);
// arr.forEach(function(item, i, arr) {
// console.log(`${i}: ${item} внутри массива ${arr}`)
// });

//arr.pop();
//arr.push(10);
//console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const product = str.split(", ");
// product.sort();
// console.log(product.join('; '));


// let a = 5,
//     b = a;
// b = b + a;
// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };
// const copy = obj; //ссылка
// copy.a = 10;
// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// console.log(newNumbers);
// console.log(numbers);


// const add = {
//     d: 17,
//     e: 20
// };

//console.log(Object.assign(numbers, add));
// const clone = Object.assign({}, add);

// clone.d = 20;
// console.log(add);
// console.log(clone);

// const oldArr = ['a', 'b', 'c'];
// const newArr = oldArr.slice();
// newArr[1] = 'asasa';
// console.log(newArr);
// console.log(oldArr);

// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'inst', 'facebook'];
// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);

// }

// const num = [2, 5, 7];


// log(...num);


// const array = ['a', 'b'];
// const newArray = [...array];
// console.log(newArray);

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj ={...q};


// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan) {
//         const { age } = plan;
//         const { languages } = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;

//         languages.forEach(function(lang) {
//             str += `${lang.toUpperCase()} `;
//         });

//         return str;
//     }
// };


// // personalPlanPeter.showAgeAndLangs(personalPlanPeter);
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// function showExperience(plan) {
//     return plan.skills.exp;

// }

// console.log(showExperience(personalPlanPeter));




// function showProgrammingLangs(plan) {
//     let str = '';
//     const { programmingLangs } = plan.skills;
//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//     }

//     return str;
// }

// console.log(showProgrammingLangs(personalPlanPeter));


// const family = ['Peter', 'Ann', 'Alex', 'Linda'];
// const test = [];

// function showFamily(arr) {
//     let str = '';
//     if (arr.length === 0) {
//         return str += `Семья пуста`;
//     } else {
//         str += `Семья состоит из:`;
//     }

//     for (let key of arr) {
//         str += ` ${key}`;
//     }

//     return str;

// }
// console.log(showFamily(test));
// console.log(showFamily(family));




// // const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// // function standardizeStrings(arr) {
// //     arr.forEach(city => {
// //         console.log(city.toLowerCase())
// //     })
// // }

// // standardizeStrings(favoriteCities);

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(function(city, index) {
//         console.log(index, city.toLocaleLowerCase());
//     });
// }

// standardizeStrings(favoriteCities);

// const myArray = ['foo', 'bar', 'baz'];
// myArray.forEach(function(item, index) {
//     console.log(index, item);
// });


// const someString = 'This is some strange string';

// function reverse(str) {
//     if (typeof(str) !== 'string') {
//         return "Ошибка!";
//     }
//     const arr = str.split('');
//     const reversedArr = arr.reverse();
//     const reversedStr = reversedArr.join('');

//     return reversedStr;

// }
// reverse(someString);

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// console.log([...baseCurrencies, ...additionalCurrencies]);

// function availableCurr(arr, missingCurr) {
//     let str = '';
//     arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

//     arr.forEach(function(curr, i) {
//         if (curr !== missingCurr) {
//             str += `${curr}\n`;
//         }
//     });

//     // Или
//     // for (let i = 0; i < arr.length; i++) {
//     //     if (arr[i] === missingCurr) {
//     //         continue;
//     //     }
//     //     str += `${arr[i]}\n`;
//     // }

//     return str;
// }

// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));


// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

// const jonh = Object.create(soldier);



// // const jonh = {
// //     health: 100
// // };

// // jonh.__proto__ = soldier;

// // Object.setPrototypeOf(jonh, soldier);

// // console.log(jonh);
// // console.log(jonh.armor);

// jonh.sayHello();

// Практика часть 4

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     rememberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?', ''),
//                 b = prompt('На сколько оцените его?', '');
//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }


//         }
//         console.log(personalMovieDB.movies);
//     },
//     start: function() {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

//         }
//     },
//     detectPersonalLevel: function() {
//         {
//             if (personalMovieDB.count < 10) {
//                 console.log('Просмотрено довольно мало фильмов');
//             } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//                 console.log('Вы классический зритель');
//             } else if (personalMovieDB.count >= 30) {
//                 console.log('Вы киноман');
//             } else {
//                 console.log('Произошла ошибка');
//             }
//         }
//     },
//     showMyDB: function(hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }

//     },
//     writeYourGenres: function() {
//         for (let i = 1; i <= 3; i++) {
//             let genre = prompt(`Ваш любимый жанр под номером ${i}`);
//             if (genre === '' || genre == null) {
//                 console.log('Вы ввели не корректные данные! или не ввели их вообще');
//                 i--;
//             } else {
//                 personalMovieDB.genres[i - 1] = genre;
//             }

//             personalMovieDB.genres.forEach((item, i) => {
//                 console.log(`Любимый жанр ${i+1} - это ${item}`);
//             });

//         }
//     }


// };

// personalMovieDB.start();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.rememberMyFilms();

// const shoppingMallData = {
//     shops: [{
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// };

// function isBudgetEnough(data) {

//     function isBudgetEnough(data) {
//         // вычисляем общую площадь всех магазинов
//         let totalArea = 0;
//         for (let i = 0; i < data.shops.length; i++) {
//             totalArea += data.shops[i].width * data.shops[i].length;
//         }

//         // вычисляем общий объем торгового центра
//         let totalVolume = totalArea * data.height;

//         // вычисляем стоимость отопления всего торгового центра
//         let heatingCost = totalVolume * data.moneyPer1m3;

//         // проверяем, хватает ли бюджета на отопление всего торгового центра
//         if (heatingCost <= data.budget) {
//             return 'Бюджета достаточно';
//         } else {
//             return 'Бюджета недостаточно';
//         }
//     }
// }
// isBudgetEnough(shoppingMallData);


// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     const a = [],
//         b = [],
//         c = [],
//         rest = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             a.push(arr[i]);
//         } else if (i < 6) {
//             b.push(arr[i]);
//         } else if (i < 9) {
//             c.push(arr[i]);
//         } else {
//             rest.push(arr[i]);
//         }
//     }
//     return [a, b, c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
// }

// console.log(sortStudentsByGroups(students));



// to string

// // 1
// console.log(typeof(String(null)));
// console.log(typeof(String(4)));

// // 2
// console.log(typeof(5 + ''));

// const num = 5;
// console.log('https://' + num);

// const fontSize = 26 + 'px';

// // to number

// //1
// console.log(typeof(Number('4')));

// // 2

// console.log(typeof(+'5'));

// // 3
// console.log(typeof(parseInt('15px', 10)));

// let ans = +prompt('ghghgh', '');

// // to boolean

// // 1
// let swic = null;
// if (swic) {
//     console.log('working...');
// }

// swic = 1;
// if (swic) {
//     console.log('working...');
// }
// // 2
// console.log(typeof(Boolean('4')));

// // 3
// console.log(typeof(!!'ddddd'));