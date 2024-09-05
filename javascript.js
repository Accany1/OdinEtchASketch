const container = document.querySelector('.container')
let squaresPerSide = 16
let squareHeight = 6.25

//creation of squares
squareCreation = (numOfSquares,squareHeight) => {
    for( let i = 0; i<numOfSquares;i++){
        const div = document.createElement('div')
        div.classList.add('square')
        div.style.height = squareHeight+'%'
    
        div.addEventListener('mouseover', () => {
            div.style.transition =  'none'
            div.style.backgroundColor = 'blue'
        })
    
        div.addEventListener('mouseout', () => {
            div.style.transition =  'background-color 1s'
            div.style.backgroundColor = 'yellow'})
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