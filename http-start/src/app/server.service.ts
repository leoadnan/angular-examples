import { Injectable } from '@angular/core';
import {Http,Response, Headers} from "@angular/http";
import 'rxjs/Rx'
import {Observable} from "rxjs/Observable";
@Injectable()
export class ServerService {

  constructor(private http: Http) { }

  onServerStore(servers: any[]) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://ng-http-7f52a.firebaseio.com/data.json',servers, {headers:headers});
  }

  getServers() {
    return this.http.get('https://ng-http-7f52a.firebaseio.com/data')
      .map((response: Response)=> {
        return response.json();
      })
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      )
  }
}
