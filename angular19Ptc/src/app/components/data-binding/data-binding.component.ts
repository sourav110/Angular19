import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  firstName: string = "Alex";
  lastName: string = "Abraham";
  age: number = 30;
  isActive: boolean = true;
  dob: Date = new Date();
  placeHolderFirstName: string = "Enter Name";
  placeHolderAge: string = "Enter Age";
  selectedCity: string = "";
  
  constructor(){
    console.log(this.firstName);
    //this.showWelcomeMessage(); 
  }

  showWelcomeMessage() {
    alert('Welcome ' + this.firstName + ' ' + this.lastName);
  }

  onCountryChange(){
    console.log('Country Changed');
  }
}
