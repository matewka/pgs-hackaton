import {Component, OnInit, ViewChild} from 'angular2/core';
import {AppSettings} from '../../common/app-settings'
import {MemberService} from '../../providers/member.service'
import {FilterService} from '../../providers/filter.service'
import {SearchMember} from '../members-management/search-member/search-member'
import {AcceptMember} from '../members-management/accept-member/accept-member'
import {MemberProgress} from "../members-management/member-progress/member-progress";

@Component({
  selector: 'members-management',
  directives: [SearchMember, AcceptMember, MemberProgress],
  providers: [MemberService, FilterService],
  templateUrl: 'app/components/members-management/members-management.html',
  styles: [require('./members-management.scss')]
})

export class MembersManagement implements OnInit {
  members:any;
  filteredMembers:any;
  lastMembers:any;
  eventName:string = ' '; //TODO get the event name at initialization

  @ViewChild(SearchMember) searchMember:SearchMember;

  constructor(private _memberService:MemberService,
              private _filterService:FilterService) {
  }

  ngOnInit() {
    this._memberService.connect();
    this.getList();
  }

  ngDoCheck() {

  }

  isAccepted(status:string) {
    return status === AppSettings.MEMBER_STATUSES.ACCEPTED;
  }

  registerMember(member) {
    console.log("Registering member: " + member, member.isRegistered);
    this._memberService.updateMember(member).subscribe(result => {
      console.log(result);
    });
  }

  getList() {
    this._memberService.getMembers().subscribe(members => {
      this.members = this.filteredMembers = members;
      this.members.forEach(member => {
        if (member.registered) {
          member.status = AppSettings.MEMBER_STATUSES.ACCEPTED;
        }
      });
    });
  }

  filterChanged(searchText:string) {
    this.filteredMembers = this._filterService.filter(searchText, ['first_name', 'last_name', 'email'], this.members)
  }
}
