import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // interpolation (string simple). avec double accolade
  title = 'modification du title du fichier ts';

  /**
   * property binding = code vers html (modification du dom)
   * avec crochet dans le html
   */
  isAuth = false;
  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  // event binding = html vers code. avec parenthese dans le html
  onAllumer() {
    console.log("on allume tout !");
  }

  // two way binding -> avec crochet et parenthese


  // propriété personalisée, et comunication avec autre component
  // appareilOne='machine à laver';
  // appareilTwo='TV';
  // appareilThree='Ordi';


  appareils = [
    {
      name: 'Maniche à laver',
      status: 'éteint'
    },
    {
      name: 'ordinateur',
      status: 'allumé'
    },
    {
      name: 'TV',
      status: 'éteint'
    }
  ];

  // PIPE exemple
  // lastUpdate = new Date();

  // pipe async
  lastUpdate : Promise<Date> = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });


}
