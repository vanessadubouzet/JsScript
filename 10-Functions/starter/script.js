'use strict';



// const runOnce = function() {
//     console.log('This will never run again');
// }
// runOnce();

// // IIFE 
// (function() {
//     console.log('This will never run again');
//     const isPrivate = 23;
// })();

// (() => console.log('This will ALSO never run again'))();

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],

//     book(flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
//         this.bookings.push(({flight: `${this.iataCode} ${flightNum}`, name }));
//     },
// };

// lufthansa.book(239, 'Jonas Schmedtmann');
// console.log(lufthansa);

// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// };

// const swiss = {
//     airline: 'Swiss Airlines',
//     iataCode: 'LX',
//     bookings: [],
// };

// const book = lufthansa.book;

// // // DOES NOT WORK
// // book(23, 'Sarah Williams');

// // The call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// // The apply method
// const flightData = [583, 'George Copper'];
// book.apply(lufthansa, flightData);
// console.log(lufthansa);

// book.call(eurowings, ...flightData);
// console.log(eurowings);

// // Bind method
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Schedtmann');
// bookEW23('Martha Cooper');

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function() {
//     console.log(this);

//     this.planes++;
//     console.log(this.planes);
// }
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.10, 200));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));

// const tax = function(rate = 0.23) {
//     return function(value) {
//         return value + value * rate; 
//     }
// }

// const addTaxRate = function(rate) {
//     return function(value) {
//         return value + value * rate; 
//     }
// }

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`);
//     }
// }

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('Jonas');

// const greets = (greetings) => (name) => console.log(`${greetings} ${name}`);

// greets('Hello')('Jimin');

// const oneWord = function(str) {
//     return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function(str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function(str, fn) {
//     console.log(`Original str: ${str}`);
//     console.log(`Transformed str: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);

// }

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// // JS uses callbacks all the time
// const high5 = function() {
//     console.log('👋');
// }

// document.body.addEventListener('click', high5); 

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// const flight = 'LH234';
// const jimin = {
//     name: 'Park Jimin',
//     passport: 24739479284
// }

// const checkIn = function(flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;

//     if(passenger.passport === 24739479284) {
//         alert('Checked in');
//     } else {
//         alert('Wrong passport!');
//     }
// }

// checkIn(flight, jimin);
// console.log(flight);
// console.log(jimin);

// const newPassport = function(person) {
//     person.passport = Math.trunc(Math.random() * 10000000);
// }

// newPassport(jimin);
// checkIn(flight,jimin);


// const bookings = [];

// const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
//     // ES5
//     // numPassengers = numPassengers || 1; 
//     // price = price || 199;

//     const booking = {
//         flightNum, 
//         numPassengers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);


///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 
*/

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    displayResult(type) {
        if(type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        } else {
            console.log(this.answers)
        }
    },
    registerNewAnswer() {
        const inputNumber = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
        if(inputNumber < this.options.length) {
            this.answers[inputNumber]++;
            this.displayResult('string');
        } else {
            console.log('Please write valid number');
        }
    },
}

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));
