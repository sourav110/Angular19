import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer',
  imports: [FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  customerObj: any = {
    "customerId": 0,
    "customerName": "",
    "customerCity": "",
    "mobileNo": "",
    "email": ""
  }

  customerList: any [] = [];

  constructor(private _customerService: CustomerService) {
    this.getCustomerList();
  }

  getCustomerList() {
    this._customerService.getCustomerList().subscribe((result: any) => {
      this.customerList = result.data;
    })
  }

  saveCustomer() {
    debugger
    this._customerService.saveCustomer(this.customerObj).subscribe((result: any) => {
      if(result.result){
        if(this.customerObj.customerId == 0){
          alert('Saved Successfully');
        } else {
          alert('Updated Successfully');
        }
        this.getCustomerList();
        this.resetForm();
      } else{
        alert(result.message);
      }
    })
  }

  deleteCustomer(customerId: number) {
    const deleteConfirmed = confirm("Are you sure to delete?");
    if(deleteConfirmed) {
      this._customerService.deleteCustomer(customerId).subscribe((result: any) => {
        if(result.result){
          alert('Deleted Successfully');
          this.getCustomerList();
        } else{
          alert(result.message);
        }
      })
    }
  }

  getCustomerInfo(data: any) {
    this.customerObj = data;
  }

  resetForm() {
    this.customerObj.customerId = 0;
    this.customerObj.customerName = "";
    this.customerObj.mobileNo = "";
    this.customerObj.email = "";
    this.customerObj.customerCity = "";
    this.getCustomerList();
  }
}
