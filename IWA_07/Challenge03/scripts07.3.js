const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line
let positiveLeoBalance = Math.abs(leoBalance)
//console.log(typeof positiveLeoBalance)


console.log(sarahName.trim())
console.log(leoSurname.trim())
let positiveSarahBalance = Math.abs(sarahBalance)
 const owed = (positiveLeoBalance + positiveSarahBalance).toFixed(2)
 const leo = `${leoName} ${leoSurname.trim()} (Owed: R ${positiveLeoBalance.toFixed(2)})`
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: R ${positiveSarahBalance.toFixed(2)})`
 const total = "Total amount owed:"
console.log(`\n${leo}\n${sarah}\n\n${divider}\n  ${total} R ${owed.toString().slice(0, 2)} ${owed.toString().slice(2)}\n${divider}`)

// const owed = parseInt('R' + leoBalance + sarahBalance)
// const leo = `${leoName} + ${leoSurname} + \"Owed\" + \"R\" + ${leoBalance}`
// const sarah = `${sarahName} + ${sarahSurname} + \"Owed\" + \"R\" + ${sarahBalance}`
// const total = "Total amount owed: "
// const result = leo + sarah + divider + divider + total + owed + divider

// console.log(result)