// GET Request => запрос на получение

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => {
//         return response.json()
//     })
//     .then(json => console.log(json))

// async function loadTodo () {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//
//     console.log(await response.json())
// }
//
// loadTodo()

// GET, PUT, POST, DELETE

// const obj = {
//     name: 'Baha'
// }
//
// console.log(JSON.stringify(obj))

// POST
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'BAHA HOT',
        body: 'BAHA HOT',
        userId: 1,
    })
}).then(response => {
    return response.json()
}).then(json => console.log(json))


//PUT
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//         title: 'HOT BAHA',
//         body: 'HOT BAHA',
//         userId: 1,
//     })
// }).then(response => {
//     return response.json()
// }).then(json => console.log(json))

//DELETE
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
})
    .then(response => {
        return response.json()
    })
    .then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json()
    })
    .then(json => console.log(json))

