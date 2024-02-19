    // axios.get('http://localhost:3000/posts')
    //     .then(response => {
    //         console.log(response.data)
    //     })

// axios.post('http://localhost:3000/posts', {
//     id: 3,
//     title: 'title skye',
// })
//
// axios.post('http://localhost:3000/posts', {
//     id: 4,
//     title: 'title dauren',
// })
// axios.post('http://localhost:3000/posts', {
//     id: 5,
//     title: 'title friend',
// })
// axios.post('http://localhost:3000/posts', {
//     id: 6,
//     title: 'title gera',
// })
// axios.post('http://localhost:3000/posts', {
//     id: 7,
//     title: 'title rincho',
// })
// axios.post('http://localhost:3000/posts', {
//     id: 8,
//     title: 'title alizh',
// })

let id  = 1
const parent = document.querySelector('ul')
const liTitles = document.createElement('li')

const postJson = axios.get(`http://localhost:3000/posts/${id}`)
    .then(response => {
        console.log(response.data.title)
        liTitles.innerText = response.data.title
        console.log(liTitles)
        parent.appendChild(liTitles)
    })



//
for (let id= 1;id<6;id++){
    axios.get(`http://localhost:3000/posts/`)
        .then(response => {
            console.log(response.data.title)
            liTitles.innerText = response.data.title
            console.log(liTitles)
            parent.appendChild(liTitles)
        })
}

