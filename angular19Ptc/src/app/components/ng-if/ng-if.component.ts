import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {
  div1Visible: boolean = true;
  num1: number = 1;
  num2: number = 2;

  showDiv1(){
    this.div1Visible = true;
  }

  hideDiv1(){
    this.div1Visible = false;
  }
}
