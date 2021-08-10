import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  // property binding
  // appareilName = "machine à laver";
  @Input() appareilName!: string;
  // appareilStatus = "éteint";
  @Input() appareilStatus!: string;
  @Input() index!: number;

  constructor(private appareilService: AppareilService) {
    // Initialisation obligatoir dans derniere version de typescript
    // this.appareilName = "";
    // this.appareilStatus = "";

    // @Input() appareilName!: string; le point d'exclamation permet d'éviter d'avoir à initaliser

  }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else {
      return 'red';
    }
  }

  onSwitch() {
    if (this.appareilStatus === 'allumé') {
      this.appareilService.switchOffOne(this.index);
    } else if (this.appareilStatus === 'éteint') {
      this.appareilService.switchOnOne(this.index);
    }
  }

}
