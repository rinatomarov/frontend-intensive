const str1 = "String String"
const str2 = ''
const str3 = `${1+1}`

console.log(str1.at(0)) // получить символ по айди
console.log(str1.split(''))  // преобразование к массиву
console.log(str1.trim())  // удаляет лишний пробелы
console.log(str1.includes('s')) // ищет есть ли такой символ в строке
console.log(str1.indexOf('g')) // возвращает первое нахождение - индекс
console.log(str1.lastIndexOf('g')) // возвращает последнее нахождение - индекс
console.log(str1.toLowerCase()) // возвращает маленький литералы
console.log(str1.toUpperCase()) // возвращает все строки как капсы
console.log(str1.replace('Str', 'rub')) // заменяет только первую встретившуюся строку
console.log(str1.replaceAll('Str', 'rub')) // заменяет все  схожие встретивщиеся строки
console.log(str1.slice(3)) // удаляет первые 3 символа
console.log(str1.slice(2, 6)) //2- начало ,6 - конец , вырезает символы внутри строки
console.log(str1)
console.log(str1.substring(2, 6)) // аналогично slice ,
console.log(str1.substring(8, 6)) // назад может идти ,а slice нет
console.log(str1.startsWith('hello')) //  проверяет начало строки , есть ли такая строка
console.log(str1.endsWith('ing')) // проверяет конец строки , есть ли такая строка
console.log(([1,2,34]).toString())
console.log()