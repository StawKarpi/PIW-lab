"use strict";

document.querySelector("form").addEventListener("submit", handleSubmitForm);
document.querySelector("ul").addEventListener("click", handleClickOrDelete);

let toDelete;
let toRestore;
let searchInput = document.getElementById("search-input");

function handleSubmitForm(e) {
  e.preventDefault();
  let input = document.querySelector(".add-input");
  if (input.value !== "") {
    addTodo(input.value);
  }
  input.value = "";
}

function handleClickOrDelete(e) {
  if (e.target.id === "done") {
    clickTodo(e);
  }
  if (e.target.id === "deleteButton") {
    deleteTodo(e);
  }
}

const getDateString = () => {
  var myDate = new Date();
  return (
    myDate.getDate() +
    "." +
    myDate.getMonth() +
    1 +
    "." +
    myDate.getFullYear() +
    " | " +
    myDate.getHours() +
    ":" +
    myDate.getMinutes()
  );
};

function addTodo(todo) {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");

  li.innerHTML = `
    
    <button  class = "link"> <span id = "done">${todo}</span> </button> 
    <button  class = "delete" id = "deleteButton">X</button>
    `;

  li.classList.add("todo-list-item");
  ul.append(li);

  return;
}

function clickTodo(e) {
  const item = e.target.parentNode;
  const date = e.target.parentNode.nextSibling;

  if (item.style.textDecoration === "line-through") {
    item.style.textDecoration = "none";
    item.style.color = "black";
    date.textContent = "";
  } else {
    item.style.textDecoration = "line-through";
    item.style.color = "rgb(200,200,200)";
    date.textContent = getDateString();
  }
}

function deleteTodo(e) {
  toDelete = $(e.target.parentNode);
  toRestore = $(toDelete.find("span")).text();
  $(".modal").show();
}

$(".yes-button").on("click", function () {
  toDelete.remove();
  $(".modal").hide();
  $(".restore-button").show();
});

$(".no-button").on("click", function () {
  $(".modal").hide();
});

$(".restore-button").on("click", function () {
  addTodo(toRestore);
  $(this).hide();
});

/*const searchList = () => {
  
};

document.querySelector(".search").addEventListener("keyup", searchList); */
