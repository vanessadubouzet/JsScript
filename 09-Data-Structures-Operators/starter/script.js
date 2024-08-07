'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0,3).toUpperCase();

for(const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ' '}${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(40);

  console.log(output);
}

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// // console.log(plane[0]);
// // console.log(plane[1]);
// // console.log(plane[2]);

// const fixCap = function (name) {
//   const lowerCase = name.toLowerCase();
//   const final = lowerCase[0].toUpperCase() + lowerCase.slice(1);
//   console.log(final);
// }

// fixCap('vanEsSa');

// // replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement = 'All passengers come to boading door 23. Boarding door 23!';
// console.log(announcement.replaceAll('door', 'gate'));

// // booleans
// const planes = 'A32neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Ai'));

// if (planes.startsWith('A') && planes.endsWith('neo')) {
//   console.log('Part of the new air family');
// }

// // Practice exercise 
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard');
//   }
// }

// checkBaggage("I have a laptop, food and knife");
// checkBaggage("I have a gun, food and knife");
// checkBaggage("I have a laptop, food");


// const capitalizeName = function (name) {
//   const names = name.toLowerCase().split(' ');
//   const nameUpper = [];

//   for (const n of names) {
//     // nameUpper.push(n[0].toUpperCase() + n.slice(1));
//     nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }

//   console.log(nameUpper.join(' '));
// }

// capitalizeName('roronoa zoro');
// capitalizeName('nico robin one Piece');

// // Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+'));


// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   console.log(last.padStart(str.length, '*'));
// }

// maskCreditCard(12213244);

// // Repeat
// const message2 = 'Bad weather... All Departures Delayed ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line`);
// }

// planesInLine(5);

// // const checkMiddleSeat = function (seat) {
// //   //B and E are middle seats
// //   const s = seat.slice(-1);
// //   if (s === 'B' || s === 'E') {
// //     console.log('You Got the middle seat');
// //   } else {
// //     console.log('You got lucky');
// //   }
// // }


// // checkMiddleSeat('11B');
// // checkMiddleSeat('23C');
// // checkMiddleSeat('3E');


// const weekdays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekdays[2]]: {
//     open: 12,
//     close: 22,
//   },
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],


//   // ES6 enchance object literals
//   openingHours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex, mainIndex, time, address }) {
//     console.log(`Order Recieved! ${this.starterMenu[starterIndex]} and 
//       ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is your deicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza(mainIngredients, ...otherIngredients) {
//     console.log(mainIngredients, otherIngredients);
//   }
// };

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Libson, Portugal');

// const question = new Map([
//   ['question', 'what is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct!'],
//   [false, 'Try Again!!']
// ])
// console.log(question);

// // Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Quiz App

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = 3;
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// // Convert Map to array
// console.log([...question]);

// const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
// console.log(ordersSet);

// console.log(new Set('Jonas'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// console.log(ordersSet);

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);


// console.log(new Set('vanessa').size);

// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `
// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entire Object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for(const [key, {open,close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// } 


// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for(const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we are open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// //Arrays
// const users = [
//   {name: 'Jonas', email: 'hello@jonas'}
// ];

// console.log(users[0]?.name ?? 'User array empty');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// }

// const rest2 = {
//   name: 'Patizza',
//   owner: 'Veronica',
// }

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10; 
// rest2.numGuests = rest2.numGuests || 10; 

// rest1.numGuests ||= 10; 
// rest2.numGuests ||= 10;

// nullish assignment operator
// rest1.numGuests ??= 10; 
// rest2.numGuests ??= 10;

// // AND assignment operator
// rest1.owner &&= '<ANOMYMOUS>';
// rest2.owner &&= '<ANOMYMOUS>';

// console.log(rest1);
// console.log(rest2);

// // DESTRUCTURING

// // SPREAD, RIGHT side of the assignment operator
// const arr = [1, 2, ...[3,4]];

// // REST, LEFT side of the assignment operator
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log[a, b, others]; 

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

// // Objects 
// const { sat, ...weekdays } = restaurant.openingHours
// console.log(weekdays);

// // FUNCTIONS
// const add = function (...numbers) {
//   let sum = 0;
//   for(let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// }

// add(2,3);
// add(2,3,4,5,6);

// const xx = [23, 5, 7];
// add(...xx);

// restaurant.orderPizza('mushrooms', 'pepperoni', 'onion');

//////////////// Spread Operator
// const arr = [7, 8, 9];
// const badNewArr = [1 , 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets, NOT objects
// const str = 'Jonas';
// const letters = [...str, '', 'S.'];
// console.log(letters);
// console.log(...str);

// // // Real-world examples
// // const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), 
// //   prompt('Let\'s make pasta! Ingredient 2?'), 
// //   prompt('Let\'s make pasta! Ingredient 3?')
// // ];
// // console.log(ingredients);
// // restaurant.orderPasta(...ingredients);

// // Objects 
// const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'}
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables 
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // Nested Objects
// const { fri: { open, close } } = openingHours;
// console.log(open, close);

// const arr = [2,3,4]; 
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x,y,z] = arr; 
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = (restaurant.order(2,0));
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]]; 

// Nested destructuring
// const [i, , j] = nested;
// console.log(i, j);
//  const [i , , [j, k]] = nested;
//  console.log(i, j, k);

//  Default values
//  const [p=1, q=1, r=1] = [8, 9];
//  console.log(p,q,r);


///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// // 1. 
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2. 
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3. 
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4. 
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // 5.
// const { odds: { team1, x: draw, team2 } } = game;
// console.log(team1, draw, team2);

// // 6. 
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// }

// printGoals(...game.scored);

// // 7. 
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// // 1. 
// const events = new Set([...gameEvents.values()]);

// // 2. 
// events.delete(64);

// // 3. 
// const time = [...gameEvents.keys()].pop();
// console.log(`An event happened, on average, every ${time/ gameEvents.size} minutes`);

// // 4. 
// for (const [min, event] of gameEvents) {
//   const half = min <- 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// // 1.
// for (const [i, x] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${x}`)
// }

// // 2. 
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds)
//   average += odd;
// average /= odds.length;
// console.log(average);

// // 3.
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`; 
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }



///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK
*/


document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const words = (document.querySelector('textarea').value).toLowerCase();
  console.log(words);
  const rows = (words.split('\n'));
  for (const n of rows) {
    const first = n.slice(0, n.indexOf('_'));
    const last = n.slice(n.indexOf('_') + 1);
    console.log(`${(first + (last.replace(last[0], last[0].toUpperCase()))).trim()}`);
  }
});

