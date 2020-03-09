// home_work 6

// // задача 1
// var str = 'aaa@bbb@ccc';
// console.log(str.replace(/@/g, '!'));

// задача 2

// let date = '2025-12-31';
// // date = date.replace(/-/g, ' ');
// console.log(date.replace(/(2025)-(12)-(31)/, '$3/$2/$1'));

// // задача 3
// var str = 'Я учу JavaScript';
// var newStr = str.slice(1, 5);
// console.log(newStr);
// var newStr2 = str.slice(5, 16)
// console.log(newStr2);
// console.log('-----------------');
// var str = 'Я учу JavaScript';
// var newStr = str.substring(1, 5);
// console.log(newStr);
// var newStr2 = str.substring(5, 16)
// console.log(newStr2);
// console.log('-----------------');
// var newStr3 = str.substr(1, 4);
// console.log(newStr3);
// var newStr3 = str.substr(5, 11);
// console.log(newStr3);

// // задача 4

// let arr = [4, 2, 5, 19, 13, 0, 10];
// let sum = 0;
// let cube;
// for (let i = 0; i < arr.length; i++) {
//     cube = arr[i] * arr[i] * arr[i];
//     //  console.log(cube);
//     // cube = Math.pow(arr[i],3)
//     sum = sum + Math.pow(arr[i], 3);
// }
// console.log(sum);
// console.log(Math.sqrt(sum));



// // задача 5

// let a, b;
// a = 3;
// b = 5;
// let c = (a - b);
// if (a < b) {
//     console.log(Math.abs(c));
// } else if (a > b) {
//     console.log(c)
// } else if (a == b) {
//     console.log(c);
// }



// function century1(year) {

//     if (year % 100 == 0) {
//         return century = year / 100
//     } else if (year % 100 != 0) {
//         return century = Math.ceil(year / 100);
//     }
// }
// console.log(century1(2001));

// let duplicateArr = [1, 1, 2, 3, 4, 4, 5, 9];

// let uniqArr = [...new Set(duplicateArr)];

// function distinct(a) {

// }
// console.log(uniqArr);