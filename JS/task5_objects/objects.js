// 1.Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
function isEmpty(obj) {
    for (let key in obj) {
        return false
    }
    return true
}

// let menu = {};
// console.log(isEmpty(menu))
// menu["mainFood"] = "Kazy_karta";
// console.log(isEmpty(menu))

// 2.У нас есть объект, в котором хранятся зарплаты нашей команды:
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0
for (let key in salaries){
    // console.log(salaries[key])
    sum+=salaries[key]
}
// console.log(sum)

// 3.Напишите функцию hasIntersection(obj1, obj2), котороя проверяет есть ли у obj1 и obj2 одинаковые свойста
function hasIntersection(obj1, obj2) {
    for (let key1 in obj1){
        for (let key2 in obj2){
            if (key1 === key2){
                // console.log(key1, key2)
                return true
            }
        }
    }
}
const student1 = {
    name: "Rinat",
    age: 19
}

const student2 = {
    name: "Skye",
    grade: 3
}
console.log(hasIntersection(student1,student2))