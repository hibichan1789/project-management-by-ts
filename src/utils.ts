import type {Project} from "./types.js";
export {}
export function formValidate(projectName:string, projectDescription:string):boolean{
    if(projectName.trim() !== "" && projectDescription.trim() !== ""){
        return true;
    }
    return false;
}
export function generateProject(projectName:string, projectDescription:string):Project{
    return {id:crypto.randomUUID(), name:projectName, description:projectDescription, isCompleted:false};
}