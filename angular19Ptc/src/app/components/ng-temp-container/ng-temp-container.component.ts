import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-temp-container',
  imports: [NgFor, NgIf, NgTemplateOutlet],
  templateUrl: './ng-temp-container.component.html',
  styleUrl: './ng-temp-container.component.css'
})
export class NgTempContainerComponent {
  employeeList: any[] = [
    {empId: 1001, isActive: true, empName: "Alex", contactNo: "01758555569", attendance: 25},
    {empId: 1002, isActive: false, empName: "Brad", contactNo: "01958555569", attendance: 60},
    {empId: 1003, isActive: true, empName: "Calix", contactNo: "01658555569", attendance: 100},
    {empId: 1004, isActive: true, contactNo: "01658555569", attendance: 50},
    {empId: 1005, isActive: false,empName: "", contactNo: "01658555569", attendance: 75},
    {empId: 1006, isActive: true, empName: "Rahul", contactNo: "01658555569", attendance: 20},
    {empId: 1006, isActive: false,empName: null, contactNo: "01658555569", attendance: 15},
    {empId: 1006, isActive: false,empName: "Mahi", contactNo: "01658555569", attendance: 85 },
  ]

  isLoading: boolean = true;

  constructor () {
    debugger
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
