import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {ServersService} from "app/servers/servers.service";

interface Server {
  id: number,
  name: string,
  status: string
}
@Injectable()
export class ServerResolverService implements Resolve<Server> {

  resolve(route : ActivatedRouteSnapshot, 
          state : RouterStateSnapshot) : Server | Observable <Server> | Promise <Server> {
    return this.serversService.getServer( +route.params['id']);
  }
  
  constructor(private serversService:ServersService) {}
  
}
