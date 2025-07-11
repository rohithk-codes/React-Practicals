import React, { useState } from 'react';


function Todolist(){
    const [tasks,setTasks] = useState([]);
    const [newTask,setNewTask]=useState("")

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(index){
       if(newTask.trim() !== ""){
        setTasks([...tasks,newTask]);
        setNewTask("")
       } 
    }   

    function deleteTask(index){
        const updateTask = tasks.filter((_,i)=>i!==index);
        setTasks(updateTask);
    }

    return(
        <div>
            <h1>To-Do-List</h1>
            <div>
                <input type="text"
                 placeholder="enter new task"
                 value={newTask}
                 onChange={handleInputChange}
                  />
                  <button onClick={addTask}>add</button>
            </div>
            <ol>
                {tasks.map((tasks,index)=>
                    <li key={index}>
                        <span>{tasks}</span>
                        <button onClick={()=>deleteTask(index)}></button>
                    </li>
                )}
            </ol>

        </div>
    )


}

export default Todolist