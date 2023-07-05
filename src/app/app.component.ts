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
      observer.next("return 2 from observable");

      setTimeout(() => {
        observer.next("return from timeout");
      }, 2000);

      observer.next("return 3 from observable");
    }).subscribe(value => {
      console.log(value);
    });

    obsTest$.unsubscribe();

    const obsTest = function() {
      return "return from function";
    }

    const returnData = obsTest();
    console.log(returnData);

  }
}
