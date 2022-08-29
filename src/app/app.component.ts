import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CurrentExchangeRate } from 'src/type/currentExchangeRate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  exchangeRatesFromServer: CurrentExchangeRate[] = [];
  loading = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<CurrentExchangeRate[]>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      .subscribe((response) => {
        this.exchangeRatesFromServer = [
          {
            r030: 1,
            txt: "Українська гривня",
            rate: 1,
            cc: "UAH",
            exchangedate: new Date().toString(),
          },
          ...response]
          .sort((a, b) => a.txt.localeCompare(b.txt))
      })
  }
}
