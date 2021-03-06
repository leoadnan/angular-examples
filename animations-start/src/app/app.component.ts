import {Component} from '@angular/core';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html'
})
export class AppComponent {
  list = ['Milk', 'Sugar', 'Bread'];
  wildState = 'normal';

  onShrink() {
    this.wildState = 'shrunken';
  }
  onAdd(item) {
    this.list.push(item);
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }
}
