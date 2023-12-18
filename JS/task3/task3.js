// 1
const num1 = prompt("Введите первое число: ")
const num2 = prompt("Введите второе число: ")
alert(`Сумма двух чисел равен : ${Number(num1)+ Number(num2)}` )

// 2
let i = 0;
while (i < 10) { // будет работать до 10 и остановиться
    i += 0.2;
    console.log(i)
}


// 3
function random(min , max){
    randomNumber = min + Math.round(Math.random() * (max-min))
    console.log(randomNumber)
    if (randomNumber >= min && randomNumber<= max){
        return randomNumber
    }else
        return max - (randomNumber-min)

}
const minNumber = prompt("Введите минимальное число :")
const maxNumber = prompt("Введите максимальное число :")
alert(`Сгенерированное число : ${random(Number(minNumber) ,Number(maxNumber ))}`)