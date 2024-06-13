'use strict';


 // CODING CHALLENGE #1
function calcAverage (firstScore, secondScore, thirdScore) {
    return ((firstScore + secondScore + thirdScore) / 3);
}

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27); 

function checkWinners (avgDolphins, avgKoalas) {
    if(avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins...`)
    }
}

checkWinners(scoreDolphins, scoreKoalas);

 // CODING CHALLENGE #2
 function calcTip(bill) {
    const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
    return tip;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [(calcTip(bills[0]) + bills[0]) , (calcTip(bills[1]) + bills[1]), (calcTip(bills[2]) + bills[2])];

// CODING CHALLENGE 
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

 // CODING CHALLENGE #3

const mark = {
    fullName : 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

const john = {
    fullName : 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
}

// CODING CHALLENGE #4

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  
  /* Write your code below. Good luck! 🙂 */
  
  const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  const tip = [];
  const total = [];
  
  for (let i = 0; i < bill.length; i++) {
      tip.push(calcTip(bill[i]));
      total.push(tip[i] + bill[i]);
  }
  
  const calcAverage = function (arr) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++){
          sum += arr[i];
      }
      const avg = sum / arr.length
      return avg;
  }
  
  calcAverage(total);
  