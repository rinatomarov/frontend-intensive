// string , number , null, undefined , boolean -> примитивные типы данных

const prop1 = 'bin'
const student = {
    name: "Rincho",
    specialty:{
        name :"SIS",
        since:2021
    },
    grade:3,
    [prop1]:12221,
}

const property = 'name'
console.log(student[property])
console.log(student[prop1])

console.log(Object.values(student))
console.log(Object.keys(student))
console.log(Object.entries(student))
console.log(student.hasOwnProperty('grade'))