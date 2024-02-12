// setTimeout(() => {
//     const toast = document.querySelector('.toast')
//     toast.remove()
// }, 3000)

// const timer = setInterval(() => {
//     console.log(new Date().toISOString())
// }, 2000)

// setTimeout(() => {
//     clearInterval(timer)
// }, 6000)

// pending, resolved, rejected
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(123)
        // resolve('Baha Hot')
        const success = true
        const toast = document.createElement('div')
        toast.classList.add('toast')
        toast.innerText='Hello'

        document.body.append(toast)

        if(success) {
            resolve(toast)
        } else {
            reject(toast)
        }

    }, 1000)

    // const response = requestToBackend()
    // resolve(response)
})

promise.then((toast) => {
    toast.classList.add('toast--success')
})

promise.catch((toast) => {
    toast.classList.add('toast--error')
})

promise.finally(() => {
    const toast = document.querySelector('.toast')
    setTimeout(() => {
        toast.remove()
    }, 1000)
})

// console.log(promise)