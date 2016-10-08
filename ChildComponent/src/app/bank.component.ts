import { Component } from '@angular/core';


/* Component with external styles and template*/
@Component({
  selector: 'bank-app',
  templateUrl:'./src/app/bank.component.html',
  styleUrls:['./src/app/bank.component.css']
})
export class BankComponent 
{ 
  BankName: string ="XYZ Bank Ltd" ;
}