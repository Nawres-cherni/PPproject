import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private _http:HttpClient) { }

  getClubUsers(Idclub:any) {
    return this._http.post<any>(
      "http://127.0.0.1:5010" + "/user/getClubUsers",
      {
        Idclub:Idclub
      }
    );
  }
  getClubs() {
    return this._http.post<any>(
      "http://127.0.0.1:5010" + "/club/getclubs", ""
    );
  }

}
