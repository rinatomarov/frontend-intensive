// На сайте есть следующие данные:
//
//     1. Расстояние от ближайшего филиала до вас
// 2. Меню заведения
// 3. Данные заведения
// 4. Есть ли бесплатная доставка
// 5. Название выбранного заведения

// 1
const closestDistanceFilial = 400

console.log(closestDistanceFilial)
// 2
const menuRestaurants ={
    category:{
        hodDishes:{
            f1:{
                name:"Гуйру лагман",
                description:"Подлив , крупно нарезанное мясо говядины, сельдерей, пекинская капуста. Основа тесто лагманное"
            },
            f2:{
                name:"Суйру лагман",
                description: "Подлив,  мелко нарезанное мясо говядины, перец красный и зеленый, сельдерей, пекинская капуста. Основа тесто лагманное"
            },
            f3:{
                name:"Бесбармак",
                description:"Тесто бешбармака, говядина, казы, жая туздык, бульон"
            }
        },
        salads:{
            f1:{
                name:"Цезарь с курицей"
            },
            f2: {
                name:"Каприз",
                description:"Кукуруза, говяжий  язык, яйцо, листья салата, огурцы соленые, шампиньоны"
            },
            f3: {
                name:"Гнездо глухаря",
                description:"Огурцы свежие, яйцо, картофель пай"
            }
        },
        soups:{
            f1:{
                name:"Суп баранина",
                description:"Баранина, картофель, перец светофор, айран"
            },
            f2:{
                name:"Манпар",
                description:"Говядина, тесто, перец полу горький, кинза"
            },
            f3:{
                name:"Суп лапша",
                description:"Лапша, окорочка, картофель, морковь, укроп"
            }
        }

    }
}
console.log(menuRestaurants)
// 3
const dataHouse = {
    dermene:{
        name : 'Dermene',
        address: "Satpayeva 102",
        city:"Almaty",
        opening_times : "10:00–23:00",
        phone_number: "87771112233"
    },
    bking:{
        name : 'Burger King',
        address: "Abaya 65",
        city:"Almaty",
        opening_times : "10:00–22:00",
        phone_number: "87011234554"
    },
    tagam:{
        name : 'TAGAM',
        address: "Zharokova 34",
        city:"Almaty",
        opening_times : "09:00–23:00",
        phone_number: "87778558899"
    },
}
console.log(dataHouse)
// 4.
const freeShipping ={
    dermene :false,
    bking:true,
    tagam:false
}
console.log(freeShipping.dermene)
// 5
console.log(dataHouse.dermene.name)