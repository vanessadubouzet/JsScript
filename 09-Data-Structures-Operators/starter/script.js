'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({starterIndex, mainIndex, time, address}) {
    console.log(`Order Recieved! ${this.starterMenu[starterIndex]} and 
      ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your deicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients, otherIngredients);
  }
};

const rest1 = {
  name: 'Capri',
  numGuests: 20,
}

const rest2 = {
  name: 'Patizza',
  owner: 'Veronica',
}

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10; 
// rest2.numGuests = rest2.numGuests || 10; 

// rest1.numGuests ||= 10; 
// rest2.numGuests ||= 10;

// nullish assignment operator
rest1.numGuests ??= 10; 
rest2.numGuests ??= 10;

// AND assignment operator
rest1.owner &&= '<ANOMYMOUS>';
rest2.owner &&= '<ANOMYMOUS>';

console.log(rest1);
console.log(rest2);

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

// 1. 
const [players1, players2] = game.players;
console.log(players1, players2);

// 2. 
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3. 
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. 
const players1Final = [...players1, 'Thiago', 'Coutinho','Perisic'];
console.log(players1Final);

// 5.
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

// 6. 
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
}

printGoals(...game.scored);

// 7. 
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');