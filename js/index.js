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

