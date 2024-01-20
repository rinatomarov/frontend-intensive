export const sum = (...numbers) => {

    console.log(numbers)
    return numbers.reduce((prev, cur) => {
        return prev + cur
    }, 0)
}

export const PI = 3.14;

export default (...numbers) => {

    console.log(numbers)
    return numbers.reduce((prev, cur) => {
        return prev + cur
    }, 0)
}