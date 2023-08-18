import _ from "lodash";
import "./style.css";
import addItem from "./modules/addItem.js";
import options from "/src/assets/options.png";
import bin from "/src/assets/recyclebin.png";
import { checkDataType } from "ajv/dist/compile/validate/dataType";

const todoList = [
  {
    description: "wash dishes",
    completed: false,
    index: 0,
  },
  {
    description: "wash clothes",
    completed: false,
    index: 1,
  },
];

const populateList = () => {
  // alert("hello world");

  const parent = document.getElementById("populate");
  parent.innerHTML = "";
  const ulList = document.createElement("ul");
  ulList.classList.add("ulList");
  for (let x = 0; x < todoList.length; x += 1) {
    if (todoList[x].completed === false) {
      const divContainer = document.createElement("div");
      divContainer.classList.add("divContainer");
      divContainer.setAttribute("id", `id${x}`);
      const divSmall=document.createElement('div');
      divSmall.classList.add('divSmall');
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      
      const liList = document.createElement("li");
      liList.classList.add("liList");

      liList.textContent = todoList[x].description;
      const option = document.createElement("img");
      option.classList.add('three-dots');

      option.src = options;

      option.addEventListener("click", function () {
        option.style.display = "none";
        const rbin = document.createElement("img");
        rbin.src = bin;

        divContainer.appendChild(rbin);
        //ulList.appendChild(divContainer);

        rbin.addEventListener("click", function () {
          document.getElementById(`id${x}`).remove();
          rbin.style.display = "none";
        });
      });
      divSmall.appendChild(checkbox);
      divSmall.appendChild(liList);
      divContainer.appendChild(divSmall);
      divContainer.appendChild(option);
      ulList.appendChild(divContainer);
    }
  }
  parent.appendChild(ulList);
};

document.addEventListener("DOMContentLoaded", populateList);

const clearAll = document.getElementById("clearAll");
const val = document.getElementById("inputVal");
val.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const newItem = {
      description: val.value,
      completed: false,
      index: todoList.length, // Set the index to the next available index
    };
    todoList.push(newItem);
    val.value = "";
    populateList();
  }
});


