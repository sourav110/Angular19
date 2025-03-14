import { Component, inject } from '@angular/core';
import { LoginUser } from '../../models/loginUser';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginUserObj: LoginUser = new LoginUser();

  router = inject(Router);
  http = inject(HttpClient);

  onLogin() {
    // if (this.loginUserObj.userName == "admin" && this.loginUserObj.password == "1234") {
    //   alert('Success');
    //   this.router.navigateByUrl('admin');
    // } else {
    //   alert('Oooopsss....Wrong Credentials');
    //   this.loginUserObj = new LoginUser();
    // }

    this.http.post("https://projectapi.gerasim.in/api/UserApp/login", this.loginUserObj).subscribe((res: any) => {
      debugger
      localStorage.setItem("userId", res.data.userId);
      localStorage.setItem("token", res.data.token);
      this.router.navigateByUrl('admin');
    }, error => {
      debugger
      console.log(this.loginUserObj);
      alert('Oooopsss....Wrong Credentials');
    })
  }
}



//  {
//   "EmailId": "ngapp@yahoo.com",
//   "Password": "1234"
// } 

//  {
//   "message": "Login Success",
//   "result": true,
//   "data": {
//     "userId": 7289,
//     "emailId": "ngapp@yahoo.com",
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDE4Nzk4NDIsImlzcyI6IlRlc3QuY29tIiwiYXVkIjoiVGVzdC5jb20ifQ.8VjGDYwdrhgxk9yato1XkqkvZvNs67Edipp3FlHiABA",
//     "refreshToken": "E4TwwaAz1QuEZQAwLZ3s+oyziwIBys5aqgTji/FTMyg="
//   }
// } 