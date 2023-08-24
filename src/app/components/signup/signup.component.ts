import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm!: FormGroup;
  type='';
  showErrorMessageForName: boolean = false;
  hidePassword = true;

  showErrorMessageForSurname = false;
  showErrorMessageForEmail = false;
  showErrorMessageForPassword = false;
  
   constructor(private fb: FormBuilder) {
     this.signupForm = this.fb.group({
       name: ['',  Validators.pattern('^[a-zA-Z]*$')],
       surname: ['',  Validators.pattern('^[a-zA-Z]*$')],
       email: ['',  [
         Validators.required,
         Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
         this.customEmailVvalidator
       ]],
       password: ['',[
         Validators.required, Validators.minLength(5), this.passwordContentValidator()]],
       dob: ['', Validators.required],
       gender: ['', Validators.required]
     });
   }
   customEmailVvalidator(control: AbstractControl) {
     if (control.value.includes('@') && control.value.includes('.com')) {
       return null;
     }
     return { invalidEmail: true };
   }
   passwordContentValidator(): ValidatorFn {
     return (control: AbstractControl): {[key: string]: any} | null => {
         const value = control.value;
         const hasAlphabet = /[a-zA-Z]/.test(value);
         const hasNumber = /[0-9]/.test(value);
         return hasAlphabet && hasNumber ? null : {insufficientContent: true};
     };
   }
   alertMessage(fieldName: string): void {
     alert(`What is your ${fieldName}?`);
 }
   alertUser(fieldName: string) {
     alert(`Quelle est votre ${fieldName}?`);
   }
 
   toggleErrorMessage(controlName: string, isFocused: boolean) {
     let errorMessageFlag: boolean;
 
     if (isFocused) {
         errorMessageFlag = !this.signupForm.controls[controlName].valid;
     } else {
         switch (controlName) {
             case 'name':
                 errorMessageFlag = !this.showErrorMessageForName;
                 break;
             case 'surname':
                 errorMessageFlag = !this.showErrorMessageForSurname;
                 break;
             case 'email':
                 errorMessageFlag = !this.showErrorMessageForEmail;
                 break;
             case 'password':
                 errorMessageFlag = !this.showErrorMessageForPassword;
                 break;
             default:
                 console.error(`toggleErrorMessage: Unknown controlName "${controlName}"`);
                 return;
         }
     }
 
     switch (controlName) {
         case 'name':
             this.showErrorMessageForName = errorMessageFlag;
             break;
         case 'surname':
             this.showErrorMessageForSurname = errorMessageFlag;
             break;
         case 'email':
             this.showErrorMessageForEmail = errorMessageFlag;
             break;
         case 'password':
             this.showErrorMessageForPassword = errorMessageFlag;
             break;
     }
 }
 
 hideErrorMessage(controlName: string) {
   switch (controlName) {
       case 'name':
           this.showErrorMessageForName = false;
           break;
       case 'surname':
           this.showErrorMessageForSurname = false;
           break;
       case 'email':
           this.showErrorMessageForEmail = false;
           break;
       case 'password':
           this.showErrorMessageForPassword = false;
           break;
       
   }
 }
 showAlert() {
   
   if (this.signupForm.valid) {
     alert('account created!');
 } else {
     alert('Put the correct answers!');
 }
     
 }
 toggleHidePassword() {
  this.hidePassword = !this.hidePassword;
}
 
}
