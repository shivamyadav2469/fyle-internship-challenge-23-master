import { Component, Input, setTestabilityGetter } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  uparams:any;
  userId: string = '';
  details: any;
  limited_details: any;
  loaded = false;
  fullHeight = false;
  constructor(private route: ActivatedRoute, public service: ApiService){
    this.route.queryParamMap.subscribe((params) => {
      this.uparams = params;
      console.log(this.uparams.params.userId)
      this.userId = this.uparams.params.userId;
      this.getRepos(this.userId);
    }); 
  }

  goToRepo(userId: string, repoName: string){
    window.open(`https://github.com/${userId}/${repoName}`);
  }

  expand(){
    this.fullHeight = !this.fullHeight;
  }

  getRepos(userId: string){
    this.service.getrepos(userId).subscribe((data)=>{
      this.details = data;
    }, (error) => {
      alert('Something Went Wrong! -- Users')
      console.log(error);
    })
    
    setTimeout(()=>{
      
      this.loaded = true;
    }, 3000)
  }
}
