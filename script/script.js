const calculator = document.querySelector("#calculator");
const keys = document.querySelector("#calculator_keys");
const display = document.querySelector("#calculator_display");
// display.placeholder += '*';

function btnClicked(event) {
  const value = event.innerText;
  const type =
    value === "clear"
      ? "clear"
      : value === "="
      ? "calculate"
      : ["+", "*", "/"].includes(value)
      ? "operator"
      : ["cos", "sin", "tan"].includes(value)
      ? "function"
      : "number";

  switch (type) {
    case "number":
      display.value = display.value === "0" ? value : display.value + value;
      break;
    case "operator":
      display.value = display.value + " " + value + " ";
      break;
    case "calculate":
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
      break;
    case "decimal":
      display.value = value.includes(".") ? value : value + ".";
      break;
    case "function":
      try {
        const result = value + "(" + display.value + ")";
        display.value = eval("Math. " + result);
      } catch {
        display.value = "Error";
      }
      break;
    case "clear":
      display.value = "";
      break;
  }
}
