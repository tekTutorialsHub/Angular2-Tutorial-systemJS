import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BankComponent }  from './bank.component';
import { CustomerListComponent }  from './customer/customer-list.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ BankComponent, CustomerListComponent ],
  bootstrap:    [ BankComponent ]
})
export class BankModule { }
