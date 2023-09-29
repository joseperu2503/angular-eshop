import { AbstractControl } from "@angular/forms";

export class MyValidators {
  static validatePassword(control: AbstractControl){
    const value = control.value
    if(!containsNumber(value)){
      return {invalid_password: true}
    }
    return null
  }
}

function containsNumber(value: string){
  return value.split('').find(v => isNumber(v)) !== undefined
}

function isNumber(value: string){
  return !isNaN(parseInt(value, 10))
}
