//Variables

//Color value
let color = '';

//Color Picker
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const black = document.getElementById('black');
const brown = document.getElementById('brown');
const purple = document.getElementById('purple');
const orange = document.getElementById('orange');
const white = document.getElementById('white');

//Collection of days
const days = document.querySelectorAll('.day');

//---------------------------------------
//Event Listeners

//Event Listeners for color picker
red.addEventListener('click', () => {
    color = 'red';
});
blue.addEventListener('click', () => {
    color = 'blue';
});
yellow.addEventListener('click', () => {
    color = 'yellow';
});
green.addEventListener('click', () => {
    color = 'green';
});
black.addEventListener('click', () => {
    color = 'black';
});
brown.addEventListener('click', () => {
    color = 'brown';
});
purple.addEventListener('click', () => {
    color = 'purple';
});
orange.addEventListener('click', () => {
    color = 'orange';
});
white.addEventListener('click', () => {
    color = 'white';
});

//Event listener to change color
document.querySelector('.grid-container').addEventListener('click', changeColor);

function changeColor(e) {
    if (e.target.className === 'cell day') {
    e.target.style.background = color;
    }
}


