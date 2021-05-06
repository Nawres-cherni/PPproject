import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }

  login(email: any,password:any) {
    return this._http.post<any>(
      "http://127.0.0.1:5010" + "/auth_event/singin",
      { email: email,
        password:password
      }
    );
  }
  logout() {

  }
  /*
  register(email: any,password:any,nom:any) {
    return this._http.post<any>(
      "http://127.0.0.1:5010" + "/auth_event/singup",
      { email: email,
        password:password,
        nom:nom
      }
    );
  }*/




}
