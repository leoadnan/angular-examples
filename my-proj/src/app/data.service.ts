import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import { of} from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {createTestCustomers} from './test-data';
import { LoggerService } from './logger.service';
import { Customer} from './model';

@Injectable()
export class DataService {
   
   private customersUrl = 'api/customers';
   private statesUrl = 'api/states';

   constructor(private loggerService: LoggerService, private http: Http){}
   
   // Example of getting the data synchroneously,
   // getCustomerList() { 
   //    const customers = createTestCustomers();
   //    this.loggerService.log(`Got ${customers.length} customers`);
   //    return customers;
   // }

   //Example of asynchronous call using promise
   getCustomersP(): Promise<Customer[]> { 
      this.loggerService.log(`Getting customers using promise via http...`);
      
      return this.http.get(this.customersUrl)
         .toPromise()
         .then(response => {
            const custs = response.json().data as Customer[];
            this.loggerService.log(`Got ${custs.length} customers`);
            return custs;
         },
         error => {
            this.loggerService.log(`Error occured: ${error}`);
            return Promise.reject('Something bad happened in getting customer please check the console.');
         }
      );
      // const customers = createTestCustomers();
      // return new Promise<Customer[]>(resolve => {
      //    setTimeout(()=>{
      //       this.loggerService.log(`Got ${customers.length} customers`);
      //       resolve(customers)
      //    },1500);
      // });

   }
   
   getCustomers(): Observable<Customer[]> {
      this.loggerService.log(`Getting customers using an observable via http...`);
      return this.http.get(this.customersUrl)
         .map(response => response.json().data as Customer[])
         .do((custs)=>{
            this.loggerService.log(`Got ${custs.length} customers`);
         })
         .catch((error: any) => {
            this.loggerService.log(`Error occured: ${error}`);
            return Observable.throw('Something bad happened in getting customer please check the console.');
         });
            

      // const customers = createTestCustomers();
      // return of(customers)
      // .delay(1500)
      // .do(()=>{
      //    this.loggerService.log(`Got ${customers.length} customers`);
      // });
   }

   getStates(): Observable<string[]> {
      this.loggerService.log(`Getting states using an observable via http...`);
      return this.http.get(this.statesUrl)
         .map(response => response.json().data as string[])
         .do((states)=>{
            this.loggerService.log(`Got ${states.length} states`);
         })
         .catch((error: any) => {
            this.loggerService.log(`Error occured: ${error}`);
            return Observable.throw('Something bad happened in getting states please check the console.');
         });
   }
}