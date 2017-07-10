import { Component } from '@angular/core';
import {UsersService} from "app/users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user1Activated = false;
  user2Activated = false;

  constructor(private usersService: UsersService){}
  ngOnInit() {
    this.usersService.userActivated
      .subscribe(num => {
        if (num === 1){
          this.user1Activated = true;
        }
        else if (num === 2){
          this.user2Activated = true;
        }
      });
  }
}
