import {Page, Alert, NavController} from 'ionic-angular';
import {Navigation} from '../../providers/navigation/navigation';

@Page({
    templateUrl: 'build/pages/main/main-page.html',
    providers: [Navigation]
})
export class MainPage {

    constructor(protected nav: Navigation, protected nc: NavController) {

    }

    onCodeMissing() {
        let alert = Alert.create({
            title: 'Brak kodu? Idź do obsługi',
            buttons: [
                {
                    text: 'Chwila, mam kod',
                    handler: () => {}
                },
                {
                    text: 'Ok, idę',
                    handler: () => {
                        this.nav.openMainPage();
                    }
                }
            ]
        });
        this.nc.present(alert);
    }

    onPageDidEnter() {
        // reset user data
    }
}
