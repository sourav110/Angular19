import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  
  userForm: FormGroup = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.minLength(5)]),
    lastName: new FormControl("", [Validators.required]),
    userName: new FormControl(""),
    city: new FormControl(""),
    state: new FormControl("Dhaka"),
    zipCode: new FormControl(""),
    isAgreed: new FormControl(false)
  });
  
  constructor(){
    this.userForm.controls['state'].disable();
  }

  onSubmit(){
    //debugger
    console.log(this.userForm.value);
  }
}
