import {Component, OnInit} from 'angular2/core';
import {ConfirmPackage} from '../confirm-package/confirm-package';
import {RevertPackage} from '../revert-package/revert-package';
import {AppSettings} from '../../common/app-settings';
import {MemberService} from '../../providers/member.service';

@Component({
  selector: 'pack-admin',
  directives: [ConfirmPackage, RevertPackage],
  templateUrl: 'app/components/pack-admin/pack-admin.html',
  styles: [require('./pack-admin.scss')],
  providers: [MemberService]
})

export class PackAdmin implements OnInit {
  members:any;
  lastMember:any;
  revertActive:Boolean;
  revertTimeout:any;

  constructor(private _memberService:MemberService) {
  }

  ngOnInit() {
    this.getList();
    this.revertActive = false;
  }

  getList() {
    this.members = this._memberService.getMembers();
  }

  onConfirm(member) {
    member.gifted = true;
    this.lastMember = member;
    this.enableRevert();
    console.log(member);
    console.log(this.lastMember)
  }

  onRevert(member) {
    member.gifted = false;
    this.disableRevert();
  }

  enableRevert() {
    this.revertActive = true;
    clearTimeout(this.revertTimeout);
    this.revertTimeout = setTimeout(()=>this.revertActive = false,5000);
  }
  disableRevert() {
    clearTimeout(this.revertTimeout);
    this.revertActive = false;
  }
}
