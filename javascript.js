const container = document.querySelector('.container')

for( let i = 0; i<256;i++){
    const div = document.createElement('div')
    div.classList.add('square')
    div.addEventListener('mouseover', () => {
        div.style.transition =  'none'
        div.style.backgroundColor = 'blue'
    })
    div.addEventListener('mouseout', () => {
        div.style.transition =  'background-color 1s'
        div.style.backgroundColor = 'yellow'})
    container.appendChild(div)
}


