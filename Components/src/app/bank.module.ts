import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BankComponent }  from './bank.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ BankComponent ],
  bootstrap:    [ BankComponent ]
})
export class BankModule { }
