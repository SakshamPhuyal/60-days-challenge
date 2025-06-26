let tasks = [];

const addTask = () => {
  const taskInput = document.getElementById('taskInput');
  const text = taskInput.value.trim();
  if (text) {
    tasks.push({ text: text, completed: false });
    taskInput.value = "";
    updateTasklist();
    updateStats();
  }
};
 const toggleTaskComplete=(index) =>{
    tasks[index].completed =!tasks[index].completed; 
updateTasklist(); 
updateStats();
};
const deleteTask= (index) =>{
    tasks.splice(index,1);
    updateTasklist();
updateStats();
};
const editTask = (index) =>{
const taskInput = document.getElementById('taskInput') 
taskInput.value = tasks[index].text 
tasks.splice(index,1) ;
updateTasklist();
updateStats(); 
};
const updateStats= () =>{
    const completeTasks = tasks.filter(task => task.completed).length;
    const totalTasks=tasks.length;
   const progress =(completeTasks/totalTasks)*100;
    const progressBar= document.getElementById ('progress');
    progressBar.style.width = `${progress}%`;     
    document.getElementById('num').innerText = `${completeTasks}/${totalTasks}`; 
};
const updateTasklist = () => {
  const tasklist = document.getElementById('tasklist');
  tasklist.innerHTML = ""; // Clear the task list before updating

  tasks.forEach((task ,index)=> {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <div class="taskItem">
        <div class="task ${task.completed ? "completed":"" }">
          <input type="checkbox" class="checkbox" ${task.completed ? 'checked' : ""}/>
          <p>${task.text}</p>
        </div>
        <div class="icons">
          <img src="./edit.png" onclick="editTask(${index})" />
          <img src="./bin.png" onclick="deleteTask(${index})" />
        </div>
      </div>
    `;
   listItem.addEventListener('change',()=> toggleTaskComplete(index));
   tasklist.append(listItem);
  });
};

document.getElementById('newTask').addEventListener('click', function (e) {
  e.preventDefault();
  addTask();
});