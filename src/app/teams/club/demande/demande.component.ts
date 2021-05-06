import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { RequestService } from '../../../services/request.service';
//import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.scss']
})
export class DemandeComponent implements OnInit {


  cin?:String;
  nom?:String;
  prenom?: String;
  classe?: String;
  equipe?: String;

  email?: String;
  ntel?: String;
  motivation?: String;
  club?:any;
  equipes: any =[];

  constructor(private _http:RequestService,private route: ActivatedRoute,private router: Router) {

  }
  ngOnInit(): void {
 this.getteams();
//console.log(this.equipes);
/*this.route.paramMap.subscribe((params: ParamMap) => {
  this.club = +params.get('id')
})*/
this.club = this.route.snapshot.paramMap.get('id');
  }

 sendRequest(){
    this._http.sendRequest(this.cin,this.nom,this.prenom,this.classe,this.equipe,this.club,this.motivation,
      this.ntel, this.email
      ).subscribe(data => {
      console.log(data)
      if(data['error']!=true){
        console.log(data["token"])
        localStorage.setItem("token",data["token"])
        localStorage.setItem('dataSource', data.length);
        this.router.navigate(['/club']);
      /*  this.toastr.success('Demande Success', 'Votre demande avec success', {
          timeOut:1500,
          progressBar:false
        });
*/
      }else{
        alert(data['message'])
      }
    },
      err => {
    //show error toast when the server went wrong
    console.log(err);
      }
    );
   // this.router.navigate(['']);
  }
  getteams() {
    this._http.getTeams()
      .subscribe(
        club => {
          this.equipes= club['data'];
          //console.log(club);
        },
        error => {
          console.log(error);
        });
  }
  fun(e: any){
    this.equipe = e.target.value;
  }
}
