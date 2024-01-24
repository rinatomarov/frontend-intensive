// 1
const data = {
    name: 'Rinat',
    grade: {
        math: {
            firstSemester: 5
        }
    }
}

const { name, surname, grade: { math: {firstSemester} }} = data
console.log(firstSemester)

// 2
function swap(variable){
    if (!(typeof variable === 'string')) throw new Error('Аргумент не является STRING!!!')
    // let reverseVariable = ''
    // for(let n = variable.length-1;n>=0;n--){
    //     reverseVariable += variable[n]
    // }
    // return reverseVariable

    return variable.split('').reverse().join('')
}
// console.log(swap(123))
// console.log(swap(true))
// console.log(swap(false))
// console.log(swap('asd'))

try {
    console.log(swap(123))
    console.log(swap(true))
    console.log(swap(false))
    // console.log(swap('asd'))
} catch (e) {
    console.log(e)
} finally {
    console.log(swap('asd'))
}