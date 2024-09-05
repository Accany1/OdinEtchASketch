getRandomColor = () => {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) +')';
}

const container = document.querySelector('.container')
let squaresPerSide = 16
let squareHeight = 6.25

//creation of squares
squareCreation = (numOfSquares,squareHeight) => {
    for( let i = 0; i<numOfSquares;i++){
        const div = document.createElement('div')
        div.classList.add('square')
        div.style.height = squareHeight+'%'
        div.style.opacity = 1.0
    
        div.addEventListener('mouseover', () => {
            div.style.transition =  'none'
            div.style.backgroundColor = 'rgb(0,0,255)' 
        })
    
        div.addEventListener('mouseout', () => {
            div.style.transition =  'background-color 1s'
            div.style.backgroundColor = `${getRandomColor()}`
            opacity = parseFloat(div.style.opacity) - 0.1
            div.style.opacity = opacity
        })
        container.appendChild(div)
    }
}

squareCreation(squaresPerSide**2,squareHeight)


const sizeBtn = document.querySelector('.size')
sizeBtn.addEventListener('click', () => {
    squaresPerSide = prompt('How many squares per side?')
    if (squaresPerSide > 100) {
        squaresPerSide = 100
    } else if (squaresPerSide < 1){
        squaresPerSide = 1
    }
    squareHeight = 100/squaresPerSide
    container.textContent = ''
    squareCreation(squaresPerSide**2,squareHeight)
})