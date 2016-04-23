import { Component } from 'angular2/core';
import { Camera } from 'ionic-native';

@Component({
  selector: 'scanner',
  templateUrl: 'build/components/scanner/scanner.html'
})
export class Scanner {
  constructor() {
    Camera.getPicture({}).then((imageData) => {
      console.log(imageData);
    }, (error) => {
      console.log('camera error:', error);
    });
  }
}