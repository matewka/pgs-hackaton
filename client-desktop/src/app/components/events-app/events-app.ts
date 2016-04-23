import {Component} from 'angular2/core';
import {MembersManagement} from  './../members-management/members-management';
import {PackAdmin} from  './../pack-admin/pack-admin';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'events-app',
  directives: [ROUTER_DIRECTIVES, MembersManagement],
  templateUrl: 'app/components/events-app/events-app.html',
  styleUrls: ['app/components/events-app/events-app.scss']
})
@RouteConfig([
  {name: 'ConfirmPackage', path: '/pack-admin', component: PackAdmin,useAsDefault:true}
])
export class EventsApp {

  constructor() {
  }
}
