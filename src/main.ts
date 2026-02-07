import type {Project} from "./types";
import {formValidate, generateProject} from "./utils";
const addButton = document.querySelector("#add-button") as HTMLButtonElement;
const inputName = document.querySelector("#project-name") as HTMLInputElement;
const inputDescription = document.querySelector("#project-description") as HTMLInputElement;
const tbody = document.querySelector("#project-tbody") as HTMLTableElement;
const projectList:Project[] = [];//プロジェクトが保存されるリスト


function addProject(projectName:string, projectDescription:string, projectList:Project[]):void{
    const newProject:Project = generateProject(projectName, projectDescription);
    projectList.push(newProject);
}
function createCheckbox():HTMLInputElement{
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox";
    return checkbox;
}
function createButton(buttonValue:string):HTMLButtonElement{
    const button = document.createElement("button");
    button.textContent = buttonValue;
    button.type = "button";
    return button;
}
function renderTable(projectList:Project[], tbody:HTMLTableElement):void{
    tbody.innerHTML = "";
    for(const project of projectList){
        const tr:HTMLTableRowElement = document.createElement("tr");
        const tdName:HTMLTableCellElement = document.createElement("td");
        const tdDescription:HTMLTableCellElement = document.createElement("td");
        const tdIsCompleted:HTMLTableCellElement = document.createElement("td");
        const tdDelete:HTMLTableCellElement = document.createElement("td");

        tdName.textContent = project.name;
        tdDescription.textContent = project.description;
        const checkbox = createCheckbox();
        //ここにcheckboxのイベント処理を書く
        checkbox.addEventListener("change", (event)=>{
            const target = event.target as HTMLInputElement;//確実にあるものはasでアサーションしてもいいかも
            const changedProject = projectList.find(p=>p.id === project.id) as Project;
            if(target.checked){
                //isCompletedをtrueに変える
                changedProject.isCompleted = true;
            }
            else{
                changedProject.isCompleted = false;
            }
            renderTable(projectList, tbody);
        });
        tdIsCompleted.appendChild(checkbox);
        const deleteButton = createButton("削除");
        //ここにdeleteButtonのイベント処理を書く
        deleteButton.addEventListener("click", ()=>{
            const deletedProjectIdx = projectList.findIndex(p => p.id === project.id);
            if(deletedProjectIdx !== -1){
                projectList.splice(deletedProjectIdx, 1);
                renderTable(projectList, tbody);
            }
        });
        tdDelete.appendChild(deleteButton);

        tr.appendChild(tdName);
        tr.appendChild(tdDescription);
        tr.appendChild(tdIsCompleted);
        tr.appendChild(tdDelete);
        if(project.isCompleted){
            tr.classList.add("completed");
        }
        else{
            tr.classList.remove("completed");
        }
        checkbox.checked = project.isCompleted//描画後のチェックボックスをデータの状態に合わせる
        tbody.appendChild(tr);
    }

    
}
addButton.addEventListener("click", (event)=>{
    event.preventDefault();
    console.log("click")
    const projectName = inputName.value;
    const projectDescription = inputDescription.value;
    if(!formValidate(projectName, projectDescription)){
        return;
    }
    inputName.value = "";
    inputDescription.value = "";
    addProject(projectName, projectDescription, projectList);
    for(const project of projectList){
        console.log(`${project.name},${project.description},${project.isCompleted}`)
    }
    renderTable(projectList, tbody);
});