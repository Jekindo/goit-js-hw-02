// let input;
// const numbers = [];
// let total = 0;
// 
// while (input !== null) {
//     input = prompt('Давай число');
// 	
//     if (input !== null) {
//         numbers.push(Number(input));
//     }
// }
// 
// console.log(numbers);
// 
// if (numbers.length > 0) {
//     for (const number of numbers) {
//         total += number;
//     }
// }
// 
// console.log('Общая сумма чисел равна: ', total);

//! С проверкой

let input;
const numbers = [];
let total = 0;

while (input !== null) {
    input = prompt('Давай число');

    if (!isNaN(Number(input))) {
        numbers.push(Number(input));
    } else {
        alert('Было введено не число, попробуйте еще раз');
    }
}

console.log(numbers);

if (numbers.length > 0) {
    for (const number of numbers) {
        total += number;
    }
}

console.log('Общая сумма чисел равна: ', total);
