//1 - получение всех записей в посте бд
// axios.get('http://localhost:3000/posts/')
//         .then(response => {
//             lenObj = response.data.length
//             // console.log(lenObj)
//             console.log(response.data[0].title)
//             return lenObj
//         })

//2- добавление  записей в пост бд
// axios.post('http://localhost:3000/posts', {
//     id: 3,
//     title: 'title skye',
// })
//
// axios.post('http://localhost:3000/posts', {
//     id: 4,
//     title: 'title dauren',
// })


//3- создание  записей в пост (в файле html)
const parent = document.querySelector('ul')

// for (let id= 1;id<12;id++){
//     axios.get(`http://localhost:3000/posts/`)
//         .then(response => {
//             // console.log(response.data[12].title)
//             const liTitles = document.createElement('li')
//             liTitles.innerText = response.data[id].title
//             // console.log(liTitles)
//             parent.appendChild(liTitles)
//         })
// }

axios.get(`http://localhost:3000/posts/`).then(response => {
    for (let id = 1; id < response.data.length; id++) {
        const liTitles = document.createElement('li')
        liTitles.innerText = response.data[id].title
        parent.appendChild(liTitles)
    }
})


//4 - получение значение в форме инпут и поиск из элементов li

const btn = document.querySelector('button')
btn.addEventListener('click', () => {
    let dataInput = document.querySelector('input').value
    console.log(dataInput)
    parent.innerHTML = '';
    axios.get(`http://localhost:3000/posts/`).then(response => {
        for (let id = 1; id < response.data.length; id++) {
            const liTitles = document.createElement('li')
            if (response.data[id].title.toLowerCase().includes(dataInput.toLowerCase())) {
                liTitles.innerText = response.data[id].title
                parent.appendChild(liTitles)
            }
        }
    })
})



