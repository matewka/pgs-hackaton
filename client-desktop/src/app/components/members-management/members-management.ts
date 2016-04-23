import {Component, OnInit} from 'angular2/core';
import {AppSettings} from '../../common/app-settings'
import {SearchMember} from '../../components/search-member/search-member'
import {MemberService} from '../../providers/member.service'

@Component({
  selector: 'members-management',
  directives: [SearchMember],
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

  acceptMember(member) {
    const statuses = {
      [AppSettings.MEMBER_STATUSES.ACCEPTED]: AppSettings.MEMBER_STATUSES.NOT_ACCEPTED,
      [AppSettings.MEMBER_STATUSES.NOT_ACCEPTED]: AppSettings.MEMBER_STATUSES.ACCEPTED
    };

    member.status = statuses[member.status];
  }
  
  getList() {
    this.members = this._memberService.getMembers();
  }
}
