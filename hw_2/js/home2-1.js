// задание 2-1.1

// let name = prompt('Ваше имя?');
// console.log(name);

// let age = prompt('Ваш возраст?');
// console.log(age);

// let city = prompt('Ваш город?');
// console.log(city);

// let phone = prompt('Введите номер телефона');
// console.log(phone);

// let email = prompt('Введите емаил');
// console.log(email);

// let company = prompt('Название компании в котороый вы работаете');
// console.log(company);

// document.write('Меня зовут ' + name + '.');
// document.write(' Мне ' + age + 'лет. ');
// document.write('Я проживаю в ' + city);
// document.write(' И работаю в ' + company + '. ');
// document.write('Мои контактные даныне: ' + phone + '  ' + email + '.');



// //задание 2-1.2

// let ToDay = 2020;
// let BirthYear = (ToDay - age);

// document.write(name + ' родился в ')
// document.write(BirthYear + 'году');


// //задание 2-1.3
// let str = '342151';
// if (+str[0] + +str[1] + +str[2] == +str[3] + +str[4] + +str[5]) {
//     console.log('да');
// } else {
//     console.log('нет')
// }




// // задание 2-1.4

// let a;
// a = 100;
// if (a > 0) {
//     console.log('верно');
// } else {
//     console.log('не верно');
// }



// // задание 2-1.5

// let a = 10;
// let b = 2;
// let c = a + b;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// if (c > 1) {
//     console.log(c ** 2);
// } else {
//     console.log(a + b);
// }

// задание 2-1.6

// if (a > 2 && a < 11 || b >= 6 && b < 14) {
//     alert('верно');
// } else {
//     alert('не верно');
// }


// // задание 2-1.7

// let n = 60;
// if (n > 0 && n <= 15) {
//     alert('1');
// } else if (n > 16 && n <= 30) {
//     alert('2');
// } else if (n >= 31 && n <= 45) {
//     alert('3');
// } else if (n >= 46 && n <= 60) {
//     alert('4');
// }




// задание 2-1.9

// let day = 100;
// let year = day / 365;
// let month = day / 31;
// let week = day / 7;
// let hour = day * 24;
// let minutes = day * 1440;
// let sec = day * 86400;
// console.log(minutes);

// if (day < 365) {
//     alert('Меньше года')
// } else {
//     alert(year + ' лет');
// }

// if (day < 31) {
//     alert('Меньше месяца');
// } else {
//     alert(month + ' месяцев');
// }

// if (day < 7) {
//     alert('Меньше недели');
// } else {
//     alert(week + ' недель');
// }

// alert(hour + ' часов');
// alert(minutes + ' минут');
// alert(sec + ' секунд');



//  задание 2-1.8

// let day = 22;
// if (day >= 1 && day <= 10) {
//     alert('1');
// } else if (day >= 11 && day <= 20) {
//     alert('2');
// } else if (day >= 21 && day <= 31) {
//     alert('3');
// }

// //  задание 2-1.10

var month,
    season;

let day = prompt('введите день');
if (day >= 1 && day <= 30) {
    alert('Январь')
} else if (day >= 31 && day <= 60) {
    alert('Февраль')
} else if (day >= 61 && day <= 90) {
    alert('Март')
} else if (day >= 91 && day <= 120) {
    alert('Апрель')
} else if (day >= 121 && day <= 150) {
    alert('Май')
} else if (day >= 151 && day <= 180) {
    alert('Июнь')
} else if (day >= 181 && day <= 210) {
    alert('Июль')
} else if (day >= 211 && day <= 240) {
    alert('Август')
} else if (day >= 241 && day <= 270) {
    alert('Сентябрь')
} else if (day >= 271 && day <= 300) {
    alert('Октябрь')
} else if (day >= 301 && day <= 330) {
    alert('Ноябрь')
} else if (day >= 331 && day <= 365) {
    alert('Декабрь')
}






// let seasonName = season;
// switch (seasonName) {
//     case 1:
//         document.write('Зима');
//         break;
//     case 2:
//         document.write('Весна');
//         break;
//     case 3:
//         document.write('Лето');
//         break;
//     case 2:
//         document.write('Осень');
//         break;
// }