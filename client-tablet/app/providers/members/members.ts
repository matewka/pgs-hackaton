import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class Members {
  constructor() {}

  getOneByCode(code:string) {
    return Observable.create((observer) => {
      observer.next({
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

}