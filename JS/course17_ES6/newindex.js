const student = {
    name: 'Rincho',
    grades: {
        math: 5
    },
    surname: 'Omarov'
}

const student2 = { ...student, grades: { ...student.grades } }

const numbers = [1,2,3,4,5,6,7,8,9]

student.grades.math = 3
console.log(student)
console.log(student2)

for (let i = 0; i < Object.keys(student).length; i++) {
    console.log(Object.keys(student)[i])
}

for(let key in student) {
    console.log(key)
}

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

for(let el of numbers) {
    console.log(el)
}

const number = 12123121298371982731982731892731982371928371928371982371928371892371892731982739182731927312893 * 112398123901283091829038120938109823019283019830912831
console.log(number)

const bigNumber = new BigInt(12123121298371982731982731892731982371928371928371982371928371892371892731982739182731927312893 * 112398123901283091829038120938109823019283019830912831)
console.log(bigNumber)

const array = [1,1,2,2,3,3,4,4]
console.log(array)

const set = new Set(array)

set.add(5)
set.add(4)
console.log(set)
console.log(set.size)
console.log(set.delete(4))
console.log(set.clear())
console.log(set)

console.log(set.has(8))
console.log(set.keys())


for(let i of set.keys()) {
    console.log(i)
}

 // Деструктуризация объекта
const { name, grades, surname } = student
const name = student.name
const grades = student.grades
const surname = student.surname

console.log(name)
console.log(grades)
console.log(surname)