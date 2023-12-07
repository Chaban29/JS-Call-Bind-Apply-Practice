"use strict";

window.alert('Hello Script!');
window.alert = 5;
console.log(window);

let gLet = 5;
alert(window.gLet);

window.isUser = {
  name: "Roman",
  lastName: "Chaban",
};

alert(isUser['lastName']);

window.Promise = null;

if (!window.Promise) {
  alert("Твій браузер застрів!");
} else {
  alert("Твій браузер використовує Promise!");
}

function sayHi () {
  alert('Hello');
}

console.log(sayHi.name);

let sayHi = function () {
  alert("Hello");
};

alert(sayHi.name);

function f(sayHi = function () {}) {
  alert(sayHi.name);
}

f();

function getFuncLength (a, b, c) {
  console.log(`Function length is: ${getFuncLength.length}`);
}

getFuncLength();

function sayCounter(counter) {
  sayCounter.counter++;
}

sayCounter.counter = 0;

sayCounter();
sayCounter();
sayCounter();
sayCounter();
sayCounter();
sayCounter();

alert(`Фукнція sayCounter була викликана ${sayCounter.counter} разів`);

function makeCounter() {
  function counter() {
    return counter.count++;
  }
  counter.count = 1;
  return counter;
}

let counter = makeCounter(10);

alert(counter());
alert(counter());
alert(counter());
alert(counter());

let sayHi = function say(who) {
  alert(`Hello ${who}`);
  return say('Ivan');
};

sayHi('Roman');

let sayHi = function say(who) {
  if (who) {
    alert(`Hello ${who}`);
  } else {
    say("Guest");
  }
};

let welcome = sayHi;

sayHi = null;

welcome("Roman Chaban");

function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function () {
    return currentSum;
  };
  return f;
}

alert(sum(10)(20));

let func = new Function('a', 'b' , 'return a + b');
console.log(func(10, 20));

let sayGreeting = new Function(
  "greet",
  "name",
  `return console.log(greet + ' ' + name)`
);

sayGreeting("Hello", "Roman");

let double = new Function ('a', 'b' , 'return a + b');

console.log(double(10, 5));

let timeId = setTimeout(() => {
  console.log('Hello log!');
}, 2000);

const sayHi = (name) => {
  console.log(`Hello ${name}!`);
}

setTimeout(sayHi, 2000, 'Roman');

setTimeout('alert(\'Hello\')', 2000);

setTimeout(() => console.log('Roman Chaban'), 3000);

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

setTimeout(() => alert('Hello'), 0);

alert('world!');

const printNumbers = (from, to) => {
  setInterval(printNumbers, 100, from, to);
};
alert(printNumbers(1, 10));

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

let setTimer = setTimeout(function tick() {
  alert("Tick tack");
  setTimer = setTimeout(tick, 1000);
}, 1000);

alert("Roman");

setTimeout(() => alert("Hello"));

let start = Date.now();
let times = [];

setTimeout(function run() {
  times.push(Date.now() - start);
  if (start + 100 < Date.now()) alert(times);
  else setTimeout(run);
});

