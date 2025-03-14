import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  constructor(private router: Router) {
  }

  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAlluser();
  }

  getAlluser() {
    this.http.get("https://projectapi.gerasim.in/api/UserApp/GetAllUsers").subscribe((res: any) => {
      console.log(res.data[0]);
    })
  }

  navigateToAdmin(){
    this.router.navigateByUrl('/admin');
  }
}
