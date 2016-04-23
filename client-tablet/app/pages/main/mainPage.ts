import {Page} from 'ionic-angular';
import {NumPad} from '../../components/num-pad/numPad';

@Page({
  templateUrl: 'build/pages/main/main-page.html',
  directives: [NumPad]
})
export class MainPage {
  constructor() {

  }
}
