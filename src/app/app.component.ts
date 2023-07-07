import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ang-routing';

  constructor(private router: Router) {}

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

  onSubmit() {
    //this.router.navigate(['/posts']);
    //this.router.navigate(['/post', 1, 'postTitle']);
    this.router.navigate(['/posts'], { queryParams: { page: 1, orderBy: 'newest'}});
  }
}
