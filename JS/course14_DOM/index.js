const button = document.querySelector('.button')
const audio = document.querySelector('.audio')
const card = document.querySelector('.card')



// button.style.color = 'red'

//text-transform
// camelcase
// button.style.textTransform = 'uppercase'

console.dir(button)

// button.addEventListener('click', (event) => {
//     event.stopPropagation()
//
//     button.classList.toggle('button-purple')
//     audio.pause()
// })
//
// card.addEventListener('click', (event) => {
//     console.log('Card clicked')
// })

// document.addEventListener('keydown', (event) => {
//     console.log(event.code)
// })
//
//
// button.click()

const input = document.querySelector('input')

input.addEventListener('keydown', (event) => {
    const numbers = [0,1,2,3,4,5,6,7,8,9]

    if(!numbers.some(num => event.key === num.toString())) {
        alert('Можно вводить только числа')
    }
})