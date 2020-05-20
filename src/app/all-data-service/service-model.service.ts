import { Injectable } from '@angular/core';
import { CustomerModel } from '../customer/customer.model';
import { Observable, Observer, fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServiceModelService {

  customerData:CustomerModel;
  customerId:any;


  constructor() { }

  checkOnlineStatus$() {
    return merge<boolean>(
      fromEvent(window, 'offline').pipe(map(() => false)),
      fromEvent(window, 'online').pipe(map(() => true)),
      new Observable((sub: Observer<boolean>) => {
        sub.next(navigator.onLine);
        sub.complete();
      }));
  }


}
