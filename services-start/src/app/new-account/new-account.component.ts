import {Component, OnInit} from '@angular/core';
import {LoggingService} from '../services/logging.service';
import {AccountsService} from '../services/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit{

ngOnInit() : void {
  this.accountService.statusUpdated.subscribe( (status:string) => {
    alert('status: '+status)
  });
}

constructor(private loggingService : LoggingService, private accountService : AccountsService) {

  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    //this.loggingService.logStatusChanged(accountStatus);
  }
}
