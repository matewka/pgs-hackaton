import {Injectable} from 'angular2/core';
import {NavController} from 'ionic-angular';
import {PAGES} from '../../pages/pages';

@Injectable()
export class Navigation {
    constructor(protected nav: NavController) { }
    
    openMainPage() {
        this.nav.setRoot(PAGES.main);
    }
}