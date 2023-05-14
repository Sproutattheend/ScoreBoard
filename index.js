let hmCountEl = document.getElementById('scoreHome')
let hmCount = 0
function onePointHm() {
    hmCount = hmCount + 1
    hmCountEl.innerText = hmCount
}
function twoPointHm() {
    hmCount = hmCount + 2
    hmCountEl.innerText = hmCount
}

function threePointHm() {
    hmCount = hmCount + 3
    hmCountEl.innerText = hmCount
}


let gstCountEl = document.getElementById('scoreGuest')
let gstCount = 0

function onePointGst() {
    gstCount = gstCount + 1
    gstCountEl.innerText = gstCount
}
function twoPointGst() {
    gstCount = gstCount + 2
    gstCountEl.innerText = gstCount
}
function threePointGst() {
    gstCount = gstCount + 3
    gstCountEl.innerText = gstCount
}
