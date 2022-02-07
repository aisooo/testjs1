//_________ВОПРОС№1_________
var main_div = document.querySelector(".item-question");
var btn_buttons = document.querySelector(".btn_answer");
var btns_answers = document.querySelector(".item-openAnsw");
var hide_answer = document.querySelector(".hide");

btn_buttons.onclick = function () {
  btns_answers.innerHTML =
    'Мой ответ: Десять раз выведет число 10. Объявление var выделяет одну "ячейку" в памяти и на эту одну и туже "ячейку" всегда ссылается переменная i объявление let при каждой итерации выделяет новую "ячейку", таким образом переменная i на каждом шаге перебора цикла ссылается на новый адрес';
};
hide_answer.onclick = function () {
  btns_answers.innerHTML = "Ответ скрыт";
};

//_________ВОПРОС№2_________

var btn_getTime = document.getElementById("DateAndTime");
var btns_getAnswer = document.getElementById("openAnswer");
var hide_answer = document.getElementById("hidden");

var toDay = new Date();
var day = toDay.getDay();
var listOFtheDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log("Today is : " + listOFtheDay[day] + ".");
var hour = toDay.getHours();
var minute = toDay.getMinutes();
var second = toDay.getSeconds();
var TOGETHER = hour >= 12 ? " PM " : " AM ";
hour = hour >= 12 ? hour - 12 : hour;
if (hour === 0 && TOGETHER === " PM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    TOGETHER = " Noon";
  } else {
    hour = 12;
    TOGETHER = " PM";
  }
}
if (hour === 0 && TOGETHER === " AM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    TOGETHER = " Midnight";
  } else {
    hour = 12;
    TOGETHER = " AM";
  }
}
console.log(
  "Current Time : " + hour + TOGETHER + " : " + minute + " : " + second
);

btn_getTime.onclick = function () {
  btns_getAnswer.innerHTML =
    "Today is : " +
    listOFtheDay[day] +
    "." +
    "Current Time : " +
    hour +
    TOGETHER +
    " : " +
    minute +
    " : " +
    second;
};
hide_answer.onclick = function () {
  btns_getAnswer.innerHTML = "Ответ скрыт";
};

//_________ВОПРОС№2_________REVERSE

var btns_numReverse = document.getElementById("reverse");

btns_numReverse.onclick = function reversedNum() {
  let input = prompt();
  return alert(input.split("").reversedNum().join(""));
};

//_________ВОПРОС№2_________FACTORIAL
var btns_factorials = document.getElementById("numFactorial");

btns_factorials.onclick = function FactorialNum(number) {
  var number = +prompt("Ведите число: ");
  var ends = 1;
  for (var i = 2; i <= number; i++) {
    ends *= i;
  }
  alert(ends);
};