const printNumbers = (from, to) => {
  let current = from;

  let timerId = setInterval(function () {
    alert(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
};

alert(printNumbers(1, 10));

function printNumbers(from, to) {
  let current = from;

  setTimeout(function go() {
    alert(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

printNumbers(1, 5);

setTimeout(() => {
    printHello('Hello');
}, 0);

console.log('JS');

// let timerId = setInterval(printHello, 500, "Hello");
// clearTimeout(timerId);

const printHello = (text) => {
  console.log(text);
};

const customSetInterval = (func, interval, ...params) => {
  setTimeout(() => {
    func(...params);
    customSetInterval(func, interval, ...params);
  }, interval);
};

customSetInterval(printHello, 500, "Hello");

showMessage();

function showMessage() {
  console.log("Hello world!");
}

showMessage();

function getSum() {
  let numOne, numTwo;
  function getNumOne() {
    numOne = 2;
  }

  function getNumTwo() {
    numTwo = 8;
  }
  getNumOne();
  getNumTwo();
  let numSum = numOne + numTwo;
  console.log(numSum);
}
getSum();

if ( 2 > 1) {
  function getSum () {
    let numOne, numTwo;

    function getNumOne () {
      numOne = 2;
    }
    function getNumTwo () {
      numTwo = 8;
    }
    getNumOne();
    getNumTwo();
    let numSum = numOne + numTwo;
    console.log(numSum);
  }
}
getSum();

function sayHi() {
  console.log("Hello");
}
setTimeout(sayHi, 1000);

function greeting(greet, name) {
  console.log(`${greet}, ${name}`);
}

setTimeout(greeting, 2000, "Hello", "Roman");

setTimeout(() => alert('Hello'), 2000);

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

setTimeout(() => alert('world!'), 0);
alert('Hello');

function printNumbers(from, to) {
  let current = from;

  let timerId = setInterval(function () {
    alert(current);
    if (current === to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

printNumbers(5,10);

const printFirstAndLastNames = (firstName, lastName) => {
  return console.log(`${firstName} ${lastName}`);
};
setInterval(printFirstAndLastNames, 500, "Roman", "Chaban");

let timerId = setTimeout(() => alert('Hello world!'), 2500);

function sayHi () {
  console.log('Hello world!');
}
setTimeout(sayHi, 1500);

function sayHi(msg, name) {
console.log(`${msg} ${name}`);
}
setTimeout(sayHi, 2000, 'Hello', 'Ivan');
setTimeout("alert('Hello')", 3000);
setTimeout(() => alert('Hello world!'), 2000);

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

setTimeout(() => alert('world!'));
alert('Hello');

const printNumbers = (from, to) => {
  let current = from;

  let timerId = setInterval(function () {
    alert(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
};

printNumbers(5, 10);

const printName = function (text) {
  // console.log(this);
  console.log(`${text} ${this.name} ${this.lastName}`);
  console.log(`User age is: ${this.age}`);
};

// const user = {
//   name: "Roman",
//   lastName: 'Chaban',
//   age: 22,
// };

printName.apply(user, ["Hello"]);

function dobule(a, b) {
  console.log(a * b);
}

let goToDoubleNumbers = dobule.bind(null, 2);

goToDoubleNumbers(4);
goToDoubleNumbers(5);
goToDoubleNumbers(6);
console.log(this);

function slow(x) {
  alert(`Викликана з ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func(x);
    cache.set(x, result);
  };
}

slow = cachingDecorator(slow);
alert("Again: " + slow(1));

function slow(x) {
  alert(`Викликана з ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  console.log(cache);

  return function (x) {
    if (caches.has(x)) {
      cache.get(x);
    }
    let result = func(x);
    console.log(result);
    cache.set(result, x);
    return result;
  };
}

slow = cachingDecorator(slow);

alert(slow(1));
// alert(`Again: ${slow(1)}`);

function getXItem(item) {
  alert(`Викликана з ${item}`);
  return item;
}
function cachingDecorator(func) {
  let cache = new Map();

  return function (item) {
    if (cache.has(item)) {
      return cache.get(item);
    }
    let resultItem = func(item);
    cache.set(resultItem, item);
    return resultItem;
  };
}

getXItem = cachingDecorator(getXItem);

alert(getXItem(1));

function hello(text) {
  console.log(text, this.name, this.age);
}

// const person = {
//   name: "Roman",
//   age: 22,
// };

hello.apply(person, ['Hello']);

function hello() {
  console.log(`${this.name} ${this["last name"]}`);
}

// const user = {
//   ["name"]: "Roman",
//   ["last name"]: "Chaban",
//   sayHello() {
//     hello;
//   },
// };

hello.call(user);

function sayHi() {
  console.log(this.name);
}

let user = { name: "Roman" };
let admin = { name: "Pete" };

// sayHi.call(user);
// sayHi.call(admin);

function say(phrase) {
  console.log(` ${phrase} ${this.name}`);
}

say.call(user, "Hello");
say.call(admin, "Hi");

function hash () {
  console.log([].join.call(arguments));
}
hash(1,2);

// const auto = {
//   brand: "BMW",
//   drive() {
//     console.log(this);
//     return `Let's go drive ${this.brand}`;
//   },
// };

// const motorBike = {
//   brand: "Suzuki",
// };

// let autoDrive = auto.drive.bind(auto);
// let motorDrive = auto.drive.bind(motorBike);
// let sheepDrive = auto.drive.bind({ brand: "Sheep" });

const h2 = document.querySelector.bind(document);
// console.log(h2);

const header = h2('body');

console.log(header);

console.log(h2 === document.querySelector);

const auto = {
  brand: "BMW",
  drive() {
    console.log(this);
    return `Заведем наш ${this.brand}`;
  },
};

const motorBike = {
  brand: 'Suzuki',
}

const autoDrive = auto.drive.bind(auto);
const motorDrive = auto.drive.bind(motorBike);

function sayHi(msg) {
  console.log(this);
  console.log(msg + " " + this.name);
}

const person = {
  name: "Roman",
  ["last name"]: "Chaban",
};

const sayHello = sayHi.bind(person, "HI!");
sayHello();
sayHi.apply(person, ["Hello"]);

let printValue = (item) => {
  return item * 2;
};

const cachingDecorator = (func) => {
  let cache = new Map();

  return function (item) {
    if (cache.has(item)) {
      cache.get(item);
    }
    let result = func(item);
    cache.set(item, result);
    return result;
  };
};

printValue = cachingDecorator(printValue);

alert(printValue(1));

function printName() {
  console.log(this);
  console.log(this.firstName);
}

// const user = {
//   firstName: "Roman",
//   ["last name"]: "Chaban",
// };

printName.call(user);

let slow = (x) => {
  alert(`Викликана з ${x}`);
  return x;
};

let slowTwo = (x) => {
    return x * 2;
}

const cachingDecorator = (func) => {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func(x);

    cache.set(x, result);
    return result;
  };
};

slow = cachingDecorator(slow);

alert(slow(1));
alert(`Again: ${slow(1)}`);

slowTwo = cachingDecorator(slowTwo);

console.log(slowTwo(2));

// let worker = {
//   someMethod() {
//     return 1;
//   },
//   slow(x) {
//     alert("Called with " + x);
//     return x * this.someMethod();
//   },
// };

const cachingDecorator = (func) => {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func(x);
    cache.set(x, result);
    return result;
  };
};

// alert(worker.slow(1));

// worker.slow = cachingDecorator(worker.slow);
alert(worker.slow(2));

function sayHi(greet) {
  console.log(greet + " " + this.name);
}

// let user = { name: "Ivan" };
// let admin = { name: "Admin" };

// sayHi.call(user, "Hello");
// sayHi.call(admin, "Good day");

// let worker = {
//   someMethod() {
//     return 1;
//   },

//   slow(x) {
//     alert("Called with " + x);
//     return x * this.someMethod();
//   },
// };

function cachingDecorator(func) {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func.call(this, x);
    cache.set(x, result);
    return result;
  };
}

worker.slow = cachingDecorator(worker.slow);

alert(worker.slow(2));
alert(worker.slow(2));

// let worker = {
//   slow(min, max) {
//     alert(`Called with ${min},${max}`);
//     return min + max;
//   },
// };

function cachingDecorator(func, hash) {
  let cache = new Map();
  return function () {
    let key = hash(arguments);
    if (cache.has(key)) {
      return cache.get(key);
    }
    let result = func.apply(this, ...[arguments]); //**
    cache.set(key, result);
    return result;
  };
}

function hash(args) {
  return args[0] + "," + args[1];
}

worker.slow = cachingDecorator(worker.slow, hash);

alert(worker.slow(3, 5));

let wrapper = function () {
  return func.apply(this, arguments);
};

function hash () {
  alert([].join.call(arguments));
}
hash(1,2);

// let user = {
//   firstName: "Roman",
// };

function func(phrase) {
  alert(`${phrase},  ${this.firstName}!`);
}

let newFunc = func.bind(user);

newFunc('Hello');

// let user = {
//   name: "Roman",
//   sayHelloName(phrase) {
//     alert(`${phrase}, ${this.name}`);
//   },
// };

let say = user.sayHelloName.bind(user);

say('Hello');
say('Goodbye');

function mul(a, b) {
  return console.log(a * b);
}
let dobule = mul.bind(null, 2);
dobule(3);
dobule(4);
dobule(6);
function sayHi(phrase) {
  console.log(this);
  console.log(`${phrase}, ${this.firstName}`);
}
// const user = {
//   firstName: "Roman",
// };
let say = sayHi.bind(user);
say('Hello');

function mul(a, b) {
  return console.log(a * b);
}

let dobule = mul.bind(null, 2);
let triple = mul.bind(null, 3);

triple(3);
triple(4);
triple(5);

let printNumber = (number) => {
  return number * 2;
};

const cachingDecorator = (func) => {
  let cache = new Map();

  return function (number) {
    if (cache.has(number)) {
      console.log(`i want to info from not cache`);
      cache.get(number);
    }
    let result = func(number);
    cache.set(result, number);
    console.log(`i want to info from to cache`);
    return result;
  };
};

printNumber = cachingDecorator(printNumber);

alert(printNumber(2));
alert(printNumber(2));
// alert(printNumber(3));

let slow = (x) => {
  alert("Called with " + x);
  return x;
};

const cachingDecorator = (func) => {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func(x);
    cache.set(x, result);
    return result;
  };
};

slow = cachingDecorator(slow);

alert(slow(1));
// alert(`Again: ${slow(1)}`);

// let worker = {
//   someMethod() {
//     return 1;
//   },
//   slow(x) {
//     alert("Called with " + x);
//     return x * this.someMethod();
//   },
// };

const cachingDecorator = (func) => {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func(x);
    cache.set(x, result);
    return result;
  };
};
alert(worker.slow(1));
worker.slow = cachingDecorator(worker.slow);
alert(worker.slow(2));
let func = worker.slow;
func(2);

function sayHi() {
  alert(this.name);
}

// let user = { name: "Roman" };

// let admin = { name: "Admin" };

sayHi.call(user);
sayHi.call(admin);

let slow = (x) => {
  // this is hard operations
  alert(`Called with: ${x}`);
  return x;
};

const cachingDecorator = (func) => {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func(x);
    cache.set(result, x);
    return result;
  };
};

slow = cachingDecorator(slow);

alert(slow(1));
alert(`Again: ${slow(1)}`);

// // let worker = {
// //   someMethod() {
// //     return 1;
// //   },
//   slow(x) {
//     alert(`Called with: ${x}`);
//     return x * this.someMethod(); // (*)
//   },
// };

const cachingDecorator = (func) => {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func(x); // (**)
    cache.set(x, result);
    return result;
  };
};

alert(worker.slow(1)); // the original method is work

worker.slow = cachingDecorator(worker.slow); // now this is start to hash

alert(worker.slow(2)); // Aw , Error: Canntor read property 'someMethod' of undefined

function sayHi(phrase) {
  console.log(`${phrase}, ${this.name}`);
}

// let user = { name: "Roman" };
// let admin = { name: "Admin" };

sayHi.call(user, "Hello"); // Hello Ivan
sayHi.call(admin, "Hi!"); // Hi Admin

function say(phrase) {
  alert(`${this.name}: ${phrase}`);
}
// let user = { name: "Roman" };
say.call(user, "Hello");

// let worker = {
//   someMethod() {
//     return 1;
//   },
//   slow(x) {
//     alert(`Called with: ${x}`);
//     return x * this.someMethod(); // (*)
//   },
// };

const cachingDecorator = (func) => {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func.call(this, x);
    cache.set(x, result);
    return result;
  };
};

worker.slow = cachingDecorator(worker.slow);

alert(worker.slow(2));

let worker = {
  slow(min, max) {
    alert(`Called with ${min},${max}`);
    return min + max;
  },
};

const cachingDecorator = (func, hash) => {
  let cache = new Map();
  return function () {
    let key = hash(arguments); // (*)
    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func.call(this, ...arguments); // (**)
    cache.set(key, result);
    return result;
  };
};

function hash(args) {
  return args[0] + "," + args[1];
}

worker.slow = cachingDecorator(worker.slow, hash);

alert(worker.slow(3, 5));
