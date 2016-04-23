import {Page, Alert, NavController} from 'ionic-angular';
import {Navigation, Members} from '../../providers/providers';
import {NumPad} from '../../components/num-pad/numPad';

@Page({
  templateUrl: 'build/pages/main/main-page.html',
  directives: [NumPad],
  providers: [Navigation, Members]
})
export class MainPage {

  constructor(protected nav: Navigation, protected nc: NavController, protected members: Members) {}

  openConfirmation(user) {
    this.showAlert({
      title: 'Kod rejestracyjny pasuje do:',
      message: user.name,
      buttons: [
        {
          text: 'Tak, to ja',
          handler: () => {
            this.nav.openMainPage();
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
    console.log(Members, Navigation);
    this.members.getOneByCode(code).subscribe(result => {
      console.log('result', result);
      this.openConfirmation(result);
    });
  }

  onPageDidEnter() {
    // reset user data
  }

  private showStaffAlert(reason, buttons) {
    this.showAlert({
      title: reason,
      message: 'Idź do kogoś z obsługi',
      buttons: buttons
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
