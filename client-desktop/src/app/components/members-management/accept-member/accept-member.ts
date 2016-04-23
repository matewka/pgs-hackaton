import {Component} from 'angular2/core';
import {AppSettings} from '../../../common/app-settings'

@Component({
  selector: 'accept-member',
  templateUrl: 'app/components/members-management/accept-member/accept-member.html',
  inputs: ['member']
})

export class AcceptMember {
  member: any;

  isAccepted() {
    return this.member.status === AppSettings.MEMBER_STATUSES.ACCEPTED;
  }

  acceptMember() {
    const statuses = {
      [AppSettings.MEMBER_STATUSES.ACCEPTED]: AppSettings.MEMBER_STATUSES.NOT_ACCEPTED,
      [AppSettings.MEMBER_STATUSES.NOT_ACCEPTED]: AppSettings.MEMBER_STATUSES.ACCEPTED
    };

    this.member.status = statuses[this.member.status] || AppSettings.MEMBER_STATUSES.ACCEPTED;
  }

  getButtonText(){
    return this.isAccepted() ? 'Decline' : 'Accept';
  }
}
