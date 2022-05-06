

const btnDecrease = document.getElementById('button--decrease')
const btnIncrease = document.getElementById('button--increase')
const divCounter = document.getElementById('counter--number')

let value = document.getElementById('counter--number').innerText 

btnDecrease.disabled = true


btnDecrease.onclick = function(e) {
    e.preventDefault()
    
    --value 

    if(value <= 0) {
        btnDecrease.style.backgroundColor = '#DDE3E9'
        divCounter.innerText = value
        btnDecrease.disabled = true
    } else {
        divCounter.innerText = value
    }
}

btnIncrease.onclick = function(e) {
    e.preventDefault()

    ++value
    
    btnDecrease.disabled = false
    btnDecrease.style.backgroundColor = '#2F3676'  
    divCounter.innerText = value
}

