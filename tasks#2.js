//_________ВОПРОС№3_________
var a = document.querySelector("openMycolor");
var btns_mycolor = document.querySelector("Mycolor");
var hidden_answer = document.querySelector("closeMycolor");

myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.join());
// console.log(myColor.join("+"));

a.onclick = function () {
  btns_mycolor.innerHTML = myColor.join() + myColor.join("+");
};
hidden_answer.onclick = function () {
  btns_mycolor.innerHTML = "Ответ скрыт";
};

//_________ВОПРОС№4.2_________

var colorOfelement = document.querySelectorAll(".element-item");
var btns_changeColor = document.getElementsByClassName(".item-btn");

btns_changeColor.onclick = function color() {
  for (var i = 0; i < 3; i++) {
    colorOfelement[i].style.color = "red";
  }
  for (var index = 3; index < colorOfelement.length; index++) {
    colorOfelement[index].style.color = "green";
  }
};
