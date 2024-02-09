// 1
const array = [1,1,2,2,4,4]
const set = new Set(array)
console.log(...set)

//2
import strCompare from './stringCompare.js'
console.log(strCompare('rina','rincho'))

//3
import compareObjectInUser from './user.js'
const student1 = {
    name: 'Daur'
}
const user1 = {
    name: 'Rinat'
}

console.log(compareObjectInUser(user1,student1))