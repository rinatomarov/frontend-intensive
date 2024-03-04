const activeToDo = document.querySelector('.todo-column-active')
const onHoldToDo = document.querySelector('.todo-column-on-hold')
const finishedToDo = document.querySelector('.todo-column-finished')
const canceledToDo = document.querySelector('.todo-column-canceled')
let idTask = 101
// console.log(todoItems)
const status =['active','hold','finished','canceled']
const spinner = document.getElementById('spinner')
const overlay = document.querySelector('.overlay')
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
function addElements(statusTask,title,id){
    const todoItemsActive =  activeToDo.querySelector('.todo-items')
    const todoItemsHold =  onHoldToDo.querySelector('.todo-items')
    const todoItemsFinished =  finishedToDo.querySelector('.todo-items')
    const todoItemsCanceled =  canceledToDo.querySelector('.todo-items')

    // Создание элементов
    const todoItemCreate = document.createElement('div')
    todoItemCreate.classList.add('todo-item')
    todoItemCreate.setAttribute('draggable', 'true')
    const taskName = document.createElement('span')
    taskName.innerText = title
    const buttonTrash = document.createElement('button')
    buttonTrash.classList.add('trash')
    buttonTrash.innerHTML = '<img src="trash.svg">'
    //1 varik buttonTrash.addevent
    // buttonTrash.dataset.id = id

    // console.log(id)
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

    // console.log(todoItems)

    buttonTrash.addEventListener('click', async () =>{
        await axios.delete(`http://localhost:3000/todos/${id}`)
            .then(response => {
                console.log(`Deleted post with ID ${id}`);
            })
        todoItemCreate.remove(todoItemCreate)
    })

    taskName.addEventListener('dblclick',  function() {
        const inputElement = document.createElement('input');
        inputElement.setAttribute('type', 'text');
        inputElement.setAttribute('value', taskName.textContent);
        taskName.parentNode.replaceChild(inputElement, taskName);
        inputElement.focus();
        inputElement.addEventListener('keypress', async function(event) {
            if (event.key === 'Enter') {
                spinner.style.display = 'block'
                overlay.style.display = 'block'
                try {
                    taskName.textContent = inputElement.value;
                    inputElement.parentNode.replaceChild(taskName, inputElement);
                    // console.log(inputElement)
                    await axios.put(`http://localhost:3000/todos/${id}`,{
                        id: id,
                        title:inputElement.value,
                        status:statusTask
                    })
                    await sleep(50)
                }catch (error){
                    console.log('Error:', error)
                }finally {
                    spinner.style.display = 'none'
                    overlay.style.display = 'none'
                }
            }
        })
    })
    idTask++
    return idTask
}

async function getToDoS(){
    // const spinner = document.getElementById('spinner')
    spinner.style.display = 'block'
    // const overlay = document.querySelector('.overlay')
    overlay.style.display = 'block'
    try {
        const response = await axios.get('http://localhost:3000/todos')

        console.log(response.data)
        for (let id =0;id < response.data.length;id++){
            // console.log(response.data[id])
            let statusTask = response.data[id].status
            let title = response.data[id].title
            // console.log(statusTask, title)
            addElements(statusTask,title,response.data[id].id)
            await sleep(50)
            // console.log(status[0])
        }
    }catch (error){
        console.log('Error:', error)
    }finally {
        spinner.style.display = 'none'
        overlay.style.display = 'none'
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

    try {
        async function postRequest(status,dataText){
            const spinner = document.getElementById('spinner')
            const overlay = document.querySelector('.overlay')
            spinner.style.display = 'block'
            overlay.style.display = 'block'
            // console.log(spinner)
            // console.log(overlay)
            await sleep(60)
            await axios.post('http://localhost:3000/todos',{
                id: `${idTask}`,
                // idTask,
                title:dataText,
                status:status
            })
            addElements(status,dataText,idTask)
        }
        if (radioDataActive){
            await postRequest(status[0],dataInput)
        }else if(radioDataFinished){
            await postRequest(status[2],dataInput)
        }else if(radioDataOnHold){
            await postRequest(status[1],dataInput)
        }else if(radioDataCanceled){
            await postRequest(status[3],dataInput)
        }else
            alert("Прошу выбрать статус Задачи")
    }catch (error){
        console.log('Error:', error)
    }finally {
        spinner.style.display = 'none'
        overlay.style.display = 'none'
    }
})

// const activeToDo = document.querySelector('.todo-column-active')
// const onHoldToDo = document.querySelector('.todo-column-on-hold')
// const finishedToDo = document.querySelector('.todo-column-finished')
// const canceledToDo = document.querySelector('.todo-column-canceled')

let draggedItem = null
function allowDrop(event) {
    event.preventDefault()
}
function drag(event) {
    draggedItem = event.target
}
function drop(event) {
    event.preventDefault()
    if (event.target.classList.contains('todo-items')) {
        event.target.appendChild(draggedItem)
    }
}
activeToDo.addEventListener('dragover', allowDrop)
onHoldToDo.addEventListener('dragover', allowDrop)
finishedToDo.addEventListener('dragover', allowDrop)
canceledToDo.addEventListener('dragover', allowDrop)

activeToDo.addEventListener('drop', drop)
onHoldToDo.addEventListener('drop', drop)
finishedToDo.addEventListener('drop', drop)
canceledToDo.addEventListener('drop', drop)

const items = document.querySelectorAll('.todo-item')
console.log(items)
items.forEach(item => {
    item.addEventListener('dragstart', drag);
})