import {Component, OnInit} from '@angular/core';
import {Customer} from './Model';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';

@Component({
  moduleId: module.id, 
  selector: 'customer-list', 
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.css']
})
export class CustomerListComponent implements OnInit{
  customers : Customer[] = [];
  customer : Customer;
  isBusy = false;

  constructor(private dataService: DataService,
              private loggerService: LoggerService){

  }
  ngOnInit() {
    this.getCustomers();
  }
  getCustomers() {
    this.isBusy = true;
    this.loggerService.log('Getting customers ...');
    
    //This synchronous call
    // this.customers = this.dataService.getCustomerList();    

    //This asynchronous call using promise
    // this.dataService.getCustomersP().then(custs => {
    this.dataService.getCustomers().subscribe(custs => {      
      this.isBusy = false;
      this.customers = custs;
    },
    (errorMsg: string) => {
      this.isBusy = false;
      alert(errorMsg);
    });

  }
  shift(inc: number) {
    // console.log(inc)
    let ix = this.customers.findIndex(c => c === this.customer) + inc;
    ix = Math.min(this.customers.length-1, Math.max(0,ix));
    this.customer = this.customers[ix];
  }
}
