import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
  
  userList: any[] = [];
  productList: any[] = []; 

  constructor(private _http: HttpClient){
    this.getUserList();
  }

  getUserList() {
    this._http.get("https://jsonplaceholder.typicode.com/users").subscribe((result: any) => {
      this.userList = result;
    });
  }

  getProductList() {
    this._http.get("https://fake-store-api.mock.beeceptor.com/api/products").subscribe((result: any) => {
      this.productList = result;
    })
  }
}
