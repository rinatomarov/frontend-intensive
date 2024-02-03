const toast = document.createElement('div')
toast.classList.add('toast')
toast.innerText = 'Произошла ошибка'

document.body.append(toast)

const someFn = () => {
    setTimeout(() => {
        toast.remove()
    }, 3000)

    alert('Toast removed')
}

someFn()

console.log(2222)

// for (let i = 0; i < 10; i++) {
//     setTimeout(() => console.log(i), 1000)
// }

// for (var i = 0; i < 10; i++) {
//     setTimeout(() => console.log(i), 1000)
// }

const interval = setInterval(() => {
    console.log('Hello')
}, 500)

console.log(interval)

clearInterval(interval)