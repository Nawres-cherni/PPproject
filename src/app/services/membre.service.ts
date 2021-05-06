import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MembreService {

  constructor(private _http:HttpClient) { }

  getRoles() {
    return this._http.post<any>(
      "http://127.0.0.1:5010" + "/roles_and_teams/getroles",""

    );
  }
  getTeams() {
    return this._http.post<any>(
      "http://127.0.0.1:5010" + "/roles_and_teams/getTeams",""
    );
  }
  getUser(Idmember:any) {
    return this._http.post<any>(
      "http://127.0.0.1:5010" + "/user//getOneUser",
      {
        Idmember:Idmember
      }
    );
  }
}
