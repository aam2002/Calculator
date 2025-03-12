let allValueArray = [
  "AC",
  "%",
  "Del",
  "/",
  "7",
  "8",
  "9",
  "x",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  ".",
  "0",
  "=",
];

let container = document.getElementById("container");

allValueArray.forEach((item) => {
  let element = document.createElement("button");

  if (item == "=") {
    element.classList.add("equalBtn");
    element.id = "equal";
    element.setAttribute("onclick", "calcualte()");
  } else if (item == "AC") {
    element.setAttribute("onclick", "clearDisplay()");
  } else if (item == "Del") {
    element.setAttribute("onclick", "deleteFun()");
  } else {
    element.setAttribute("onclick", "appendValue(this.innerText)");
  }
  element.innerHTML = item;
  container.append(element);
});

let mainInput = document.getElementById("main-input");
let totalField = document.getElementById("total");
let prevDisplayHistory = document.getElementById("history");
let prevInputs = "";

function calcualte() {
  try {
    totalField.innerText = eval(mainInput.value);
    totalField.classList.add("final");
  } catch (error) {
    totalField.innerText = "Error"; 
    if (!error) {
      totalField.innerText = "";
    }
  }
}

function clearDisplay() {
  if (mainInput.value) {
    prevDisplayHistory.innerText =
      mainInput.value + "=" + eval(mainInput.value);
  }
  mainInput.value = "";
  totalField.innerText = "";
  totalField.classList.remove("final");
}

function appendValue(value) {
  try {
    mainInput.value += value;
    totalField.innerText = eval(mainInput.value);
    totalField.classList.remove("final");
  } catch (error) {
    if (error == undefined) {
      totalField.innerText = "";
    }
  }
}
function deleteFun() {
  try {
    mainInput.value = mainInput.value.substring(0, mainInput.value.length - 1);
    totalField.innerText = eval(mainInput.value);
    totalField.classList.remove("final");
  } catch (error) {
    if (error == undefined) {
      totalField.innerText = "";
    }
  }
}
