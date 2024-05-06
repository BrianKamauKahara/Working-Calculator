// Will come back later
// ELEMENTS
let dispArea = document.getElementById('displaybox')
const butC = document.getElementById('number-C')


// FUNCTION DECLARATIONS
const clearScreen = () => {
    dispArea.textContent = "";
}
const updScreen = (elval) => {
    dispArea.textContent += elval.textContent
}
const calculate = () => {
    try {
        let result = eval(dispArea.textContent)
        dispArea.textContent = result
    } catch (error) {
        dispArea.textContent = 'Improper Syntax'
    }
}
const alertUpd = () => {
    alert('New features Will Come SOON!')
}
const delChar = () => {
    dispArea.textContent = dispArea.textContent.slice(0,-1)
    console.log(dispArea)
}
//FUNCTION CALLS
butC.addEventListener('click',clearScreen())

