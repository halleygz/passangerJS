//getting DOM elements
let countEL = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
//initialize counter saver string
let count = 0
let saver = ''
//increment function
function increment() {
    count++;
    countEL.textContent = count
}
// save function
function save(){
    saveEl.innerText += ` ${count} - `
    count = 0
    countEL.innerText = 0
}