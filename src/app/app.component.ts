import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // interpolation (string simple). avec double accolade
  title = 'modification du title du fichier ts';

  constructor() { }

  ngOnInit() { }

}
