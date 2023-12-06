"use strict";

// window.alert('Hello Script!');
// window.alert = 5;
// console.log(window);

// let gLet = 5;
// alert(window.gLet);

// window.isUser = {
//   name: "Roman",
//   lastName: "Chaban",
// };

// alert(isUser['lastName']);

// window.Promise = null;

// if (!window.Promise) {
//   alert("Твій браузер застрів!");
// } else {
//   alert("Твій браузер використовує Promise!");
// }

// function sayHi () {
//   alert('Hello');
// }

// console.log(sayHi.name);

// let sayHi = function () {
//   alert("Hello");
// };

// alert(sayHi.name);

// function f(sayHi = function () {}) {
//   alert(sayHi.name);
// }

// f();

// function getFuncLength (a, b, c) {
//   console.log(`Function length is: ${getFuncLength.length}`);
// }

// getFuncLength();

// function sayCounter(counter) {
//   sayCounter.counter++;
// }

// sayCounter.counter = 0;

// sayCounter();
// sayCounter();
// sayCounter();
// sayCounter();
// sayCounter();
// sayCounter();

// alert(`Фукнція sayCounter була викликана ${sayCounter.counter} разів`);

// function makeCounter() {
//   function counter() {
//     return counter.count++;
//   }
//   counter.count = 1;
//   return counter;
// }

// let counter = makeCounter(10);

// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());

// let sayHi = function say(who) {
//   alert(`Hello ${who}`);
//   return say('Ivan');
// };

// sayHi('Roman');

// let sayHi = function say(who) {
//   if (who) {
//     alert(`Hello ${who}`);
//   } else {
//     say("Guest");
//   }
// };

// let welcome = sayHi;

// sayHi = null;

// welcome("Roman Chaban");

// function sum(a) {
//   let currentSum = a;

//   function f(b) {
//     currentSum += b;
//     return f;
//   }

//   f.toString = function () {
//     return currentSum;
//   };
//   return f;
// }

// alert(sum(10)(20));

// let func = new Function('a', 'b' , 'return a + b');
// console.log(func(10, 20));

// let sayGreeting = new Function(
//   "greet",
//   "name",
//   `return console.log(greet + ' ' + name)`
// );

// sayGreeting("Hello", "Roman");

// let double = new Function ('a', 'b' , 'return a + b');

// console.log(double(10, 5));

// let timeId = setTimeout(() => {
//   console.log('Hello log!');
// }, 2000);

// const sayHi = (name) => {
//   console.log(`Hello ${name}!`);
// }

// setTimeout(sayHi, 2000, 'Roman');

// setTimeout('alert(\'Hello\')', 2000);

// setTimeout(() => console.log('Roman Chaban'), 3000);

// let timerId = setTimeout(() => alert('Hello world!'), 1000);
// alert(timerId);
// clearTimeout(timerId);
// alert(timerId);

// let timeId = setInterval(() => alert("Hello!"), 2000);
// setTimeout(() => { setInterval(timeId), alert('Stop');}, 5000);

// let timeId = setInterval(() => {alert('Hello!');}, 2000);

// let timerId = setTimeout(function tick() {
//   alert("Tick");
//   timerId = setTimeout(tick, 2000);
// });

// setTimeout(() => alert('Hello'), 0);

// alert('world!');

// const printNumbers = (from, to) => {
//   setInterval(printNumbers, 100, from, to);
// };
// alert(printNumbers(1, 10));

// let timerId = setTimeout(() => console.log('Hello User'), 1500);

// const sayHello = (message, name) => {
//   return alert(message + " " + name);
// };

// setTimeout(sayHello, 2000, 'Hello', 'Roman');

// function sayHi(who, greet) {
//   console.log(`${greet}, ${who}`);
// }

// setTimeout(sayHi, 1000, 'JS', 'Hello');
// const sayHello = (who, message) => {
// return alert(`${who}, ${message}`);
// };
// setTimeout(sayHello, 2000, 'Roman', 'Hello');

// setTimeout(() => alert("hello"), 1000);

// let timerId = setTimeout(() => alert("Hello"));
// alert(timerId);

// clearTimeout(timerId);
// alert(timerId);

// let timerId = setInterval(() => alert('Hello'), 2000);
// setTimeout(() => {clearInterval(timerId); alert('Stop')}, 5000);

// let timerId = setTimeout(function tick () {
//   alert('tick');
//   timerId = setTimeout(tick, 2000);
// },2000);

// let setTimer = setTimeout(function tick() {
//   alert("Tick tack");
//   setTimer = setTimeout(tick, 1000);
// }, 1000);

// alert("Roman");

// setTimeout(() => alert("Hello"));

// let start = Date.now();
// let times = [];

// setTimeout(function run() {
//   times.push(Date.now() - start);
//   if (start + 100 < Date.now()) alert(times);
//   else setTimeout(run);
// });

