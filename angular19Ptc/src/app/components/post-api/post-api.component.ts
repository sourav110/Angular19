import { DatePipe, JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from "../shared/tabs/tabs.component";
import { Car, ICar } from '../../models/car';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule, UpperCasePipe, LowerCasePipe, JsonPipe, DatePipe, TabsComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {

  carList: ICar [] = [];

  carObj: Car = new Car(); 

  playerName: string;
  currentDate: Date;
  playerObj: any = {
    "name": "Alex",
    "age": 19,
    "dob": new Date()
  }

  constructor(private _http : HttpClient) {
    this.playerName = "Cristiano Ronaldo";
    this.currentDate = new Date();
  }

  //_http = Inject(HttpClient);

  tabList: string[] = ['Car List', 'Add New Car'];
  currentTab: string = "Car List";

  ngOnInit(): void {
    this.getAllCars();
  }

  onTabChange(tabName: string) {
    debugger
    this.currentTab = tabName;
  }

  getAllCars() {
    this._http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars").subscribe((result: any) => {
      this.carList = result.data;
    })
  }

  saveCarInfo() {
    if(this.carObj.carId == 0){
      this._http.post("https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar", this.carObj).subscribe((result: any) => {
        if(result.result){
          alert('Saved Successfully');
          this.getAllCars();
          this.resetForm();
        } else{
          alert(result.message);
        }
      })
    } else{
      this._http.put("https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar", this.carObj).subscribe((result: any) => {
        if(result.result){
          alert('Updated Successfully');
          this.getAllCars();
          this.resetForm();
        } else{
          alert(result.message);
        }
      })
    }
  }

  deleteCar(carId: number) {
    this._http.delete("https://freeapi.miniprojectideas.com/api/CarRentalApp/DeleteCarbyCarId?carid=" + carId).subscribe((result: any) => {
      const deleteConfirmed = confirm("Are you sure to delete?")
      if(deleteConfirmed){
        if(result.result){
          alert('Deleted Successfully');
          this.getAllCars();
        } else{
          alert(result.message);
        }
      }
    })
  }

  resetForm(){
    this.carObj.carId = 0;
    this.carObj.brand = "";
    this.carObj.model = "";
    this.carObj.year = "";
    this.carObj.color = "";
    this.carObj.regNo = "";
    this.carObj.dailyRate = "";
    this.getAllCars();
  }

  getCarInfo(data: any) {
    this.carObj = data;
  }
}
