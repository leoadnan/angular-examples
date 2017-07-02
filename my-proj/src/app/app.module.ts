import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerListComponent} from './customer-list.component'
import { CustomerDetailComponent} from './customer-detail.component'
import { AddressComponent} from './Address.component'
import { DataService } from './data.service';
import { LoggerService } from './logger.service';

@NgModule({
  declarations: [ 
    AppComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    AddressComponent
  ],
  imports: [ BrowserModule, FormsModule ],
  providers: [DataService, LoggerService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
