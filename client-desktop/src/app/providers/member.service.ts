import {Injectable} from 'angular2/core';
import {$WebSocket} from 'angular2-websocket/angular2-websocket';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MemberService {

  socket:$WebSocket;
  filters:any = {
    updateMember: /["status":"ok"]{1}/,
    getMembers: /("members":\[){1}/
  };

  connect() {
    this.socket = new $WebSocket('ws://localhost:3000/', null, null);
  }

  updateMember(updatedMember) {
    return Observable.create((observable)=> {
      let member = {};
      console.log('WS - sending registerByCode');
      this.socket.send(JSON.stringify({
        method: 'registerByCode',
        params: {code: updatedMember.code, registered: updatedMember.isRegistered}
      }));
      this.socket.onMessage((result) => {
        if (!this.filters.updateMember.test(result.data)) {
          return;
        }
        const resultMember = JSON.parse(result.data).member;

        if (resultMember)
          member = resultMember;
        else
          console.log("No member in result");

        observable.next(member);

      }, null);
    });
  }

  getMembers() {
    return Observable.create((observable) => {
      let collection = [];

      console.log('WS - sending getEvent');
      this.socket.send(JSON.stringify({method: 'getEvent', params: {id: "57acaf056291084c2494f47d"}}));

      this.socket.onMessage((result) => {
        if (!this.filters.getMembers.test(result.data)) {
          return;
        }
        const selectedEvent = JSON.parse(result.data);
        //console.log('Retrieved members: ' + result.data);
        collection = selectedEvent.members;

        observable.next(collection);

      }, null);
    });
  }
}
