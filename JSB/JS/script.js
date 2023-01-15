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


const num = '50';

switch (num) {
    case '49':
        console.log('Не верно');
        break;
    case '100':
        console.log('Опять не верно');
        break;
    case '50':
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот раз');
}