// 1.Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

function ucFirst(str){
    return str.at(0).toUpperCase() + str.slice(1)
}
// console.log(ucFirst("вася"))

// 2.Напишите функцию checkSpam(str), возвращающую true, если str содержит 'лотерея' или 'бесплатно', а иначе false.
function checkSpam(str){
    let lowerStr = str.toLowerCase();
    if (str.includes('лотерея') || str.includes('бесплатно')){
        return true
    }
}
// console.log(checkSpam('бесплатно'))

// 3.Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
function truncate(str, maxlength){
    if (str.length >= Number(maxlength)){
        return str.slice(0,maxlength) + '...'
    }
}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))