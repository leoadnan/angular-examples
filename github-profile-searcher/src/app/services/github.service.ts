import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class GithubService {

  private username : string = "leoadnan";
  constructor(private http : Http) {}

  get
  getUser() {
    return this.http.get(`https://api.github.com/users/${this.username}`)
      .map((response : Response) => {
        return response.json();
      });
  }

  getRepos() {
    return this.http.get(`https://api.github.com/users/${this.username}/repos`)
      .map((response : Response) => {
        return response.json();
      });
  }

  updateUsername(username : string) {
    this.username = username;
  }
}
