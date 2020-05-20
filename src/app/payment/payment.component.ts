import { Component, OnInit } from '@angular/core';
import { ServiceModelService } from '../all-data-service/service-model.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  onlineValue:any;

  constructor(
    private allDataService:ServiceModelService,) { }

  ngOnInit(): void {

     //Check Internet Connection
  this.allDataService.checkOnlineStatus$().subscribe(isOnline =>{
    this.onlineValue = isOnline;
  });
  
  }

  tabChanged(event){
    switch(event.index){
      case 0:
        this.loadDataAll()
        console.log(event.index)
        break;

      case 1:
        this.loadDataSuccess()
        console.log(event.index)
        break;

        case 2:
          this.loadSummary();
          break;

        default:
          return null;
    }
  }

  loadDataAll(){

  }

  loadDataSuccess(){

  }

  loadSummary(){

  }


}
