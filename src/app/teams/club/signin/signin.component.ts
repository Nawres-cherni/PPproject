import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../../../services/authservice";
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  email?: String;
  password?: String;



  constructor(private _http:AuthService,private  router: Router) {

  }
  ngOnInit(): void {

  }
  signin(){
    this._http.login(this.email, this.password).subscribe(data => {
      console.log(data)
      if(data['error']!=true){
        console.log(data["token"]);
        localStorage.setItem("token",data["token"]);
        localStorage.setItem("nom",data['data']['nom']);
        this.router.navigate(['/club/index']);

      }else{
        alert(data['message'])
      }
    },
      err => {
    //show error toast when the server went wrong
      }
    );

  }

}

