import {Component, Input} from '@angular/core';
import {Address} from './Model';

@Component({
  moduleId: module.id, 
  selector: 'address-comp', 
  templateUrl: './address.component.html'
})
export class AddressComponent {
  regions = ['East', 'Midwest', 'North', 'South', 'West'];
  states = ['California', 'Quebec', 'Jalisco', 'Illinois']
    
  @Input() address : Address;
}
