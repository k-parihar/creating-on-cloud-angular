import { Component, VERSION } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  ngOnInit() {
    const diceRoller = new DiceRoller();

    //	Returns the total rolled value
    const roll = diceRoller.rollValue('2d20kh1');
    console.log(roll);

    //	Returns an object representing the dice roll, use to display the component parts of the roll
    const rollObject = diceRoller.roll('2d20kh1');
    console.log(rollObject.value);
  }
}
