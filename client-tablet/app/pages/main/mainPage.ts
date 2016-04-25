import {Page, Alert, NavController} from 'ionic-angular';
import {Navigation, Members} from '../../providers/providers';
import {NumPad} from '../../components/num-pad/numPad';
import {Scanner} from '../../components/scanner/scanner';

@Page({
  templateUrl: 'build/pages/main/main-page.html',
  directives: [NumPad, Scanner],
  providers: [Navigation, Members]
})
export class MainPage {

  code: string;

  constructor(protected nav: Navigation, protected nc: NavController, protected members: Members) {}

  openConfirmation(user) {
    this.showAlert({
      title: 'Kod rejestracyjny pasuje do:',
      message: user.name + ' ' + user.surname.charAt(0) + '.',
      buttons: [
        {
          text: 'Tak, to ja',
          handler: () => {
            this.members.register(user.id).subscribe(() => {
              this.showBoxAlert();
            });
          }
        },
        {
          text: 'Nie, to nie ja',
          handler: () => {
            this.showStaffAlert('Zły kod?', [this.getStaffButton()]);
          }
        }
      ]
    });
  }

  onCodeMissing() {
    this.showStaffAlert('Brak kodu?', [
      {
        text: 'Chwila, mam kod',
        handler: () => {}
      },
      this.getStaffButton()
    ]);
  }

  onCodeSubmitted(code) {
    this.members.retrieveByCode(code).subscribe(result => {
      this.openConfirmation(result);
    });
  }

  onPageDidEnter() {
    this.code = '';
  }

  private showStaffAlert(reason, buttons) {
    this.showAlert({
      title: reason,
      message: 'Idź do kogoś z obsługi',
      buttons: buttons
    });
  }

  private showBoxAlert() {
    this.showAlert({
      title: 'Rejestracja udana!',
      message: 'Zapraszamy po paczkę',
      buttons: [this.getStaffButton()]
    });
  }

  private showAlert(config) {
    this.nc.present(Alert.create(config));
  }

  private getStaffButton() {
    return {
      text: 'Ok, idę',
      handler: () => {
        this.nav.openMainPage();
      }
    };
  }
}
