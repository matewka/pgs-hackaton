import { Component, EventEmitter } from 'angular2/core';

@Component({
  outputs: [ 'pressed' ],
  selector: 'num-pad-keyboard',
  templateUrl: 'build/components/num-pad-keyboard/num-pad-keyboard.html'
})
export class NumPadKeyboard {
  pressed = new EventEmitter<Number>();

  keyPressed(number:number) {
    this.pressed.emit(number);
  }
}