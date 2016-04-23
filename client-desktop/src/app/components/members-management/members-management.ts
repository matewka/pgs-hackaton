import {Component, OnInit} from 'angular2/core';
import {AppSettings} from '../../common/app-settings'
import {SearchMember} from '../../components/search-member/search-member'

@Component({
  selector: 'members-management',
  directives: [SearchMember],
  templateUrl: 'app/components/members-management/members-management.html',
  styleUrls: ['app/components/members-management/members-management.scss']
})

export class MembersManagement implements OnInit {
  members:any;

  constructor() {
  }

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
    this.members = [
      {
        "name": "Ivan Disapierd",
        "email": "mosssampson@gracker.com",
        "phone": "+1 (834) 524-2682",
        "consent": false,
        "status": "accepted",
        "registered": "2014-10-28T12:39:38 -01:00",
        "technologies": [
          "Javascript",
          "PHP"
        ]
      },
      {
        "name": "Crisitna Pitolina",
        "email": "deliawooten@gracker.com",
        "phone": "+1 (923) 578-2242",
        "consent": true,
        "status": "not accepted",
        "registered": "2015-10-13T04:18:54 -02:00",
        "technologies": [
          "Javascript",
          "PHP"
        ]
      }
    ]
  }
}
