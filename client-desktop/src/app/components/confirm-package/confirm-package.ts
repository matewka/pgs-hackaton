import {Component, OnInit, EventEmitter} from 'angular2/core';

@Component({
  selector: 'confirm-package',
  templateUrl: 'app/components/confirm-package/confirm-package.html',
  styles: [require('./confirm-package.scss')],
  inputs:['member'],
  outputs:['confirmed']
})

export class ConfirmPackage implements OnInit {
  member: any;
  confirmed = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {

  }
  confirm(){
    this.confirmed.emit(this.member);
  }



}
