import { Component, Input, OnInit, setTestabilityGetter } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent{
  uparams:any;
  userId: string = '';
  details: any;
  limited_details: any;
  loaded = false;
  fullHeight = false;
  total: number = 0;
  currentPage = 1;
  slicedDetials: any;
  constructor(private route: ActivatedRoute, public service: ApiService){}

  ngOnInit() {
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
      console.log(data);
      this.total = Math.ceil(data.length / 6);
      this.details = data
      this.slicedData(1);
      this.loaded = true; 
      
    }, (error) => {
      // alert('Something Went Wrong! -- Users')
      // console.log(error);
      window.history.go(-1);
      
    })
    
   

    console.log('Total ' + this.total);
  }

  slicedData(currentPage:any){
    this.currentPage = currentPage;
    const startIndex = (currentPage - 1) * 6;
    const endIndex = startIndex + 6;
    this.slicedDetials = this.details.slice(startIndex, endIndex);
  }
}
