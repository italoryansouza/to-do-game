const button = document.querySelector('#add-task-icon')
const input = document.querySelector('#itask')
const fullList = document.querySelector('.listTask')

let taskList = []

function addTask(){
    taskList.push(input.value)

    showTask()
} 

function showTask(){

    let newTask = ''

    taskList.forEach(tarefa => {
        newTask += `<li class="task">
                        <img src="assets/img/check-task-icon.png" alt="check-task-icon" class="icons">            
                        <p>${tarefa}</p>
                        <img src="assets/img/trash-task-icon.png" alt="" class="icons">
                     </li>`
    })    

    fullList.innerHTML = newTask
    
}

button.addEventListener('click', addTask)