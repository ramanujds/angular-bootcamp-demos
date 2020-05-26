import { AbstractControl } from "@angular/forms";

export function forbiddenTitleValidator(control:AbstractControl):{[key:string]:any}|null{
    let forbbidden=/kill/.test(control.value);
    return forbbidden?{'forbiddenTitle':{value:control.value}}:null;
}