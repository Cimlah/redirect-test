const background = document.querySelector('body')
// const colourString = document.querySelector('#colour-string')
const colourDivs = document.querySelectorAll('.colour-div')

function generateColour() {
    return(Math.floor(Math.random()*16777215).toString(16))
}

colourDivs.forEach((colourDiv) => {
    colourDiv.style.backgroundColor = '#' + generateColour()
})