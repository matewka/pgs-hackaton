import {Component, OnChanges} from 'angular2/core';

const DOT_CHAR = '&#8901;';
const DOT_CHARS = [DOT_CHAR, DOT_CHAR, DOT_CHAR, DOT_CHAR];

@Component({
  inputs: [ 'input' ],
  selector: 'num-pad-display',
  templateUrl: 'build/components/num-pad-display/num-pad-display.html'
})
export class NumPadDisplay implements OnChanges {
  input:string = '';
  formattedInput:string;

  constructor() {
    this.formatDisplay();
  }

  formatDisplay() {
    const inputArr = this.input.split('');

    this.formattedInput = [...inputArr, ...DOT_CHARS].slice(0, 4).join('');
  }

  ngOnChanges(changes) {
    this.formatDisplay();
  }
}