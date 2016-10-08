import { Component } from '@angular/core';


/* Component with inline styles & template
@Component({
  selector: 'bank-app',
  template: '<h1>Hello & Welcome to {{BankName}}. </h1>',
  styles:[` h1 { color:blue;}  `]
  templateUrl:'./app/bank.component.html',
})*/

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