import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
// import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  // interpolation (string simple). avec double accolade
  title = 'modification du title du fichier ts';

  secondes!: number;
  counterSubscription!: Subscription;

  constructor() { }

  ngOnInit() {

    // npm rxjs-compat install, en commentaire l'ancienne facon de gerer les observable avec RxJS
    // const counter = Observable.interval(1000);
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Uh-oh, an error occured! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );

  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }


}
