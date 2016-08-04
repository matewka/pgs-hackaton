import {Component} from 'angular2/core';
import {NgIf} from 'angular2/common';
import {MembersManagement} from  './../members-management/members-management';
import {PackAdmin} from  './../pack-admin/pack-admin';
import {WebmasterView} from  './../webmaster-view/webmaster-view';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'events-app',
  directives: [ROUTER_DIRECTIVES, MembersManagement, PackAdmin, WebmasterView, NgIf],
  templateUrl: 'app/components/events-app/events-app.html',
  styleUrls: ['app/components/events-app/events-app.scss']
})
@RouteConfig([
  {name: 'ConfirmPackage', path: '/pack-admin', component: PackAdmin},
  {name: 'MembersManagement', path: '/hr-admin', component: MembersManagement, useAsDefault: true},
  {name: 'WebmasterView', path: '/webmaster', component: WebmasterView}
])
export class EventsApp {

  constructor() {
  }
}
