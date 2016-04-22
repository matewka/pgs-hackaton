import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
    selector: 'events-app',
    providers: [],
    pipes: [],
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/events-app.html',
})
//@RouteConfig([
//    { path: '/home',       component: Home,        name: 'Home', useAsDefault: true },
//    { path: '/about',      component: About,       name: 'About' },
//    { path: '/github/...', component: RepoBrowser, name: 'RepoBrowser' },
//])
export class EventsApp {

    constructor() {}

}
