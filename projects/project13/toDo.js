const titleInput = document.getElementById("add-task-title");
const describtionInput = document.getElementById("add-task-decription");
const btnAdd = document.getElementById("btn-add");
const uncompletedTask = document.getElementById("uncompleted-tasks-container");
const completes = document.getElementById("completed-tasks-container");
const btnContainer = document.getElementById("btn-container");
let taskDone = document.getElementsByClassName("done-task");
let taskDel = document.getElementsByClassName("delete-task");
let taskEdit = document.getElementsByClassName('edit-task');

btnAdd.addEventListener("click", function () {
    if (titleInput.value != "" && describtionInput.value != "") {
        let title = titleInput.value;
        let describtion = describtionInput.value;
        let card = `
    <div class="col-12 col-sm-6 mb-3 justify-content-start justify-content-lg-center d-flex md-mx-auto">
                <div class="card">
                    <div class="card-body shadow">
                        <h6 class="card-subtitle mb-2 text-muted">${title}</h6>
                        <p class="card-text">${describtion}</p>
                        <a href="#" class="card-link text-success done-task">
                            <i class="bi bi-check-square-fill"></i>
                        </a>
                        <a href="#" class="card-link text-danger delete-task">
                            <i class="bi bi-trash"></i>
                        </a>
                        <a href="#" class="card-link text-primary edit-task">
                            <i class="bi bi-pencil-square"></i>
                        </a>
                    </div>
                </div>
            </div>
            `
        uncompletedTask.innerHTML += card;
        titleInput.value = "";
        describtionInput.value = "";
        //update taskDone
        taskDone = document.getElementsByClassName("done-task");
        doneTask();
        //update taskDel
        taskDel = document.getElementsByClassName("delete-task");
        delTask();
        //update taskEdit
        taskEdit = document.getElementsByClassName('edit-task');
        editTask();
    }
})

function doneTask() {
    for (let task of taskDone) {
        task.addEventListener("click", function () {
            for(let elm of completes.getElementsByClassName("card-container")){
                elm.classList.remove("animate__animated","animate__bounceInRigh")
            }
            let title = this.parentNode.querySelector(".card-subtitle").innerText;
            let describtion = this.parentNode.querySelector(".card-text").innerText;
            let card = this.parentNode.parentNode.parentNode;
            card.classList.add("animate__animated", "animate__bounceOutLeft");

            completes.innerHTML += `
                <div class="col-12 col-sm-6 mb-3 justify-content-start animate__animated animate__bounceInRight justify-content-lg-center d-flex md-mx-auto card-container">
                    <div class="card">
                        <div class="card-body shadow">
                            <h6 class="card-subtitle mb-2 text-muted">${title}</h6>
                            <p class="card-text text-muted ">${describtion}</p>
                        </div>
                    </div>
                </div>
                `;
            setTimeout(()=>{
                card.remove();
            },500)
        })
    }
}
doneTask();
function delTask() {
    for (let task of taskDel) {
        task.addEventListener("click", function () {
            let card = this.parentNode.parentNode.parentNode;
            card.classList.add("animate__animated","animate__zoomOutUp");
            setTimeout(()=>{
                card.remove();
            },750)
        })
    }
}
delTask();
function editTask() {
    for (let task of taskEdit) {
        task.addEventListener('click', function () {
            let title = this.parentNode.querySelector('.card-subtitle');
            let describtion = this.parentNode.querySelector('.card-text');
            titleInput.value = title.innerText;
            describtionInput.value = describtion.innerText;
            btnAdd.classList.add('d-none');
            
            let btnEdit = document.createElement("button");
            btnEdit.classList.add("btn","btn-success");
            btnEdit.innerHTML = `Edit <i class="bi bi-pencil-square"></i>`
            btnContainer.appendChild(btnEdit);

            btnEdit.addEventListener('click',function(){
                title.innerText = titleInput.value;
                describtion.innerText = describtionInput.value;
                titleInput.value = "";
                describtionInput.value = '';
                btnEdit.remove();
                btnAdd.classList.remove("d-none");
                task.parentNode.parentNode.parentNode.classList.add("animate__animated","animate__rubberBand");
                setTimeout(() => {
                    task.parentNode.parentNode.parentNode.classList.remove("animate__animated","animate__rubberBand");
                }, 1000);
            })
        })
    }
}
editTask();