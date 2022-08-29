import { Component, Input, OnInit } from '@angular/core';
import { CurrentExchangeRate } from 'src/type/currentExchangeRate';

@Component({
  selector: 'app-converter-current',
  templateUrl: './converter-current.component.html',
  styleUrls: ['./converter-current.component.scss']
})
export class ConverterCurrentComponent{

  @Input() exchange: CurrentExchangeRate[] = []

  
  public firstInput = 0;
  public secondInput= 0;
  public firstSelect = 1;
  public secondSelect = 1;

  enteringFirstValue(event: any) {
    this.firstInput = event.target.value;
    this.secondInput = +(event.target.value * (this.firstSelect / this.secondSelect)).toFixed(2)
  }

  enteringSecondValue(event: any) {
    this.secondInput = event.target.value;
    this.firstInput = +(event.target.value * (this.secondSelect / this.firstSelect)).toFixed(2)
  }

  selectingFirstCurrency(event: any) {
    this.exchange.map(currency => {
      if (event.target.value === currency.txt) {
        this.firstSelect = currency.rate;
        this.firstInput = +(this.secondInput * (currency.rate / this.secondSelect)).toFixed(2)
      }
    })
  }

  selectingSecondCurrency(event: any) {
    this.exchange.map(currency=> {
      if (event.target.value === currency.txt) {
        this.secondSelect = currency.rate;
        this.secondInput = +(this.firstInput * (this.firstSelect / currency.rate)).toFixed(2)
      }
    })
  }
}
