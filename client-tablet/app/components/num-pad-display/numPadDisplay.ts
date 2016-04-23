import {Component} from 'angular2/core';

const DOT_CHAR = '&#8901;';

@Component({
  inputs: [ 'input' ],
  selector: 'num-pad-display',
  templateUrl: 'build/components/num-pad-display/num-pad-display.html'
})
export class NumPadDisplay {
  input:string;
  display:string;
  formattedDisplay:string;

  constructor() {
    this.formatDisplay();
  }

  formatDisplay() {
    this.formattedDisplay = '';
  }
}