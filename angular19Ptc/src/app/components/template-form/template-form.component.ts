import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  userObj : any = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: 'Dhaka',
    zipCode: '',
    isAgreed: false
  }

  onSave(){
    console.log(this.userObj);
  }
}
