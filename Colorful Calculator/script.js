function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function deleteLast() {
    let display = document.getElementById('display').innerText;
    if (display.length > 1) {
        document.getElementById('display').innerText = display.slice(0, -1);
    } else {
        document.getElementById('display').innerText = '0';
    }
}

function append(character) {
    let display = document.getElementById('display').innerText;
    if (display === '0' && character !== '.') {
        document.getElementById('display').innerText = character;
    } else {
        document.getElementById('display').innerText += character;
    }
}

function calculate() {
    let display = document.getElementById('display').innerText;
    try {
        document.getElementById('display').innerText = eval(display);
    } catch (e) {
        document.getElementById('display').innerText = 'Error';
    }
}