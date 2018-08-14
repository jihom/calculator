// document.body.innerHTML = "";

// var name = "이지호";
// const age = 18;

// printf(name);
// printf(age);
// printf(age +1)
// printf(typeof name);
// printf(typeof age);

// name = [];
// name = ["김효진", "한건호", "이지호", "최윤하"];

// for (let i = 0; i < name.length; i++) {
//   if (i % 2 === 0) {
//     printf(name[i]);
//   }
// }

const calculate_button = document.getElementById("calculate_button");
const plus_button = document.getElementById("plus_button");
const minus_button = document.getElementById("minus_button");

const input = document.getElementById("input");

let list = [];

plus_button.onclick = function() {
  list.push(input.value);
  list.push("+");
  input.value = "";
};

minus_button.onclick = function() {
  list.push(input.value);
  list.push("-");
  input.value = "";
};

calculate_button.onclick = function() {
  list.push(input.value);
  if (list[1] == "+") {
    alert(Number(list[0]) + Number(list[2]));
  } else if (list[1] == "-") {
    alert(Number(list[0]) - Number(list[2]));
  }
  list = [];
};
