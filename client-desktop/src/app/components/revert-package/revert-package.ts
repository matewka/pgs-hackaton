import {Component, OnInit,EventEmitter} from 'angular2/core';

@Component({
  selector: 'revert-package',
  templateUrl: 'app/components/revert-package/revert-package.html',
  styles: [require('./revert-package.scss')],
  inputs:['member','enabled'],
  outputs:['reverted','disabled']
})

export class RevertPackage implements OnInit {
  member:any;
  enabled:Boolean;
  reverted = new EventEmitter<any>();
  disabled = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  revert(){
    this.reverted.emit(this.member);
  }
  disable(){
    this.disabled.emit(true);
  }

}
