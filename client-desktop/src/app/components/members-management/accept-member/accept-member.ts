import {Component} from 'angular2/core';
import {AppSettings} from '../../../common/app-settings'
import {EventEmitter} from 'angular2/core';

@Component({
  selector: 'accept-member',
  templateUrl: 'app/components/members-management/accept-member/accept-member.html',
  inputs: ['member'],
  outputs: ['register']
})

export class AcceptMember {
  member:any;
  register = new EventEmitter();

  isAccepted() {
    return this.member.status === AppSettings.MEMBER_STATUSES.ACCEPTED;
  }

  acceptMember() {
    const statuses = {
      [AppSettings.MEMBER_STATUSES.ACCEPTED]: AppSettings.MEMBER_STATUSES.NOT_ACCEPTED,
      [AppSettings.MEMBER_STATUSES.NOT_ACCEPTED]: AppSettings.MEMBER_STATUSES.ACCEPTED
    };

    this.member.status = statuses[this.member.status] || AppSettings.MEMBER_STATUSES.ACCEPTED;
    this.register.emit({
      code: this.member.code,
      isRegistered: this.isAccepted()
    });
  }

  getButtonText() {
    return this.isAccepted() ? 'Decline' : 'Accept';
  }
}
