let countEL = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
let count = 0
let saver = ''
function increment() {
    count+=1;
    countEL.textContent = count
}
function save(){
    saveEl.innerText += ` ${count} - `
    count = 0
    countEL.innerText = 0
}