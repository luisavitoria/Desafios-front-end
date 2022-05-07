
const btnDecrease = document.getElementById('button--decrease')
const btnIncrease = document.getElementById('button--increase')
const divCounter = document.getElementById('counter--number')
btnDecrease.disabled = true
let valueCounter = document.getElementById('counter--number').innerText 


const form = document.getElementById('form')
const checkboxes = document.querySelectorAll('input[name="sticker"]')
const arrayCheckboxes = [...checkboxes]
const btnSubmit = document.getElementById('button--submit')
btnSubmit.disabled = true


btnDecrease.onclick = function(e) {
    e.preventDefault()
    
    --valueCounter 

    if(valueCounter <= 0) {
        btnDecrease.style.backgroundColor = '#DDE3E9'
        divCounter.innerText = valueCounter
        btnDecrease.disabled = true
    } else {
        divCounter.innerText = valueCounter
    }
}

btnIncrease.onclick = function(e) {
    e.preventDefault()

    ++valueCounter
    
    btnDecrease.disabled = false
    btnDecrease.style.backgroundColor = '#2F3676'  
    divCounter.innerText = valueCounter
}

function checkboxesChecked() {
    let numberChecked = 0
    arrayCheckboxes.forEach(item => {
        if(item.checked) {
            numberChecked ++
        }
    })
    console.log(numberChecked)

    if(numberChecked > 0) {
        btnSubmit.disabled = false
        btnSubmit.style.backgroundColor = '#2F3676'
        btnSubmit.style.color = '#fff'
        btnSubmit.style.border = 'none'
    }
    return numberChecked
   
    
}

arrayCheckboxes.forEach(element => {
    element.onclick = checkboxesChecked
})




btnSubmit.onclick = function() {
    const numberChecked = checkboxesChecked(arrayCheckboxes)
    console.log(numberChecked)

    if(numberChecked <= 0) {
        alert('teste')
    }
}