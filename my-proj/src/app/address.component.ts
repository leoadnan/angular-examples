import {Component, Input, OnInit} from '@angular/core';
import {Address} from './Model';
import { DataService } from "app/data.service";

@Component({
  moduleId: module.id, 
  selector: 'address-comp', 
  templateUrl: './address.component.html'
})
export class AddressComponent implements OnInit{
  regions = ['East', 'Midwest', 'North', 'South', 'West'];
  // states = ['California', 'Quebec', 'Jalisco', 'Illinois']
  states : string[];  
  @Input() address : Address;

  constructor(private dataService: DataService){}
  ngOnInit(): void {
    this.dataService.getStates()
        .subscribe(states => {
          this.states = states
        },  
        (errorMsg: string) => {
          alert(errorMsg);
        });
  }  
}
