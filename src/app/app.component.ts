import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ang-routing';

  constructor() {}

  ngOnInit(): void {

    const obsTest$ = new Observable(observer => {
      observer.next("return from observable");
    }).subscribe(value => {
      console.log(value);

    });

    const obsTest = function() {
      return "return from function";
    }

    const returnData = obsTest();
    console.log(returnData);

  }
}