// const printNumbers = (from, to) => {
//   let current = from;

//   let timerId = setInterval(function () {
//     alert(current);
//     if (current == to) {
//       clearInterval(timerId);
//     }
//     current++;
//   }, 1000);
// };

// alert(printNumbers(1, 10));

// function printNumbers(from, to) {
//   let current = from;

//   setTimeout(function go() {
//     alert(current);
//     if (current < to) {
//       setTimeout(go, 1000);
//     }
//     current++;
//   }, 1000);
// }

// printNumbers(1, 5);

// setTimeout(() => {
//     printHello('Hello');
// }, 0);

// console.log('JS');

// let timerId = setInterval(printHello, 500, "Hello");
// clearTimeout(timerId);

// const printHello = (text) => {
//   console.log(text);
// };

// const customSetInterval = (func, interval, ...params) => {
//   setTimeout(() => {
//     func(...params);
//     customSetInterval(func, interval, ...params);
//   }, interval);
// };

// customSetInterval(printHello, 500, "Hello");

// showMessage();

// function showMessage() {
//   console.log("Hello world!");
// }

// showMessage();

// function getSum() {
//   let numOne, numTwo;
//   function getNumOne() {
//     numOne = 2;
//   }

//   function getNumTwo() {
//     numTwo = 8;
//   }
//   getNumOne();
//   getNumTwo();
//   let numSum = numOne + numTwo;
//   console.log(numSum);
// }
// getSum();

// if ( 2 > 1) {
//   function getSum () {
//     let numOne, numTwo;

//     function getNumOne () {
//       numOne = 2;
//     }
//     function getNumTwo () {
//       numTwo = 8;
//     }
//     getNumOne();
//     getNumTwo();
//     let numSum = numOne + numTwo;
//     console.log(numSum);
//   }
// }
// getSum();

// function sayHi() {
//   console.log("Hello");
// }
// setTimeout(sayHi, 1000);

// function greeting(greet, name) {
//   console.log(`${greet}, ${name}`);
// }

// setTimeout(greeting, 2000, "Hello", "Roman");

// setTimeout(() => alert('Hello'), 2000);

// let timerId = setTimeout(() => console.log("Hello world!"), 3000);
// alert(timerId);

// clearTimeout(timerId);
// alert(timerId);
// let timerId = setInterval(() => alert('Hello'), 2000);
// setTimeout(() => {clearInterval(timerId), alert('Stop');}, 5000);

// let timerId = setTimeout(function tick() {
//   alert("tick");
//   timerId = setTimeout(tick, 2000);
// }, 2000);

// setTimeout(() => alert('world!'), 0);
// alert('Hello');

// function printNumbers(from, to) {
//   let current = from;

//   let timerId = setInterval(function () {
//     alert(current);
//     if (current === to) {
//       clearInterval(timerId);
//     }
//     current++;
//   }, 1000);
// }

// printNumbers(5,10);

// const printFirstAndLastNames = (firstName, lastName) => {
//   return console.log(`${firstName} ${lastName}`);
// };
// setInterval(printFirstAndLastNames, 500, "Roman", "Chaban");

// let timerId = setTimeout(() => alert('Hello world!'), 2500);

// function sayHi () {
//   console.log('Hello world!');
// }
// setTimeout(sayHi, 1500);

// function sayHi(msg, name) {
// console.log(`${msg} ${name}`);
// }
// setTimeout(sayHi, 2000, 'Hello', 'Ivan');
// setTimeout("alert('Hello')", 3000);
// setTimeout(() => alert('Hello world!'), 2000);

// let timerId = setTimeout(function tick () {
//   alert('Nothing')
// }, 1500);
// alert(timerId);

// clearTimeout(timerId);
// alert(timerId);

// let timerId = setTimeout(function tick() {
//   alert("tick");
//   timerId = setTimeout(tick, 500);
// }, 500);

// setTimeout(() => alert('world!'));
// alert('Hello');

// const printNumbers = (from, to) => {
//   let current = from;

//   let timerId = setInterval(function () {
//     alert(current);
//     if (current == to) {
//       clearInterval(timerId);
//     }
//     current++;
//   }, 1000);
// };

// printNumbers(5, 10);

// const printName = function (text) {
//   // console.log(this);
//   console.log(`${text} ${this.name} ${this.lastName}`);
//   console.log(`User age is: ${this.age}`);
// };

// const user = {
//   name: "Roman",
//   lastName: 'Chaban',
//   age: 22,
// };

// printName.apply(user, ["Hello"]);

// function dobule(a, b) {
//   console.log(a * b);
// }

// let goToDoubleNumbers = dobule.bind(null, 2);

// goToDoubleNumbers(4);
// goToDoubleNumbers(5);
// goToDoubleNumbers(6);
// console.log(this);


