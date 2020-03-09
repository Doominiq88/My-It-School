function getFunction(type, string) {

    let div1 = document.createElement('div');
    div1.style.cssText = "width:200px; height:100px; border-radius: 10px; font-family: Arial; font-size: 18px; font-weight: bold;";

    if (type == 'error') {
        div1.classList.add('error');
    } else if (type == 'msg') {
        div1.classList.add('msg');

    } else if (type == 'alert') {
        div1.classList.add('alert');
    }

    div1.innerHTML = string;

    let div = document.querySelector('.general');

    if (!div) {
        div = document.createElement('div');
        div.className = "general";
        document.body.appendChild(div);
        div.style.cssText = "width:500px; height:500px";
    };

    div.appendChild(div1);

    setTimeout(function() {
        div.remove(div1);
    }, 3000);
};

let value = location.search.toString();
console.log(value);

newValue = value.split('&');
console.log(newValue);

let value1 = newValue[0];
value1 = value1.split('=');
let type = value1[1];
// console.log(type);

let value2 = newValue[1].split('=');
let string = value2[1];
console.log(string)

getFunction(type, string);