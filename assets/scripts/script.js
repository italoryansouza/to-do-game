const button = document.querySelector('#add-task-icon')
const input = document.querySelector('#itask')
const fullList = document.querySelector('.listTask')

let taskList = []

function addTask(){
    taskList.push({
        task: input.value,
        situation: false
    })  

    input.value =''

    showTask()
} 

function showTask(){

    let newTask = ''

    taskList.forEach((item, index) => {
        // O && neste caso é utilizado como um IF (Se tal coisa, adicione a classe done)
        newTask = newTask + `<li class="task ${item.situation ? ' done' : ''}">
                        <img src="assets/img/check-task-icon.png" alt="check-task-icon" class="icons" onclick="changeSituation(${index})">            
                        <p>${item.task}</p>
                        <img src="assets/img/trash-task-icon.png" alt="trash-task-icon" class="icons" onclick="deleteTask(${index})">
                     </li>`
    })    

    fullList.innerHTML = newTask
    
    localStorage.setItem('listStorage', JSON.stringify(taskList))
}

function changeSituation(index){

    taskList[index].situation = !taskList[index].situation  

    console.log(taskList[index].situation + " e a posição é " + index)

    showTask()
}

// A função changeSituation pega o objeto do array na posição index, invertendo o valor do elemento situation

function deleteTask(index){

    taskList.splice(index, 1)

    showTask()
}

function uploadTasks(){
    const tasksArmazenadas = localStorage.getItem('listStorage')

    taskList = JSON.parse(tasksArmazenadas)

    showTask()
}

uploadTasks()

button.addEventListener('click', addTask)

