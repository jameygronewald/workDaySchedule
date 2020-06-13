let dateHeader = document.querySelector('#currentDay');
let timeHeader = document.querySelector('#currentTime');

dateHeader.textContent = moment().format('dddd MMMM do, YYYY');
timeHeader.textContent = moment().format('LTS');
console.log(dateHeader);