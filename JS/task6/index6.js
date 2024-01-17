const input = document.querySelector('input');

input.addEventListener('keydown', (event) => {
    if (!Number.isInteger(Number(event.key))) {
        alert("Че то не то!")
    }
})

//
// input.addEventListener('keydown', (event) => {
//     const numbers = [0,1,2,3,4,5,6,7,8,9]
//
//     if(!numbers.some(num => event.key === num.toString())) {
//         alert('Можно вводить только числа')
//     }
// })