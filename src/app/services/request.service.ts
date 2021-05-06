import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private _http:HttpClient) { }


  sendRequest(cin:any,nom:any,prenom:any,classe:any,equipe:any,club:any,motivation:any,ntel:any,email: any) {
    return this._http.post<any>(
      "http://127.0.0.1:5010" + "/demande_event/sendRequest",
      { cin: cin,
        nom: nom,
        prenom: prenom,
        classe:classe,
        equipe: equipe,
        club:club,
        motivation:motivation,
        ntel:ntel,
        email:email

      }
    );
  }
  getRequests() {
    return this._http.post<any>(
      "http://127.0.0.1:5010" + "/demande_event/getRequests",
      {},
      {headers:{'authorization':`Bearer ${localStorage.getItem('token')}`}}

    );
  }
  acceptRequests(idDemande:any,email:any) {
    return this._http.post<any>(
      "http://127.0.0.1:5010" + "/demande_event/acceptOrDeleteRequests",
      {
        idDemande:idDemande,
        option:"accept",
        email:email
      },
      {headers:{'authorization':`Bearer ${localStorage.getItem('token')}`}}
    );
  }
  DeleteRequests(idDemande:any,email:any) {
    return this._http.post<any>(
      "http://127.0.0.1:5010" + "/demande_event/acceptOrDeleteRequests",
      {
        idDemande:idDemande,
        option:"delete",
        email:email
      },
      {headers:{'authorization':`Bearer ${localStorage.getItem('token')}`}}
    );
  }

   getTeams() {
    return this._http.post<any>(
      "http://127.0.0.1:5010" + "/roles_and_teams/getTeams",""
    );
  }
}
