const array = [2,4,6,1,0,5, 1, 1, 6]

// console.log(array.reverse())
// console.log(array)

// ''.includes()

// console.log(array.includes(13))

// console.log(array.indexOf(3))

// console.log(array.lastIndexOf(3))

// console.log(array.sort())
// console.log(array)

// console.log(array.slice(2, 5))
// console.log(array.slice(3))
// console.log(array)

// console.log(array.splice(2, 3, 'hello'))
// console.log(array)

// function callback(element, index) {
//     console.log(element, index)
// }
//
// array.forEach((element, index) => {
//     console.log(element, index)
//
//     element = element * 2
// })

// console.log(
//     array.map((element, index) => {
//         return element * 2
//     })
// )

// console.log(array.some((element, index) => {
//     return element % 67 === 0
// }))

// console.log(array.every((element, index) => {
//     return element > 1
// }))
//
// console.log(array)

// console.log('#######')
//
// for(let i = 0; i < array.length; i++) {
//     callback(array[i], i)
// }

const menu = [
    {
        name: 'Плов',
        category: 'meal',
        price: 1,
    },
    {
        name: 'Суп',
        category: 'soup'
    },
    {
        name: 'Смузи',
        category: 'drink'
    },
]
//
// console.log(menu.find((element, index) => {
//     return element.name === 'Смузи'
// }))


// return x <= -1 | 0 | 1 <= x
// x <= -1 => сортировка в обратном порядке
// x >= 1 => сортировка в прямом порядке
// 0 => никаких изменений

// array.sort((a, b) => {
//     const value = b - a
//     console.log(value)
//
//     return value
// })

// console.log(array)

// console.log(array.filter((number, index) => {
//     return number > 5
// }))
//
// console.log(array)

// console.log(array.reduce((prev, cur) => {
//     console.log('prev', prev)
//     console.log('cur', cur)
//
//     return prev + cur
// }, 0))

// const deepArray = [1 ,2 ,3, [4, 5, 6, [7, 8, 9]]]
//
// console.log(deepArray.flat())

// const menuCopy = menu
//
// console.log(menu[0].name)
// console.log(menuCopy[0].name)
//
// menuCopy[0].name = 'Гуляш'
//
// console.log(menu[0].name)
// console.log(menuCopy[0].name)


const cart = [
    {
        name: 'наушники',
        price: 120000
    },
    {
        name: 'зарядка',
        price: 5000
    },
    {
        name: 'клавиатура',
        price: 35000
    },
]

// Вывести сумму цен всех товаров в корзине

console.log(cart.reduce((prev, cur) => {
    return cur.price + prev
}, 0))