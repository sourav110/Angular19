import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class',
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent  {
  divBgColor: string = "bg-success";
  isChecked: boolean = false;
  txtClassName:string = "";

  addDiv1Color(className: string){
    this.divBgColor = className;
  }

  @ViewChild('txtName') txtNameViewChild: ElementRef | undefined; 

  onGetName() {
    const name = this.txtNameViewChild?.nativeElement.value;
    if(this.txtNameViewChild) {
      this.txtNameViewChild.nativeElement.style.color = 'red';
    }
  }
}
