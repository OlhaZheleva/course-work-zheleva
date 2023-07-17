'use strict';

// файл чорнетка 

// Обрати окремі дні



let startDate = new Date(startInput.value);
let endDate = new Date(endInput.value);
let numOfDates = getBusinessDatesCount(startDate,endDate);


function getBusinessDatesCount(startDate, endDate) {

    const typeDays = daysTypeInput.options[daysTypeInput.selectedIndex].value;
    let count = 0;
    const curDate = new Date(startDate);

    if (typeDays === "weekdays") {

        while (curDate <= endDate) {
            const dayOfWeek = curDate.getDay();
            if(dayOfWeek !== 0 && dayOfWeek !== 6) count++;
            curDate.setDate(curDate.getDate() + 1);
        }
        alert(count);
        return count;
    } else  if (typeDays === "weekend") {

        while (curDate <= endDate) {
            const dayOfWeek = curDate.getDay();
            if(dayOfWeek !== 0 && dayOfWeek !== 6) count++;
            curDate.setDate(curDate.getDate() + 1);
        }
        alert(count);
        return count;
    } else { 
        
    }

}

// count.addEventListener("click", getBusinessDatesCount);