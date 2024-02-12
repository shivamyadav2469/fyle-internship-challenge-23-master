import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements  OnInit {
  users: any;
  userId: string = '';
  userName: string = ''; 
  loaded = false;
  showFamousReposSection: boolean = false;
  showFamousRepos = false;
  constructor(public api: ApiService, private router: Router, public service: ApiService ){} 

  ngOnInit(): void {
    ;
  }
  getData(){
    this.api.getData().subscribe((data)=>{
      this.users = data;
    }, (error) => {
      
      console.log(error);
    })
  }

  toggleFamousReposSection() {
   
    if (this.showFamousRepos== false) {
      this.showFamousRepos = true;
      this.getData();
      console.log("APi called");
    }
    this.showFamousReposSection = !this.showFamousReposSection; 
}
  
  repos(userId: string){
    console.log(userId);
    this.router.navigate(['/users'], { queryParams: { userId: userId} })
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loaded = true;
    }, 5000);
  }
}
