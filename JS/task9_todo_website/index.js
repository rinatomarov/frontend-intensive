const activeToDo = document.querySelector('.todo-column-active')
const onHoldToDo = document.querySelector('.todo-column-on-hold')
const finishedToDo = document.querySelector('.todo-column-finished')
const canceledToDo = document.querySelector('.todo-column-canceled')
let idTask = 101
// console.log(todoItems)
const status =['active','hold','finished','canceled']
function addElements(statusTask,title){
    const todoItemsActive =  activeToDo.querySelector('.todo-items')
    const todoItemsHold =  onHoldToDo.querySelector('.todo-items')
    const todoItemsFinished =  finishedToDo.querySelector('.todo-items')
    const todoItemsCanceled =  canceledToDo.querySelector('.todo-items')

    // Создание елементов
    const todoItemCreate = document.createElement('div')
    todoItemCreate.classList.add('todo-item')
    const taskName = document.createElement('span')
    taskName.innerText = title
    const buttonTrash = document.createElement('button')
    buttonTrash.classList.add('trash')
    buttonTrash.innerHTML = '<img src="trash.svg">'
    todoItemCreate.append(taskName)
    todoItemCreate.append(buttonTrash)

    //Проверка и добавление элементов
    if (status[0].includes(statusTask)){
        todoItemsActive.append(todoItemCreate)
    } else if(status[1].includes(statusTask)){
        todoItemsHold.append(todoItemCreate)
    } else if(status[2].includes(statusTask)){
        todoItemsFinished.append(todoItemCreate)
    } else todoItemsCanceled.append(todoItemCreate)
    // todoItemsActive.append(todoItemCreate)

    // console.log(todoItems)

    idTask++
    return idTask
}

async function getToDoS(){
    const response = await axios.get('http://localhost:3000/todos')
    console.log(response.data)
    for (let id =0;id < response.data.length;id++){
        // console.log(response.data[id])
        let statusTask = response.data[id].status
        let title = response.data[id].title
        // console.log(statusTask, title)
        addElements(statusTask,title)
        // console.log(status[0])
    }
}
getToDoS()


const buttonCreateTask = document.querySelector('.create-name')

buttonCreateTask.addEventListener('click', async () => {
    let dataInput = document.querySelector('.input-name').value
    let radioDataActive = document.querySelector('#active').checked
    let radioDataFinished = document.querySelector('#finished').checked
    let radioDataOnHold = document.querySelector('#on-hold').checked
    let radioDataCanceled = document.querySelector('#canceled').checked


    async function postRequest(status,dataText){
        await axios.post('http://localhost:3000/todos',{
            id:idTask,
            title:dataText,
            status:status
        })
        addElements(status,dataText)
    }

    if (radioDataActive){
        postRequest(status[0],dataInput)
    }else if(radioDataFinished){
        postRequest(status[2],dataInput)
    }else if(radioDataOnHold){
        postRequest(status[1],dataInput)
    }else if(radioDataCanceled){
        postRequest(status[3],dataInput)
    }else
        alert("Прошу выбрать статус Задачи")

    // return idTask
    // alert(dataInput)
})

const buttonDeleteTask = document.querySelector('.trash')