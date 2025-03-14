import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl: string = "https://freeapi.miniprojectideas.com/api/CarRentalApp/";

  constructor(private _http: HttpClient) { }

   getCustomerList() {
    return this._http.get(this.apiUrl + "GetCustomers");
   }

   saveCustomer(customerObj: any) {
    if(customerObj.customerId == 0){
      return this._http.post(this.apiUrl + "CreateNewCustomer", customerObj);
    } else {
      return this._http.post(this.apiUrl + "UpdateCustomer", customerObj);
    }
   }

   deleteCustomer(customerId: number) {
    return this._http.delete(this.apiUrl + "DeletCustomerById?id=" + customerId);
   }
}
