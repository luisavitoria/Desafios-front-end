
const btnDecrease = document.getElementById('button--decrease')
const btnIncrease = document.getElementById('button--increase')
const divCounter = document.getElementById('counter--number')
btnDecrease.disabled = true
let valueCounter = document.getElementById('counter--number').innerText 


const form = document.getElementById('form')
const checkboxes = document.querySelectorAll('input[name="sticker"]')
const arrayCheckboxes = [...checkboxes]
const labelCheckboxes = document.getElementsByClassName('checkbox--label')
const btnSubmit = document.getElementById('button--submit')
btnSubmit.disabled = true
const divSuccessMessage = document.getElementById('success--message')


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
    divCounter.style.backgroundColor = '#DDE3E9'
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
        divSuccessMessage.innerText = ''

        Array.from(labelCheckboxes).forEach(item => {
            item.style.setProperty('--labelBeforeBackColor', '#2F3676')
        })
    }

    return numberChecked
}

arrayCheckboxes.forEach(element => {
    element.onclick = checkboxesChecked
})

btnSubmit.onclick = function(e) {
    e.preventDefault()

    const numberChecked = checkboxesChecked(arrayCheckboxes)
    console.log(numberChecked)

    if(valueCounter <= 0 && numberChecked <= 0) {
        divCounter.style.backgroundColor = '#F59393'
        btnDecrease.style.backgroundColor = '#2F3676'

        return
    }else if(valueCounter <= 0) {
        divCounter.style.backgroundColor = '#F59393'
        btnDecrease.style.backgroundColor = '#2F3676'

        return
    } else if(numberChecked <= 0) {
        Array.from(labelCheckboxes).forEach(item => {
            item.style.setProperty('--labelBeforeBackColor', '#F59393')
        })
        
        return
    }else {
        divSuccessMessage.innerText = 'Formulário enviado com sucesso!'

        setTimeout(() => {
            form.submit()
        }, 5000);
    }
}











