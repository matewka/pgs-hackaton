import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class Members {
  constructor() {}

  retrieveByCode(code:string) {
    return Observable.create((observer) => {
      observer.next({
        "id": 123,
        "name": "Ivan",
        "surname": "Disapierd",
        "email": "mosssampson@gracker.com",
        "phone": "+1 (834) 524-2682",
        "consent": false,
        "status": "not accepted",
        "code": "1234",
        "registered": "2014-10-28T12:39:38 -01:00",
        "technologies": [
          "Javascript",
          "PHP"
        ]
      });
    });
  }

  register(id) {
    return Observable.create((observer) => {
      observer.next(id);
    });
    console.log('registered', id);
  }

}