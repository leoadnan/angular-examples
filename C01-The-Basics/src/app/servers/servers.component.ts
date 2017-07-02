import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',  
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverName="Test Server";
  serverCreated=false;
  servers=['TestServer 1','TestServer 2']
  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },1000)
  }

  ngOnInit() {
  }

  onCreatedServer() {
    this.servers.push(this.serverName);
    this.serverCreated=true;
  }
  onUpdateServerName(event:any){
    this.serverName = event.target.value;
  }
}
