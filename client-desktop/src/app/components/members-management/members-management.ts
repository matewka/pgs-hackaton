import {Component, OnInit} from 'angular2/core';
import {AppSettings} from '../../common/app-settings'
import {MemberService} from '../../providers/member.service'
import {SearchMember} from '../members-management/search-member/search-member'
import {AcceptMember} from '../members-management/accept-member/accept-member'

@Component({
  selector: 'members-management',
  directives: [SearchMember, AcceptMember],
  providers: [MemberService],
  templateUrl: 'app/components/members-management/members-management.html',
  styles: [require('./members-management.scss')]
})

export class MembersManagement implements OnInit {
  members: any;

  constructor(private _memberService: MemberService) {}

  ngOnInit() {
    this.getList();
  }

  isAccepted(status) {
    return status === AppSettings.MEMBER_STATUSES.ACCEPTED;
  }
  
  getList() {
    this.members = this._memberService.getMembers();
  }
}
