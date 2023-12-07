//1
// for (let counter = 1; counter <= 50; counter++) {
//     console.log(counter*2)
// }

// let counter = 1
// while (counter <= 50) {
//     console.log(counter*2)
//     counter++
// }

//2
// for (let counter = 0; counter <= 20; counter++) {
//     console.log(`Ура мне ${counter} лет`)
// }

//3
// let name = 'Rinat'
// let cnt = name.length-1
// do {
//     console.log(name.at(cnt))
//     cnt--
// } while (cnt >= 0)

//4
const days= ['понедельник','вторник','среда','четверг','пятница','суббота', 'воскресенье']
for (let counter =0; counter < days.length; counter++) {
    console.log(`Сегодня ${days[counter]} `)
}