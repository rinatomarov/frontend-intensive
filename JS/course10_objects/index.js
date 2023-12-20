// string, number, null, undefined, boolean => примитивные типы данных

const property = 'bin'

const student = {
    name: "Rincho",
    'specialty': {
        'name': 'SIS',
        'since': 2015
    },
    [property]: 9990019909,
    grade: 3,
    grade2: 3,
    grade3: 3,
    someFn: function () {
    }
}

//
// console.log(student[property])
// console.log(student.iin)

// console.log(Object.values(student))
// console.log(Object.keys(student))
// console.log(Object.entries(student))

// console.log(student.name)
// console.log(student.specialty)
// console.log(student.grade)
// console.log(student.bin)

// console.log(Object.values(student))

// for (let idx = 0; idx < Object.keys(student).length; idx++) {
//     console.log(Object.values(student)[idx])
// }

// console.log(student.hasOwnProperty('grade'))

function someFn () {

}

const someFn2 = () => {}
