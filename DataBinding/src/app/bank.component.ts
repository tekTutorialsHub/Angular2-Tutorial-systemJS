import { Component } from '@angular/core';

@Component({
  selector: 'bank-app',
  templateUrl:'./src/app/bank.component.html',
  styleUrls:['./src/app/bank.component.css']
})

export class BankComponent 
{ 
      bankName: string ="XYZ Bank Ltd" ;
      count: number=0;
      name: string='';
      color:string='red';
      
      getBankName(): string {
        return this.bankName; 
      }       

      buttonClicked() : void {
        this.count=this.count+1;
        console.log("Button Clicked")
      }
     
}