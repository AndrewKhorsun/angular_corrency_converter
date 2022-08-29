import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CurrentExchangeRate } from 'src/type/currentExchangeRate';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges {
  @Input() exchange: CurrentExchangeRate[] = [];

  euro: number = 0;
  dollar: number = 0;

  ngOnChanges() {
    if(this.exchange) {
      this.exchange.forEach(item => {
        if (item.cc === "USD") {
          this.dollar = item.rate
        }
        
        if(item.cc === "EUR") {
          this.euro = item.rate
        }
      });
    }
  }
}
