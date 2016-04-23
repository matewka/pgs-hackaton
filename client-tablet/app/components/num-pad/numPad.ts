import {Component} from 'angular2/core';
import {NumPadDisplay} from '../num-pad-display/numPadDisplay';
import {NumPadKeyboard} from '../num-pad-keyboard/numPadKeyboard';

@Component({
  selector: 'num-pad',
  templateUrl: 'build/components/num-pad/num-pad.html',
  directives: [NumPadDisplay, NumPadKeyboard]
})
export class NumPad {
  value:string = '';

  onPressed(value:string) {
    if (this.value.length < 4) {
      this.value += value.toString();
    }
  }
}