import {Component} from '@angular/core';

@Component({
  moduleId: module.id, 
  selector: 'app-root', 
  template: `
    <h1>{{title}}</h1>
    <customer-list></customer-list>
  `, 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Customer Management'
}
