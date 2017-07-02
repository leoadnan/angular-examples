import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { of} from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

import {createTestCustomers} from './test-data';
import { LoggerService } from './logger.service';
import { Customer} from './model';

@Injectable()
export class DataService {
   
   constructor(private loggerService: LoggerService){

   }
   
   // Example of getting the data synchroneously,
   // getCustomerList() { 
   //    const customers = createTestCustomers();
   //    this.loggerService.log(`Got ${customers.length} customers`);
   //    return customers;
   // }

   //Example of asynchronous call using promise
   getCustomersP(): Promise<Customer[]> { 
      this.loggerService.log(`Getting customers using promise ...`);
      const customers = createTestCustomers();
      return new Promise<Customer[]>(resolve => {
         setTimeout(()=>{
            this.loggerService.log(`Got ${customers.length} customers`);
            return resolve(customers)
         },1500);
      });
   }
   
   getCustomers(): Observable<Customer[]> {
      this.loggerService.log(`Getting customers using an observable ...`);
      const customers = createTestCustomers();
      return of(customers)
      .delay(1500)
      .do(()=>{
         this.loggerService.log(`Got ${customers.length} customers`);
      });
   }
}