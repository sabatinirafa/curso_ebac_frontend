let result = document.getElementById('result')
let form = document.getElementById('form')
let isValid

let validation = (a, b) => {
  if (b > a) {
    return true
  } else {
    return false
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  let numberA = document.getElementById('numberA')
  let numberB = document.getElementById('numberB')

  isValid = validation(Number(numberA.value), Number(numberB.value))


  if(isValid) {
    result.innerText = 'Formulário válido!!'
    result.classList.remove('invalid')
    result.classList.add('valid')
  } else {
    result.innerText = 'Formulário inválido!'
    result.classList.remove('valid')
    result.classList.add('invalid')
  }
})
