import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// implements OnInit
export class AppComponent implements OnInit {
  users: { avatar_url: string }[] = [];

  constructor(
    private apiService: ApiService
  ) {}
  ngOnInit() {
    this.getUsers();
  }
  // ngOnInit() {
  //   this.apiService.getUser('johnpapa').subscribe(console.log);
  // }
  getUsers(){
    this.apiService.getData().subscribe((data) =>{
      console.log(data)
      this.users= data
    })
  }
}
