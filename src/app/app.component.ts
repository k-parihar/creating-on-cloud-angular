import { Component, VERSION } from '@angular/core';
// import rollADie from 'roll-a-die';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  // const rollADie = require('roll-a-die');
}
