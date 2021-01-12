let taskid = 0;
    function createTask(id,text){
        task = {
            id,
            text,
            checked: false,
        };
        return task;
    }
    function todo() {
        //create task
        taskid ++;
        let text = document.getElementById('taskToAdd').value;
        if(text === ""){
            alert("il faut ecrire")
        }
        else{
            let tr = document.createElement('tr');
            let tdid = document.createElement('td');
            let tdtask = document.createElement('td');
            let tddone = document.createElement('td');
            let tddelete = document.createElement('td');

            let task = createTask(taskid,text);
            let t = document.createTextNode(task.text);
            let tasktext = document.createElement('span');
            tasktext.contentEditable='true';
            tasktext.appendChild(t);

            tdid.appendChild(document.createTextNode(task.id));
            tdtask.appendChild(tasktext);
            tr.appendChild(tdid);
            tr.appendChild(tdtask);
            tr.appendChild(tddone);
            tr.appendChild(tddelete);
            
            
            document.getElementById("taskToAdd").value = "";

            //display on screen
            document.getElementById("myList").appendChild(tr);

            //delete button
            let deletebutton = document.createElement("button");
            deletebutton.className = "delete";
            deletebutton.innerHTML = "Delete";
            tddelete.appendChild(deletebutton);

            //done button
            let donebutton = document.createElement("button");
            donebutton.className = "done";
            donebutton.innerHTML = "Done";
            tddone.appendChild(donebutton);

            let close = document.getElementsByClassName("delete");
            for (i = 0; i < close.length; i++) {
                close[i].onclick = function() {
                    let div = this.parentElement;
                    let content = div.parentElement;
                    content.style.display = "none";
                    taskid--;
                }
            }

            let done = document.getElementsByClassName("done");
            for (i = 0; i < done.length; i++) {
                done[i].onclick = function() {
                    if (task.checked === false){
                        let div = this.parentElement;
                        let content = div.parentElement;
                        content.style.backgroundColor = "green";
                        task.checked = true;
                    }
                    else{
                        let div = this.parentElement;
                        let content = div.parentElement;
                        content.style.backgroundColor = "transparent";
                        task.checked = false;
                    }  
                }
            }
        }
        
    }