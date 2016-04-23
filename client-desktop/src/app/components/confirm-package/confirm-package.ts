import {Component, OnInit} from 'angular2/core';

@Component({
  selector: 'confirm-package',
  templateUrl: 'app/components/confirm-package/confirm-package.html',
  styles: [require('./confirm-package.scss')],
  inputs:['member']
})

export class ConfirmPackage implements OnInit {
  member:any;


  constructor() {
  }

  ngOnInit() {

  }
  confirmPackage(){
    this.member.gifted = true;
  }



}
