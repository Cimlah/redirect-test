const background = document.querySelector('body')
const colourString = document.querySelector('#colour-string')

let randomColour = Math.floor(Math.random()*16777215).toString(16);

background.style.backgroundColor = '#' + randomColour
colourString.innerHTML = '#' + randomColour