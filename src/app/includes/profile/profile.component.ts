import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  @Input() userId: string = 'jk';
  userName: string = '';
  constructor(public service: ApiService){}

  ngOnInit(){
    this.getName(this.userId);
  }

  getName(userLogin: string) {
    this.service.getname(userLogin).subscribe(
      (data) => {
        console.log('User Data:', data.name);
        this.userName = data.name;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
