async function loadTodo () {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    // console.log(await response.json())
    return  response.json()
}

const arrayForMe = loadTodo()
console.log(arrayForMe)

const post = document.createElement('div')
post.classList.add('post')

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
            title: name,
            body: textP,
            userId: 1,
        })
    }).then(response => {
        return response.json()
    }).then(json => console.log(json))
    parent.appendChild(post)


})

