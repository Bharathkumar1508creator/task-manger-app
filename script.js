let tasks = [];

function Analysttask(){

let tname = document.getElementById("taskname").value;

let ttime = Number(document.getElementById("tasktime").value);

if(tname === "" || ttime <= 0){
    alert("Enter A valid Tasks and Time")
}

// creating a new obj and push it in tasks array

let taskobj = {
    taskname : tname,
    tasktimeleft : ttime,
    completed : false

}

tasks.push(taskobj);

// creating a new function for display 

displaytasks();





}

// using a arrow function to set timer

const settimer = () => {
    setInterval( () =>{
        for(let i = 0; i < tasks.length; i++){
            if(tasks[i].tasktimeleft > 0){
                tasks[i].tasktimeleft--;
            } else if(!tasks[i].completed){
                tasks[i].completed = true;
            }
        }
    
    displaytasks();

    },1000)
}


// using a display functions 

function displaytasks(){
    let list = document.getElementById("tasklist");
    list.innerHTML = "";

    tasks.forEach(task =>{
        let li = document.createElement("li");
        if(task.completed){
            li.textContent = task.taskname + " ✅ completed";
        } else {
            li.textContent = task.taskname + " - " + task.tasktimeleft + " - " + "sec";
        }
    list.appendChild(li)
    
    })
}
settimer();