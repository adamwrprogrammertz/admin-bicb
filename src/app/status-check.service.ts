import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusCheckService {

  checkStatus:boolean = false;
  progressBarStatus:boolean = false;

  constructor() { }

  changeStatusServ(value:boolean){
    this.checkStatus = value;
  }
}
