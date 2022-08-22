let number = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function subtrair10() {
    number = number - 10;
    CURRENT_NUMBER.innerHTML = number;
};

function subtrair1() {
    number--;
    CURRENT_NUMBER.innerHTML = number;
};

function somar1() {
    number++;
    CURRENT_NUMBER.innerHTML = number;
};

function somar10() {
    number = number + 10;
    CURRENT_NUMBER.innerHTML = number;
};

function reset() {
    number = 0;
    CURRENT_NUMBER.innerHTML = number;
};