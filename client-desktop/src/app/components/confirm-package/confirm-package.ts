import {Component, OnInit} from 'angular2/core';

@Component({
  selector: 'confirm-package',
  templateUrl: 'app/components/confirm-package/confirm-package.html',
  styles: [require('./confirm-package.scss')]
})

export class ConfirmPackage implements OnInit {
  packages:any;

  constructor() {
  }

  ngOnInit() {
    this.getList();
  }

  getList() {

  }

}
