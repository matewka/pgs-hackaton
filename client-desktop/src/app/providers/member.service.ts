import {Injectable} from 'angular2/core';
import {$WebSocket} from 'angular2-websocket/angular2-websocket';
import {Observable} from 'rxjs/Observable';
import config from 'config/server';

@Injectable()
export class MemberService {
  getMembers() {
    return Observable.create((observable) => {
      const dataStream = new $WebSocket(`ws://${config.host}:${config.port}/`, null, null);
      let collection = [];

      dataStream.send(JSON.stringify({method: 'getEvent', params: {id: "57b5d27aaa8c131200d98236"}}));

      dataStream.onMessage((event) => {
        const selectedEvent = JSON.parse(event.data);

        collection = selectedEvent.members;

        observable.next(collection);

      }, null);
    });
  }
}
