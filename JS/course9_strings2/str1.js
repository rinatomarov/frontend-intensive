// 1
const str1 = 'Password'
console.log(str1.slice(0,4))
console.log(str1.slice(4))
console.log(str1.substring(0,4))
console.log(str1.substring(8,4))

// 2
const str2 = "Hello! It's me."
console.log(((str2.replaceAll('!','')).replaceAll("'","")).replaceAll('.','') )

// 3
const str3 = 'MyNameIsRin#'
if (str3.length>=8){
    console.log("Длина больше 8 символов")
}else
    console.log("Длина меньше 8 символов")

if (str3.includes(' ')){
    console.log("Пробел имеется в пароле")
}else
    console.log("Пробел не имеется в пароле")

//Содержать как минимум 1 заглавную букву
// сделать цикл и там нужно поделить на символы потом использовать метод caps , и проверить на равно равно