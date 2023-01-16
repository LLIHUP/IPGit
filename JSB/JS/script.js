"User strict";

// const arr = [1, 2, 3];
// const arrObj = {
//     a: 1,
//     1: 2,
//     2: 3,
//     abc: {
//         def: {

//         }
//     }
// };
// const f = 'b';

// // arrObj.b = '1234';
// arrObj['b'] = '1234';
// console.log(arrObj['b']);
// console.log(arrObj.b);
// console.log(arrObj);

// // const obj = { a: 1, b: 2 };
// const obj = {
//     'Anna': 500,
//     'Alice': 800
// };

// alert('Hello');

// const result = confirm('Are you hear?');
// console.log(result);
// const answer = +prompt('Вам есть 18?', '18');
// console.log(answer + 5);

// const answers = [];
// answers[0] = prompt('как ваше имя?', '');
// answers[1] = prompt('как ваше фамилия?', '');
// answers[2] = prompt('сколько вам лет?', '');

// console.log(typeof(answers));
// console.log(typeof(null));

// const category = 'toys';
// console.log(`https://dhsjhdjs.com/${category}/6`);

// const user = 'Sasha';
// alert(`Привет, ${user}`);

// console.log('arr' + "obj");
// console.log(4 + +"10");

// let incr = 10,
//     decr = 10;

// // incr++;
// // decr--;

// console.log(incr++);
// console.log(decr--);

// if (4 == 9) {
//     console.log('ok');
// } else {
//     console.log('Error');
// }



// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!'): console.log('Error');


// const num = '50';

// switch (num) {
//     case '49':
//         console.log('Не верно');
//         break;
//     case '100':
//         console.log('Опять не верно');
//         break;
//     case '50':
//         console.log('В точку!');
//         break;
//     default:
//         console.log('Не в этот раз');
// }

// const hamburger = 5;
// const fries = 0;
// if (hamburger && fries) {
//     console.log('я сыт!');
// } 


// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries === 1);
// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'fjdsgfhdsg');
// if (hamburger === 3 && cola === 1 && fries === 1) {
//     console.log('Все сыты!');
// } else {
//     console.log('Мы уходим!');
// }

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('Все сыты!');
} else {
    console.log('Мы уходим!');
}

console.log((hamburger === 3 && cola === 2 || fries === 3 && nuggets));

let johnReport, alexReport, samReport, mariReport = 'done';

console.log(johnReport || alexReport || samReport || mariReport)


console.log(NaN || 2 || undefined);

console.log(NaN && 2 && undefined);

console.log(1 && 2 && 3);

console.log(!1 && 2 || !3);

console.log(25 || null && !3);

console.log(NaN || null || !3 || undefined || 5);

console.log(NaN || null && !3 && undefined || 5);

console.log(5 === 5 && 3 > 1 || 5);

const hamburger = 3;
const fries = 2;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola || fries === 3 && nuggets) {
    console.log('Done!')
}