import {Component, OnInit} from 'angular2/core';
import {AppSettings} from '../../common/app-settings';
import {MemberService} from '../../providers/member.service';

@Component({
  selector: 'webmaster-view',
  directives: [],
  templateUrl: 'app/components/webmaster-view/webmaster-view.html',
  styles: [require('./webmaster-view.scss')],
  providers: [MemberService]
})

export class WebmasterView implements OnInit {

  constructor(private _memberService:MemberService) {
  }

  ngOnInit() {
  }

}
