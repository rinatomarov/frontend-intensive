// const data = {
//     name: "Rincho",
//     surname: "Omarov",
//     // job: {
//     //     specialty: 'QA'
//     // }
// }
//
// // for(let key in data) {
// //     console.log(key)
// // }
//
// // for(let key of Object.keys(data)) {
// //     console.log(key)
// // }
//
// // const { name, surname, job: { specialty }} = data
// //
// // console.log(name, surname)
// // console.log(specialty)
//
// // const numbers = [1,2,3]
// // const [first, second] = numbers
// //
// // console.log(first)
// // console.log(second)
//
// // let a = 5
// // let b = 7
//
// // const arr = [5 , 7]
//
// // const temp = a
// // a = b
// // b = temp
// // console.log(a, b)
//
//
// // let [c, d] = arr
//
// // console.log(c, d)
//
// // const map = new Map()
//
// // map.set(data, 'Rincho')
// // map.delete(data)
//
// // console.log(map.has(data))
// // console.log(map.has(data))
//
// // map.clear()
// // console.log(map.size)
// // console.log(map.get(data))
//
// function deleteObjectProp(obj, key) {
//     if(!obj.hasOwnProperty(key)) throw new Error('нет такого ключа')
//
//     delete obj[key]
// }
//
// try {
//     // const number = 1
//     // console.log(number)
//     //
//     // // number = 2
//     //
//     // throw new Error('пиши нормально')
//     //
//     // console.log(number)
//
//     deleteObjectProp(data, 'grade')
// } catch (e) {
//     console.log(e)
//     console.log('у тебя ошибка')
// } finally {
//     console.log('Работаю все равно')
// }