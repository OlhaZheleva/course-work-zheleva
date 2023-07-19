"use strict";

// файл чорнетка

// Обрати окремі дні

// daysTypeInput.addEventListener("change", numberOfDaysInclusive);

// let start = new Date(startInput.value);
// let end = new Date(endInput.value);

// /**
//  * Загальна фінкція обчислення, враховуючи окремі дні тижня
//  *
//  */

// function calculateDays(start, end) {

//     start = new Date(startInput.value);
//     end = new Date(endInput.value);
    
//   const dayType = daysTypeInput.options[daysTypeInput.selectedIndex].value;

//   switch (dayType) {

//     case "all":
//       // проводимо обчислення за звичайною формулою
//       durationBetweenDates();
//       break;
//     case "weekend":
//     const numberOfDaysInclusive = (start, end) => {
//         return (
//           1 + Math.round((end.getTime() - start.getTime()) / (24 * 3600 * 1000))
//         );
//       };
//       const numberOfWeekends = (start, end) => {
//         const days = numberOfDaysInclusive(start, end); // total number of days
//         const sundays = Math.floor((days + ((start.getDay() + 6) % 7)) / 7); // number of sundays
//         return 2 * sundays + (end.getDay() == 6) - (start.getDay() == 0); // multiply sundays by 2 to get both sat and sun, +1 if end is saturday, -1 if start is sunday
//       };
//     case "minutes":
//       const numberOfWeekdays = (start, end) => {
//         return numberOfDaysInclusive(start, end) - numberOfWeekends(start, end);
//       };
//       return numberOfWeekdays; 
//   }

// }
