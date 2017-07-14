import {Component, OnInit, ElementRef} from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-jquery',
  template: '<button>Click me</button>',
})
export class JqueryComponent implements OnInit {

  constructor(private _elRef: ElementRef) { }

  ngOnInit() {
    jQuery(this._elRef.nativeElement).find('button').on('click', function(){
      alert('It works!')
    });
  }

}
