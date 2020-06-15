let reset = document.getElementById("reset"),
  output = document.getElementById("output"),
  calcButtons = document.getElementById("calc_buttons");

// Clears the calculator display
function clearScreen() {
  output.innerHTML = " ";
}

// Keeps track of any of the calculator buttons being pressed
calcButtons.addEventListener("click", printNum, false);

// Prints the clicked buttons to the display allows them to concatenate
function printNum(e) {
  if (e.target !== e.currentTarget) {
    let clickedItem = e.target.value;
    output.innerHTML += clickedItem;
  }
}

// Stores the user input in a variable, evaluates the user input, and returns that value to the display on click of the "=". If the input equals an empty string, it will return an empty string. This is so pressing "=" with no input doesn't return "undefined"
function equal() {
  let userInput = document.getElementById("output").innerHTML;
  let result = eval(userInput);
  if (userInput === "") {
    return "";
  } else if (userInput === " ") {
    return "";
  } else {
    return (output.innerHTML = result);
  }
}
