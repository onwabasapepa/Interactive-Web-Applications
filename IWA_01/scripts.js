const MAX_NUMBER = 15
const MIN_NUMBER = -5
const STEP_AMOUNT = 5

const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')


// console.log(typeof 123,typeof "123", typeof true)
const subtractHandler = () => {

 const newvalue = parseInt(number.value) - STEP_AMOUNT
 number.value = newvalue

 if(add.disabled === true) {
      add.disabled = false
 }

 if (newvalue <= MIN_NUMBER) {
      subtract.disabled =true
     } 
}

const addHandler = () => {
      const newvalue = parseInt(number.value) + STEP_AMOUNT
     number.value = newvalue

     if(subtract.disabled === true) {
      subtract.disabled = false
 }
     
     if (newvalue >= MAX_NUMBER) {
      add.disabled =true
     } 
}



// if (newvalue >= MAX_NUMBER)


subtract.addEventListener('click', subtractHandler)
add.addEventListener('click', addHandler)