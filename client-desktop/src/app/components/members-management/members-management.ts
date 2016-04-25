import {Component, OnInit, ViewChild} from 'angular2/core';
import {AppSettings} from '../../common/app-settings'
import {MemberService} from '../../providers/member.service'
import {FilterService} from '../../providers/filter.service'
import {SearchMember} from '../members-management/search-member/search-member'
import {AcceptMember} from '../members-management/accept-member/accept-member'

@Component({
  selector: 'members-management',
  directives: [SearchMember, AcceptMember],
  providers: [MemberService, FilterService],
  templateUrl: 'app/components/members-management/members-management.html',
  styles: [require('./members-management.scss')]
})

export class MembersManagement implements OnInit {
  members: any;
  filteredMembers: any;

  @ViewChild(SearchMember) searchMember: SearchMember;

  constructor(
    private _memberService: MemberService,
    private _filterService: FilterService) {}

  ngOnInit() {
    this.getList();
  }

  isAccepted(status: string) {
    return status === AppSettings.MEMBER_STATUSES.ACCEPTED;
  }
  
  getList() {
    this._memberService.getMembers().subscribe(members => {
      this.members = this.filteredMembers = members;
    });
  }

  filterChanged(searchText: string) {
    this.filteredMembers = this._filterService.filter(searchText, ['first_name', 'last_name', 'email'], this.members)
  }
}
