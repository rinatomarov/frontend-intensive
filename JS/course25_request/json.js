async function loadPost () {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    // console.log(await response.json())
    return  response.json()
}

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json()
    })
    // .then(posts =>console.log(posts))
    // .then(json => console.log(json))


// 2
const parent = document.querySelector('.parent')
const btn = document.querySelector('button')

btn.addEventListener('click' , () => {
    const post = document.createElement('div')
    post.classList.add('post')

    let namePost = prompt('Прошу ввести тему поста')
    const name = document.createElement('h3')
    name.innerText = namePost

    let textPost = prompt('Прошу ввести текст поста')
    const textP = document.createElement('p')
    textP.innerText =textPost

    post.appendChild(name)
    post.appendChild(textP)

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: namePost,
            body: textPost,
            userId: 1,
        }),headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(response => {
        return response.json()
    }).then(json => console.log(json)).then(parent.appendChild(post))



    const btnDelete = document.createElement('button')
    btnDelete.innerText = 'удалить'
    post.appendChild(btnDelete)

    const btnUpdate = document.createElement('button')
    btnUpdate.innerText = 'редактировать'
    post.appendChild(btnUpdate)

    btnDelete.addEventListener('click' , () => {
        // alert("delete")
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'DELETE'
        })
            .then(response => {
                return response.json()
            })
            .then(json => console.log(json))

        post.remove(post)
    })

    btnUpdate.addEventListener('click' , () => {
        // alert("update")
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            // сделать так чтобы  он менял
            body: JSON.stringify({
                title: prompt("Прошу ввести тему "),
                body: prompt("Прошу ввести текст поста "),
                userId: 1,
            }),headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(response => {
            return response.json()
        }).then(json => console.log(json))

    })
})

