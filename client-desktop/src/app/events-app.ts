import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
    selector: 'events-app',
    providers: [],
    pipes: [],
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/events-app.html',
})
@RouteConfig([])
export class EventsApp {

    constructor() {
    }
}
