//  Hw3// задача1

// let arr = [];

// for (let i = 0; i < 5; i++) {
//     arr[i] = i + 1
// };
// console.log(arr);

// ------------------------------------------------------------------

// задача 2

// let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] < 0)
//         console.log(arr[i]);
// }

// -------------------------------------------------------------------
// // задача 3 
// let numArr = [];
// for (let i = 23, result = 0; i < 57; i++) {
//     numArr[i] = i + 1;
// }
// console.log(numArr);



// let n = 23;
// while (n <= 57) {
//     console.log(n);
//     n++
// }

//for
// let arr = [];
// for (i = 23, result = 0; i <= 57; i++) {
//     result += i, console.log(i)
// }
// alert(result);

// -------------------------------------------------------------------

// // задача 4

// let arr = ['10', '20', '30', '50', '235', '3000'];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i][0] === '1' || arr[i][0] === '2' || arr[i][0] === '5') {
//         console.log(arr[i]);
//     }

// }

// -------------------------------------------------------------------

// // задача 5

// let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] == 'сб' || arr[i] == 'вс') {
//         document.write(arr[i].bold() + ' ')
//     } else document.write(arr[i] + ' ')
// }
// console.log(arr);

// -------------------------------------------------------------------

// // задача 6

// let arr = ['1', '2', '3', '4', '5'];
// arr.push('6')
// console.log(arr);
// console.log(arr[arr.length - 1]);

// -------------------------------------------------------------------

// // задача 7 (не сортирует) мое решение
// let arr = [];
// for (let i = 0; i < 1; i) {
//     arr[i] = prompt('введите число')
//     console.log(arr);
//     if (arr[i] === '') {
//         break
//     } else {
//         document.write(arr);
//     }
// }



// задача 7 решение

// arrNum = [];
// while (true) {
//     let value = prompt('введите');
//     if (value === 0 || value != false) {
//         arrNum.push(+value);
//     } else {
//         break
//     }
// }
// console.log(arrNum);
// arrNum.sort(function(a, b) {
//     return a - b;
// });
// console.log(arrNum);
//--------------------------------------------------------------------

//задача 8

// let arr = [12, false, 'Текст', 4, 2, -5, 0];
// let i = arr.length;
// while (i-- != 0) {
//     document.write(arr[i] + " ");
// }

// let styles = ['Блюз', 'Джаз'];
// styles.push('Рок-н-ролл')
// console.log(styles);
// styles.splice(1, 1, 'Классика');
// console.log(styles);
// console.log(styles.splice(0, 1));
// styles.unshift('Рэп', 'Рэгги');
// console.log(styles)

// -------------------------------------------------------------------

// задание 9

// let arr = [5, 9, 21, , , 9, 78, , , , 6];
// let t = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == undefined) {
//         t++;
//     }
// }
// document.write(t);

// // задание 10
// let arr = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2],
//     sum = 0;
// let fNull = arr.indexOf(0),
//     lNull = arr.lastIndexOf(0);

// // Console.log(fNull, lNull);
// if (fNull != -1 && lNull != -1) {

//     for (let i = fNull + 1; i < lNull; i++) {
//         sum += arr[i];
//     }
// }
// console.log(sum);

// // задание 11

// let h = prompt('высота треугольника');
// console.log(h);
// for (let i = 1; i <= h; i++) {
//     let s = '';
//     s = ' '.repeat(h - i);
//     for (let j = 1; j <= i + i - 1; j++) {
//         s += '^';
//     }
//     console.log(s);
// }