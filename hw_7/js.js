// // объект

// let Calc = function() {
//     this.get = function() {
//         this.a = +prompt('Введите число а');
//         this.operator = prompt('Введите операцию');
//         this.b = +prompt('Введите число b');

//         this.operation();
//     };
//     this.operation = function() {
//         switch (this.operator) {
//             case '+':
//                 this.result = this.a + this.b;
//                 break;
//             case '-':
//                 this.result = this.a - this.b;
//                 break;
//             case '/':
//                 this.result = this.a / this.b;
//                 break;
//             case '*':
//                 this.result = this.a * this.b;
//                 break;
//         }
//         this.showResult()
//     };
//     this.showResult = function() {
//         alert(this.a + ' ' + this.operator + ' ' + this.b + ' = ' + this.result);
//     };
// };

// let calc = new Calc();
// calc.get();


// Мультиварка (slow cooker);
let Tech = function(power) {
    let status = false;
    power = power || 0;
    this.anable = function() {
        status = true;
    };
    this.disable = function() {
        status = false;
    };

    this.getStatus = function() {
        return status
    };

    this.getPower = function() {
        return power
    };

};

let SlowCooker = function(power) {
    Tech.apply(this, arguments);
    let run = true;
    this.on = function() {
        run = true;
    };
    this.off = function() {
        run = false;
    };
};

let slowCooker = new SlowCooker(800);
console.log(slowCooker);