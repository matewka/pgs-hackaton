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

  constructor(private _memberService:MemberService) {
  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.members = this._memberService.getMembers();
  }
}
