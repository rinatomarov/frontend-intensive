// try {
//     const a = 'asd' + asd;
// } catch (e) {
//     console.log('Была ошибка')
// }
//
// console.log('Hello')

function sum (a, b) {
    if(a === undefined || b === undefined) {
        throw Error('You need to declare a and b')
    }

    return a + b
}

try {
    console.log(sum(6))
} catch (e) {
    console.log(e)
}


function loadUsers() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject([
                { name: 'Baha'},
                { name: 'Skye'},
                { name: 'Rincho'},
            ])
        }, 100)
    })

    return promise
}

// loadUsers().then((users) => {
//     console.log(users)
//     return 'Hi'
// }).then((a) => {
//     console.log(a)
// })

// .catch()

// async/await
// async function printUsers() {
//     const users = await loadUsers()
//     console.log('Users loaded')
//     console.log(users)
// }

// const printUsers = async () => {
//     try {
//         const users = await loadUsers()
//         console.log(users)
//     } catch (e) {
//         console.log(e)
//         // console.log('Ошибки больше нет')
//     } finally {
//         console.log('FINALLY')
//     }
// }

// printUsers()
