function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
}

function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    let display = document.getElementById('display').value;
    if (display.length === 0) return;
    let lastChar = display.charAt(display.length - 1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
        document.getElementById('display').value = display.slice(0, -1) + operator;
    } else {
        document.getElementById('display').value += operator;
    }
}

function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Invalid Calculation');
    }
}
