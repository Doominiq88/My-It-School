// функции 2

// // задача 1
// function numbers(a, b, c) {
//     let total = (a - b) / c;
//     console.log(total);
// }
// numbers(20, 10, 5);


// задача 2
// function numbers(a) {
//     let resultCube = Math.pow(a, 3)
//     console.log(resultCube);
//     let resultSqrt = Math.pow(a, 2)
//     console.log(resultSqrt);
// }
// numbers(6);



// // задача 3 Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.

// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(min(5, 2));

// function max(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(max(7, 10));



// задача 4 Напишите две функции: первая ф-ция должна возвращать массив с числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая – выводить полученный массив.

// arrNum = [];
// function arr() {
//     while (true) {
//         let num = prompt('Введите число', '');
//         if (num === " " || num === null || !isFinite(num)) break;
//         arrNum.push(+num);
//     }
// }
// arr();

// function showArr() {
//     document.write(arrNum);
// }
// showArr();

// // задача 5 Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

// function isEven(a) {
//     if (a % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     };
// }
// console.log(isEven(7));



// // задача 6 Напишите ф-цию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

// result = [];

// function newArr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (isEven(arr[i])) {
//             result.push(arr[i]);
//         }
//     }
// };

// newArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(result);

// animal = {
//     name: "dog",
//     legs: 4,
//     color: "white"
// };

// function animal(obj) {

//     return ('This ' + animal.color + " " + animal.name + ' has ' + animal.legs + ' legs.')
// }
// animal(obj);



// Воскресные задачи


// Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его
// цифры. И так, пока сумма не станет однозначным числом (9 и менее). Исп. рекурсию.

// function sumNumber(num) {
//     num = String(num);
//     let sum = 0;

//     // console.log(num + ':' + typeof num);
//     for (i = 0; i < num.length; i++) {
//         // console.log(num[i] + ':' + typeof num[i]);
//         sum += +num[i];
//     }
//     console.log(sum);
//     if (sum > 9) {
//         sumNumber(sum);
//     }
// }
// sumNumber(4653);
// // sumNumber(prompt('Введите число'));



// Задача звездочки

// Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер группы студента и
// выводящую введённые данные в следующем виде:
// *****************************
// * Домашняя работа: «Функции» *
// * Выполнил: студент гр. W4017 *
// * Иванов Иван Иванович *
// *****************************


// function card() {
//     let name = prompt('Имя');
//     let lastName = prompt('введите фамилию');
//     let secondName = prompt('Фамилия');
//     let group = prompt('Введите номер группы');
//     let strArr = [];

//     strArr = [];

//     strArr.push('Домашняя работа: Функции');
//     strArr.push('выполнил студент гр.' + group);
//     strArr.push(lastName + ' ' + name + ' ' + secondName);
//     console.log(strArr);

//     // let maxLength = (Math.max(strArr[0].length, strArr[1].length, strArr[2].length));
//     let maxLength = 0;
//     for (let i = 0; i < strArr.length; i++) {
//         if (strArr[i].length > maxLength) maxLength = strArr[i].length;
//     }
//     console.log(strArr);
//     console.log(maxLength);

//     for (let i = 1; i <= strArr.length + 2; i++) {
//         if (i == 1 || i == strArr.length + 2) {
//             console.log('*'.repeat(maxLength + 4));
//         } else {
//             console.log('* ' + strArr[i - 2] + ' '.repeat(maxLength - strArr[i - 2].length + '*'));
//         }
//     }
// }
// card();