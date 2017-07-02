import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Customer} from './Model';

@Component({
  moduleId: module.id, 
  selector: 'customer-detail', 
  templateUrl: './customer-detail.component.html'
})
export class CustomerDetailComponent {
  @Input() customer : Customer;

  showAddress = true;

  @Output() shift = new EventEmitter<number>();

  left() {
    this.shift.emit(-1);
  }
  right() {
    this.shift.emit(1);
  }
}
