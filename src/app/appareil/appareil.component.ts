import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  // appareilName = "machine à laver";
  @Input() appareilName: string;
  // appareilStatus = "éteint";
  @Input() appareilStatus: string;

  constructor() { 
    // initlisation obligatoire dans derniere version de typescript
    this.appareilName = "";
    this.appareilStatus = "";

  }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor(){
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else {
      return 'red';
    }
  }

}
