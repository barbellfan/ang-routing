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
      console.log("printed from observable");
    }).subscribe();

    const obsTest = function() {
      console.log("printed from function");

    }

    obsTest();
  }
}
