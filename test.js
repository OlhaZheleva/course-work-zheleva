'use strict';

// файл чорнетка 

// Обрати окремі дні



let startDate = new Date(startInput.value);
let endDate = new Date(endInput.value);

function countWeekDaysBetween (startDate, endDate) { 
    Array
    .from({ length: (endDate - startDate) / (1000 * 3600 * 24) })
    .reduce(number => {
      if (startDate.getDay() % 6 !== 0) number++;
      startDate = new Date(startDate.setDate(startDate.getDate() + 1));
      return number;
    }, 0);
};

console.log(countWeekDaysBetween(startDate, endDate));

/**
 * Обчислення враховуючи тільки будні дні 
 *
 */

function durationWithOnlyWeekday(daysDyWeek) {

    daysDyWeek = daysTypeInput.options[daysTypeInput.selectedIndex].value;
  
    switch (daysDyWeek) {
      case "weekdays":
        countWeekDaysBetween();
        console.log(countWeekDaysBetween());
        break;
      case "weekend":
        end = new Date(start.setMonth(start.getMonth() + 1));
        break;
    }
  }

