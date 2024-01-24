// 1
const car = {
    name: 'KIA',
    model:'K5',
    complectation:'Luxe',
    price_tg:15999000,
    garanty_km:100000
}
const complectation_prices_1000 =[13990,14590,15600,17890,18900]

for (let key in car){
    // console.log(key, ":", car[key])
}
// for (let value of car){
//     console.log(value, ":", car[key])
// }

let count = 1
for(let prices of complectation_prices_1000) {
    // console.log(count ,"комплектация стоит: " , prices)
    count++
}

// 3
const {name,model ,complectation,price_tg,garanty_km } = car
// const name = car.name
// const model = car.model
// const complectation = car.complectation
// const price_tg = car.price_tg
// const garanty_km = car.garanty_km

// console.log(name)


// 2
let SetCollection = new Set();
for(let n =0; n<5;n++){
    let drink = prompt("Введите имя напитков")
    SetCollection.add(drink)
}
console.log(SetCollection);