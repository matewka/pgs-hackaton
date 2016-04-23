import {Component} from 'angular2/core';
import {MembersManagement} from  './../members-management/members-management';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
    selector: 'events-app',
    providers: [],
    pipes: [],
    directives: [ROUTER_DIRECTIVES, MembersManagement],
    templateUrl: 'app/components/events-app/events-app.html',
})
@RouteConfig([
    {name: 'PackAdmin', path: '/pack-admin'}
])
export class EventsApp {

    constructor() {
    }
}
