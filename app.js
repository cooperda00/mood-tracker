//Variables:
//Picked Color 
let color;
//Button
const button = document.querySelector('button');
//Days 
const days = document.querySelectorAll('.day');
//Color Picker
const colorsToPick = document.querySelectorAll('li');

//--------------------------------------------
//Event Listeners:
//Finds CSS backgroud color of clicked square and updates the color variable
document.querySelector('ul').addEventListener('click', function (e) {
    if (e.target.matches('li')) {
    let style = window.getComputedStyle(e.target);
    let background = style.backgroundColor;
    color = background;
    //Loop through color picker
    for (let i = 0; i < colorsToPick.length; i++) {
        //Remove Selected if there is one
        colorsToPick[i].classList.remove('selected');   
    }
    //Add selected to clicked one
    e.target.classList.toggle("selected");
    }
});
//Changes color of calendar square when clicked 
document.querySelector('.grid-container').addEventListener('click', function(e) {
    //Find background style of cell
    let style = window.getComputedStyle(e.target);
    let background = style.backgroundColor;
    //Only targets '.cell day' that is gray and with a color selected
    if (e.target.className === 'cell day' && background === 'rgb(128, 128, 128)' && color != undefined)  {
    e.target.style.background = color;
    //Converts to '.cell checked' to prevent accidental changing of color
    e.target.className = 'cell checked';

    //Set key/value pairs in local storage (date/color)
    let key = e.target.innerText 
    localStorage.setItem(JSON.stringify(key), color);
    } 
});
//Clear Local Storage Button
button.addEventListener('click', () => {
    //Clear storage
    localStorage.clear();
    //Loop through days and set to gray
    for (let i = 0; i < days.length; i++) {
        days[i].style.background = 'gray';
    } 
});
//----------------------------------------------
// Load from local storage
//Loop through days of the month
for (let i = 0; i < days.length; i++) {
    //Checks if there is a key:value for the day
    if (localStorage.getItem(`"${i+1}"`) != null) {
        //Changes the bg color to reflect the local storage
        let bgColor = localStorage.getItem(`"${i+1}"`);
        days[i].style.background = bgColor;
    }    
}