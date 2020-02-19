// Функции wh_5;

// задание 1


// function removeChar(str) {
//     var splitString = str.split(""); //получаю массив из строки
//     splitString.pop(); //убираю первую букву
//     splitString.shift(); // убираю последнюю букву
//     var joinArray = splitString.join(""); // перевожу из массива в строку
//     console.log(joinArray);
//     return joinArray; // возвращаю 
// }
// removeChar("Busia");

// function getName() {
//     var name = prompt('Введите тему домашней работы');
//     console.log('Домашняя работа: ' + name);
// }

// function getAge() {
//     var age = prompt('Введите ФИО ');
//     console.log(age);
// }

// function getGroup() {
//     var Group = prompt('Введите название группы');
//     console.log('Выполнил: студент гр. ' + Group);
// }
// getGroup();
// getName();


// function isPalindrome(line) {
//     if (line === line.split('').reverse().join('')) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isPalindrome('racecar'));

// var isAnagram = function(test, original) {
//     if (test.length != original.length)
//         return false;
//     let mas1 = test.split('').sort().join('');
//     let mas2 = original.split('').sort().join('');
//     for (let i = 0; i < mas1.length; i++) {
//         if (mas1 != mas2) return false;
//         else return true;
//     }

// };

// isAnagram("dumble", "bumble");

// var isAnagram = function(test, original) {
//     // function Anagram(first,second) {
//     return original.toLowerCase().split('').sort().join() === test.toLowerCase().split('').sort().join();

// }

// function distinct(a) {
//     var arrNum = a.split("");
//     var arrCopy = arrNum.splice();
//     return [arrCopy] + arrNum;

// }

// console.log(distinct('1'));



function century(year) {

    if (year >= 1 && year <= 100) {
        cent = 1

    } else if (year >= 101 && year <= 200) {
        cent = 2

    } else if (year >= 201 && year <= 300) {
        cent = 3

    } else if (year >= 301 && year <= 400) {
        cent = 4

    } else if (year >= 401 && year <= 500) {
        cent = 5

    } else if (year >= 501 && year <= 600) {
        cent = 6

    } else if (year >= 601 && year <= 700) {
        cent = 7

    } else if (year >= 701 && year <= 800) {
        cent = 8

    } else if (year >= 801 && year <= 900) {
        cent = 9

    } else if (year >= 901 && year <= 1000) {
        cent = 10

    } else if (year >= 1001 && year <= 1100) {
        cent = 11

    } else if (year >= 1101 && year <= 1200) {
        cent = 12

    } else if (year >= 1201 && year <= 1300) {
        cent = 13

    } else if (year >= 1301 && year <= 1400) {
        cent = 14

    } else if (year >= 1401 && year <= 1500) {
        cent = 15

    } else if (year >= 1501 && year <= 1600) {
        cent = 16

    } else if (year >= 1601 && year <= 1700) {
        cent = 17

    } else if (year >= 1701 && year <= 1800) {
        cent = 18

    } else if (year >= 1801 && year <= 1900) {
        cent = 19

    } else if (year >= 1901 && year <= 2000) {
        cent = 20

    } else if (year >= 2001 && year <= 2100) {
        cent = 21

    } else if (year >= 2101 && year <= 2200) {
        cent = 22

    } else if (year >= 2201 && year <= 2300) {
        cent = 23

    }
    return cent;
}

console.log(century('1398'));