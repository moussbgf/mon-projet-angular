import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  // interpolation (string simple). avec double accolade
  title = 'modification du title du fichier ts';

  /**
    * property binding = code vers html (modification du dom)
    * avec crochet dans le html
  */
  isAuth = false;

  appareils!: any[];

  constructor(private appareilService: AppareilService) {
    // setTimeout(
    //   () => {
    //     this.isAuth = true;
    //   }, 4000
    // );
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }


  // event binding = html vers code. avec parenthese dans le html
  onAllumer() {
    // console.log("on allume tout !");
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    // console.log("on éteint tout !");
    if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    }
  }

   // two way binding -> avec crochet et parenthese


  // propriété personalisée, et comunication avec autre component
  // appareilOne='machine à laver';
  // appareilTwo='TV';
  // appareilThree='Ordi';



  // PIPE exemple
  // lastUpdate = new Date();


  // pipe async
  lastUpdate: Promise<Date> = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

}
