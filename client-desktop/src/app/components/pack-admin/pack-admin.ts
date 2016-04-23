import {Component, OnInit} from 'angular2/core';
import {ConfirmPackage} from '../confirm-package/confirm-package';

@Component({
  selector: 'pack-admin',
  directives: [ConfirmPackage],
  templateUrl: 'app/components/pack-admin/pack-admin.html',
  styles: [require('./pack-admin.scss')]
})

export class PackAdmin implements OnInit {
  packages:any;

  constructor() {
  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.packages = [
      {
        "name": "Ivan Disapierd",
        "pin": 1234
      },
      {
        "name": "Crisitna Pitolina",
        "pin": 1235
      }
    ]
  }

  confirmPackageReceived(userId){
    console.log('confirmed');

  }

}
