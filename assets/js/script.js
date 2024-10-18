/* const inputDisplay = document.getElementById("display")

function showOnDisplay(value) {
    inputDisplay.value += value;
}

function clearDisplay() {
    inputDisplay.value = "";
}

function delDisplay() {
    inputDisplay.value = inputDisplay.value.slice(0, -1);
}

function resultDisplay() {
    inputDisplay.value = eval(inputDisplay.value);
} */

const inputDisplay = document.getElementById("display");

function showOnDisplay(value) {
    if (isOperator(value) && isOperator(inputDisplay.value.slice(-1))) {
        return;
    }
    inputDisplay.value += value;
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function clearDisplay() {
    inputDisplay.value = "";
}

function deleteLastCharacter() {
    inputDisplay.value = inputDisplay.value.slice(0, -1);
}

function resultDisplay() {
    try {
        inputDisplay.value = eval(inputDisplay.value) || "";
    } catch (e) {
        inputDisplay.value = "Error";
    }
}
