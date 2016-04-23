import {Component, EventEmitter} from 'angular2/core';
import {NumPadDisplay} from '../num-pad-display/numPadDisplay';
import {NumPadKeyboard} from '../num-pad-keyboard/numPadKeyboard';

@Component({
  inputs: [ 'maxLength' ],
  outputs: [ 'submit' ],
  selector: 'num-pad',
  templateUrl: 'build/components/num-pad/num-pad.html',
  directives: [NumPadDisplay, NumPadKeyboard]
})
export class NumPad {
  submit = new EventEmitter<String>();
  value:string = '';
  maxLength:number = 4;

  onPressed(value:string) {
    if (this.value.length < this.maxLength) {
      this.value += value.toString();
    }
  }

  onBack() {
    if (this.value.length > 0) {
      this.value = this.value.substr(0, this.value.length - 1);
    }
  }

  onSubmit() {
    if (this.value.length === this.maxLength) {
      this.submit.emit(this.value);
    }
  }
}