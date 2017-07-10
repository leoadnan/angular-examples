import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import {Observer} from "rxjs/Observer";
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() { }

  myNumberSubscription: Subscription;
  myObservableSubscription: Subscription

  ngOnInit() {
    const mynumber = Observable.interval(1000);
    this.myNumberSubscription = mynumber.subscribe((num:number)=> {
      console.log(num);
    });

    const myObservable = Observable.create((observer:  Observer<String>)=>{
        setTimeout(()=> {
          observer.next('First packet.');
        },2000);
        setTimeout(()=> {
          observer.next('Second packet.');
        },4000)
        setTimeout(()=> {
          //observer.error('this doesnot worker.');
          observer.complete();
        },5000)
        setTimeout(()=> {
          observer.next('Third packet.');
        },6000)
    });

    this.myObservableSubscription = myObservable.subscribe(
      (msg:string)=>{console.log(msg); },
      (error: string)=>{console.log(error); },
      ()=>{console.log('completed')}
    );
  }

  ngOnDestroy() {
    this.myNumberSubscription.unsubscribe();
    this.myObservableSubscription.unsubscribe();
  }

}
