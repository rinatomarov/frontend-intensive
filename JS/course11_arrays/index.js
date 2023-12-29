// 1.Если у клиента есть промокод, то показавать ему список блюд с 10% скидкой
const menu = [{food_name: "Pelmen", price: 4500},
    {food_name: "Kasha", price: 1500},
    {food_name: "Kazy-Karta", price: 9900}]
const user =
    {user_name: "Dauke", has_promoCode: true}

if (user.has_promoCode) {
    const discountedMenu = menu.map(element => {
        return [element.food_name, element.price * 0.9]
    })
    // console.log("Цена со скидкой: " , discountedMenu)
}

// 2.Если у клиента нет промокода, то показавать ему список блюд без скидки
else {
    console.log("Цена без скидки: ", menu)
}
// 3.Если в меню есть хотя бы одно блюдо со стоимостью больше 5000тг, то перевернуть массив наоборот
if (menu.some(element => element.price > 5000)) {
    menu.reverse()
    // console.log(menu)
}

// 4.Посчитать сколько в меню блюд, названия которых начинается на "К"
console.log(menu.filter((element) => {
    let count = 0
    if (element.food_name.at(0)==='K'){
        count =count+1
        return count
    }
}))
