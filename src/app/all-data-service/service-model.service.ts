import { Injectable } from '@angular/core';
import { CustomerModel } from '../customer/customer.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceModelService {

  customerData:CustomerModel;

  constructor() { }


}
