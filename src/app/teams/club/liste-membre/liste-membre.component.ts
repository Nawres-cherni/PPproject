import { Component, OnInit } from '@angular/core';
import { ClubService } from '../../../services/club.service';
@Component({
  selector: 'app-liste-membre',
  templateUrl: './liste-membre.component.html',
  styleUrls: ['./liste-membre.component.scss']
})
export class ListeMembreComponent implements OnInit {
  id?:any;
  membres: any[] = [];
  constructor(private _http:ClubService) {


  }

  ngOnInit(): void {
    this.id=localStorage.getItem("token");
    console.log(this.id );
    this.getMembres(this.id);


  }


getMembres(id:any){
  this._http.getClubUsers(id)
  .subscribe(
    club => {
      this.membres= club['data'];
      console.log(club);
    },
    error => {
      console.log(error);
    });
}
}
