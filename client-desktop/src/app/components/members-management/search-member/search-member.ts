import {Component,  EventEmitter, Input, Output} from 'angular2/core';

@Component({
  selector: 'search-member',
  templateUrl: 'app/components/members-management/search-member/search-member.html',
  styleUrls: ['app/components/members-management/search-member/search-member.scss']
})

export class SearchMember {
  @Output() changed: EventEmitter<string>;
  filter: string;

  constructor() {
    this.changed = new EventEmitter();
  }
  
  filterChanged(event: any){
    event.preventDefault();
    this.changed.emit(this.filter);
  }
}
