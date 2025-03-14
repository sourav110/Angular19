import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
  isVisible: boolean = true;
  isChecked: boolean = false;

  cityList: string[] = ['Dhaka', 'Khulna', 'Rajshahi', 'Barisal', 'Chittagong'];

  employeeList: any[] = [
    {empId: 1001, empName: "Alex", contactNo: "01758555569"},
    {empId: 1002, empName: "Brad", contactNo: "01958555569"},
    {empId: 1003, empName: "Calix", contactNo: "01658555569"}
  ]

  chkVisibility(visibility: boolean){
    this.isVisible = visibility;
  }
}
