import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../pipes/na.pipe';
import { ProgressBarComponent } from "../shared/progress-bar/progress-bar.component";
import { TabsComponent } from "../shared/tabs/tabs.component";

@Component({
  selector: 'app-ng-for',
  imports: [CommonModule, NaPipe, ProgressBarComponent, TabsComponent],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
  cityList: string[] = ['Dhaka', 'Khulna', 'Rajshahi', 'Barisal', 'Chittagong'];

  tabList: string[] = ['Customer Basic Info', 'Contact Info', 'Payments'];

  employeeList: any[] = [
    {empId: 1001, empName: "Alex", contactNo: "01758555569", attendance: 25},
    {empId: 1002, empName: "Brad", contactNo: "01958555569", attendance: 60},
    {empId: 1003, empName: "Calix", contactNo: "01658555569", attendance: 100},
    {empId: 1004, contactNo: "01658555569", attendance: 50},
    {empId: 1005, empName: "", contactNo: "01658555569", attendance: 75},
    {empId: 1006, empName: null, contactNo: "01658555569", attendance: 20},
    {empId: 1006, empName: null, contactNo: "01658555569", attendance: 15},
    {empId: 1006, empName: null, contactNo: "01658555569", attendance: 85 },
  ]
}
