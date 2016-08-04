import {Component, OnInit} from "angular2/core";
import {MemberService} from "../../../providers/member.service";
import {FilterService} from "../../../providers/filter.service";
import {AppSettings} from "../../../common/app-settings";
import {OnChanges} from "angular2/core";

@Component({
  selector: 'member-progress',
  directives: [],
  providers: [],
  templateUrl: 'app/components/members-management/member-progress/member-progress.html',
  inputs: ['members'],
  styles: [require('./member-progress.scss')]
})

export class MemberProgress implements OnInit, OnChanges {
  members:Array<any>;
  accepted:number = 5;
  all:number = 15;

  constructor(public _memberService:MemberService) {
  }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.members) {
      console.log(this.members);
      this.updateProgress();
    }
  }

  ngDoCheck() {
    if (this.members) {
      this.updateProgress();
    }
  }

  onUpdate() {

  }

  getPercentage() {
    return `${100 * this.accepted / this.all}%`;
  }

  updateProgress() {

    this.all = this.members.length;
    this.accepted = this.members.reduce((prevVal, nextMember)=> {
      return prevVal + (nextMember.status === AppSettings.MEMBER_STATUSES.ACCEPTED ? 1 : 0);
    }, 0);
  }

}