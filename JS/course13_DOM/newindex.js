// DOM - Document Object Model


// let aaa = 'asd'

// alert('Hi')
// window.alert('Hi')

// console.log(document)

// document.write('Hello')

const paragraph = document.querySelector('p')
const paragraphs = document.querySelectorAll('p')

console.log(paragraph)
console.log(paragraphs)

// paragraph.innerHTML = '<img width="50" src="https://www.shutterstock.com/image-illustration/pristine-reflective-lake-show-image-260nw-2305485315.jpg" >'

// paragraph.classList.add('text-red')
// paragraph.classList.remove('text-large')

// если нет класса - добавляет, если класс есть - удаляет
// paragraph.classList.toggle('text-large')

// console.log(paragraph.classList)

// const showMessage = () => {
//     alert('Hello')
// }
//
// const button = document.querySelector('#button')
//
// button.addEventListener('click', () => {
//     showMessage()
// })

const button = document.querySelector('#button')

const addClasses = () => {
    button.classList.toggle('text-large')
    button.classList.toggle('text-red')
}

button.addEventListener('click', addClasses)