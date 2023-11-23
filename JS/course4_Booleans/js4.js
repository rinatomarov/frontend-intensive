const lowerLimit = 18
const higherLimit = 63
const age = 17

// console.log(lowerLimit <= age && age < higherLimit)
// condition AND
//true && false = false
//true &&true = true
//false && false = false
//
// console.log(age < lowerLimit || age >= higherLimit)
// condition OR
//false && false = false
//true && false = true
//true && true = true

// Отрицание
// console.log(age !== 18)
// console.log(!(age>lowerLimit))

// Приведение к типу
// console.log(!!('word')) //true
// console.log(!!([])) //true
// console.log(!!(1)) //true
// console.log(!!({})) //true
//
// console.log(!!(0)) //false
// console.log(!!('')) //false
// console.log(!!(null)) //false
// console.log(!!(undefined)) //false


// const isOld = age > 63
// const isYoung = age < 18
// if (isOld) {
//     alert("Пенсионер")
// } else if (isYoung) {
//     alert("Молодой")
// }
// if(isYoung){
//     alert("Молодой")
// }

const a = 4
const b = 8
if (a+b>10){
    alert("Больше чем 10")
}else if (a-b>=4){
    alert("а намного больше")
}
if(b%a===0){
    alert("а делится на b")
}


