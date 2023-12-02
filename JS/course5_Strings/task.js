// 1
const specialty = 'Back-end developer'
// 2
console.log(specialty.length)
// 3
if (specialty.length > 12) {
    console.log('"Длинный текст"')
}
// console.log(specialty[0])
// 4
if (specialty[0] !== 'f' && specialty[0] !== 'F'){
    console.log('"Не наш человек"')
}
// 5
console.log("Я окончил специальность - " + specialty)
console.log(`Я окончил специальность - ${specialty}`)
