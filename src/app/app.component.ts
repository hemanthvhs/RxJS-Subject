import { Component,OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {

  ngOnInit() {

                    /* Late Subscription */
                    
    const subject = new Subject();
    subject.next(1);
    subject.next(2);
    
    subject.subscribe(val => console.log("Late Subscription", val))
    
                    /* Early Subscription */

    const subject1 = new Subject();

    subject1.subscribe(val => console.log("Early Subscription ",val))

    subject1.next(1);
    subject1.next(2);
    
    
    
  }
  
  

}
