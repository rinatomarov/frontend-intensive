const login = document.querySelector('input[name="login"]')
console.log(login)
const psword = document.querySelector('input[name="psword"]')
console.log(psword)
const button = document.querySelector('button')
// console.log(button)

// pending, resolved, rejected
button.addEventListener('click', function (event) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const loginPassword = 'admin'
            login1 = login.value
            pass1 = psword.value
            console.log(login1)
            let toast = 'вы успешно зашли'
            if (login1 === loginPassword && pass1 === loginPassword) {
                resolve(toast)
            } else {
                reject('error')
            }

        }, 1000)

        // const response = requestToBackend()
        // resolve(response)
    })
    promise.then((toast) => {
        console.log('success')
    })

    promise.catch((toast) => {
        console.log('error')
    })

    promise.finally(() => {
        console.log('ura')
    })
})
//
