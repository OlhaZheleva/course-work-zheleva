"use strict";

/**
 * Оголошуємо змінні з HTML елементами
 */

const startInput = document.getElementById("start");
const endInput = document.getElementById("end");
const dimensionInput = document.getElementById("dimension");
const periodInput = document.getElementById("period");
const daysTypeInput = document.getElementById("days-type");
const count = document.getElementById("count");
const resultInner = document.querySelector(".result");
const resultList = document.querySelector(".history-list");
const startInner = document.querySelector(".start");
const endInner = document.querySelector(".end");
let difference;

/**
 * Створюємо слухачі на необхідні нам події
 */

count.addEventListener("click", durationBetweenDates);
startInput.addEventListener("change", inputDisabled);
periodInput.addEventListener("change", addPeriod);
endInput.addEventListener("change", inputDisabled);
historyBtn.addEventListener("click", renderHistoryResults);

/**
 *
 * При завантаженні сторінки зразу підтягується аутальна інформація з localStorage
 */


/**
 * Поле з кінцевою датою неактивне, поки не заповнене поле з початковою датою
 */

function inputDisabled() {
  if (!startInput.value) {
    endInput.disabled = true;
  } else {
    endInput.disabled = false;
    endInput.min = startInput.value;
  }
}

/**
 * Клас для створення кожного результату обчислення в окремий обʼєкст
 */
class Results {
  constructor(start, end, dif) {
    this.Start = start;
    this.End = end;
    this.Dif = dif;
  }
}

/**
 * Записуємо дані в localStorage
 * 
//  */
function setResultsToLocalStorage(results) {
  localStorage.setItem("results", JSON.stringify(results));
}


/**
 * Функція різниці дат
 */

function durationBetweenDates(start, end) {
  start = startInput.value;
  end = endInput.value;

  // зразу фіксуємо вихідні дані у DOM
  startInner.innerHTML = `Початкова дата: ${start}  </p>`;
  endInner.innerHTML = `Кінцева дата: ${end}  </p>`;

  // формула обчислення різниці дат
  difference = Math.abs(Date.parse(end) - Date.parse(start));

  // функція обчислення враховуючи одиниці виміру
  const dimension = dimensionInput.options[dimensionInput.selectedIndex].value;
  durationWithDimension(dimension);

  // записуюмо результат обчислення у обʼєкст
  let result = new Results(start, end, difference);

  // Додаємо новий результат в localStorage
  storeResultsInLocalStorage(result);
}


/**
 * Функція збереження у local storage
 * @param {Array} results - масив з результатами
 */

function setResultsObjectToLocalStorage(results) {
  localStorage.setItem("results", JSON.stringify(results));
}

/**
 * Отримуємо дані з localStorage
 * @return {[String]} - масив з результатами, або пустий масив, якщо localStorage пустий
 */
function getResultsFromLocalStorage() {
  return localStorage.getItem("results") !== null
    ? JSON.parse(localStorage.getItem("results"))
    : [];
}

/**
 * Додаємо новий результат в localStorage
 * @param {String} result - окремий результат
 */

function storeResultsInLocalStorage(result) {
  // Отримуємо поточні задачі з localStorage
  const results = getResultsFromLocalStorage();

  if (results.length < 10) {
    results.unshift(result);
    // Записуємо оновлений масив в localStorage
    setResultsToLocalStorage(results);
  } else {
    results.pop()
    results.unshift(result);
    // Записуємо оновлений масив в localStorage
    setResultsToLocalStorage(results);
  }
}

/**
 * звертаємось до local storage
 *  @param {String} results - масив результатів
 */

function renderHistoryResults(results) {
  if (resultList.hasChildNodes()) {
    resultList.replaceChildren([]);
  }

  results = getResultsFromLocalStorage();

  results.forEach((result) => {
    const div = createResultsElement(result);
    resultList.appendChild(div);
  });
}

/**
 * виводимо результати на сторінку історії
 * @param {String} result - окремий результат, що є обʼєктом
 */
function createResultsElement(result) {
  const div = document.createElement("div");
  div.className = "result-block";
  div.innerHTML = `<p class="start">Початкова дата: ${result.Start} </p>  
                        <p class="end"> Кінцева дата: ${result.End}</p> 
                        <p class="dif">Загальна кількість:  ${result.Dif} </p>`;

  return div;
}

/**
 * Обчислення враховуючи одиниці віміру
 *
 */

function durationWithDimension(dimension) {
  switch (dimension) {
    case "days":
      // проводимо обчислення та зразу фіксуємо у DOM
      difference = difference / (24 * 60 * 60 * 1000) + " " + "днів";
      resultInner.innerHTML = `Загальна кількість: ${difference}  </p>`;
      break;
    case "hours":
      difference = difference / (60 * 60 * 1000) + " " + "годин";
      resultInner.innerHTML = `Загальна кількість: ${difference}  </p>`;
      break;
    case "minutes":
      difference = difference / (60 * 1000) + " " + "хвилин";
      resultInner.innerHTML = `Загальна кількість: ${difference}  </p>`;
      break;
    case "seconds":
      difference = difference / 1000 + " " + "секунд";
      resultInner.innerHTML = `Загальна кількість: ${difference}  </p>`;
      break;
  }
}

/**
 * Пресет тиждень або місяць, що генерую кінцеву дату
 *
 */

function addPeriod() {
  let start = new Date(startInput.value);
  let period = periodInput.options[periodInput.selectedIndex].value;
  let end;

  switch (period) {
    case "week":
      end = new Date(start.setDate(start.getDate() + 7));
      break;
    case "month":
      end = new Date(start.setMonth(start.getMonth() + 1));
      break;
  }

  end = formatDate(end);
  endInput.value = end;
  // endInput.value = end.toDateString;
}

/**
 * Функція форматування дати у формат YYYY-MM-DD
 *
 */

function formatDate(date) {
  // виділяємо окремо день, місяць та рік
  let year = date.toLocaleString("default", { year: "numeric" });
  let month = date.toLocaleString("default", { month: "2-digit" });
  let day = date.toLocaleString("default", { day: "2-digit" });

  // генеруємо у формат yyyy-mm-dd
  let formattedDate = year + "-" + month + "-" + day;

  return formattedDate;
}
