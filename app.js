<<<<<<< HEAD
var listOfActivities = [];

var input = document.getElementById("input");

var todolist = document.getElementById("todolist");

document.getElementById("button").onclick = click;
.
function click() {

  listOfActivities.push(input.value);
  console.log(listOfActivities);
  input.value = "";
  showList();
}


function showList() {

  todolist.innerHTML = " ";


  listOfActivities.forEach(function (n, i) {
    todolist.innerHTML +=
      "<li>" +
      n +
      "<a onclick='editItem(" +
      i +
      ")'>Edit</a>" +
      "<a onclick='deleteItem(" +
      i +
      ")'>&times | </a></li>";
  });
}

function deleteItem(i) {
  listOfActivities.splice(i, 1);
  showList();
}


function editItem(i) {
  var newValue = prompt("Please insert your new value");
  listOfActivities.splice(i, 1, newValue);
  showList();
=======
var listOfActivities = [];

var input = document.getElementById("input");

var todolist = document.getElementById("todolist");

document.getElementById("button").onclick = click;

function click() {

  listOfActivities.push(input.value);
  console.log(listOfActivities);
  input.value = "";
  showList();
}


function showList() {

  todolist.innerHTML = " ";


  listOfActivities.forEach(function (n, i) {
    todolist.innerHTML +=
      "<li>" +
      n +
      "<a onclick='editItem(" +
      i +
      ")'>Edit</a>" +
      "<a onclick='deleteItem(" +
      i +
      ")'>&times | </a></li>";
  });
}

function deleteItem(i) {
  listOfActivities.splice(i, 1);
  showList();
}


function editItem(i) {
  var newValue = prompt("Please insert your new value");
  listOfActivities.splice(i, 1, newValue);
  showList();
>>>>>>> f887d4be3ee04a8b0ea54741c84bec40738c0bf6
}