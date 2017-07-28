import {Component, OnInit} from '@angular/core';
import {GithubService} from "app/services/github.service";

@Component({
  selector: 'app-profile', 
  templateUrl: './profile.component.html', 
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private githubService : GithubService) {}
  user = [];
  repos = [];
  username : string;
  showRepo= false;
  ngOnInit() {}

  searchUser() {
    this.showRepo = true;
    this.githubService.updateUsername(this.username);

    this.githubService.getUser()
      .subscribe(data => {
        this.user = data;
      });

    this.githubService.getRepos()
      .subscribe(data => {
        this.repos = data;
      });
  }

}
