import {Injectable} from 'angular2/core';
import {$WebSocket} from 'angular2-websocket/angular2-websocket';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MemberService {
  getMembers(){
    return Observable.create((observable) => {
      const dataStream = new $WebSocket('ws://localhost:3000/', null, null);
      let collection = [];

      dataStream.send(JSON.stringify({ method: 'getEvent', params: {id: "571b3c2459ce5d5020a9af60" } }));

      dataStream.onMessage((event) => {
        const selectedEvent = JSON.parse(event.data);

        collection = selectedEvent.members;

        observable.next(collection);

      }, null);
    });
  }
}