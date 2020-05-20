import { Component, OnInit } from '@angular/core';
import { StatusCheckService } from '../status-check.service';
import { AllFireService } from '../all-fire.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceModelService } from '../all-data-service/service-model.service';

@Component({
  selector: 'app-connected-account',
  templateUrl: './connected-account.component.html',
  styleUrls: ['./connected-account.component.css']
})
export class ConnectedAccountComponent implements OnInit {
  customerObjectFromFirebase: any;
  buttonStatusValue:any;
  onlineValue:any;
  noDataStatus:any;

  constructor(public serviceFb:AllFireService,
    private statuService:StatusCheckService,
    private allDataService:ServiceModelService,
    private afAuth:AngularFireAuth,
    private snackBar:MatSnackBar,) { }

  ngOnInit(): void {
    this.statuService.progressBarStatus = true;
    this.serviceFb.getAllCustomerDetail().subscribe(datas=>{
      if(datas.length != 0){
        this.customerObjectFromFirebase = datas;
        this.statuService.progressBarStatus = false;
        this.noDataStatus = false;
      }else{
        //No data
        this.noDataStatus = true;
        this.statuService.progressBarStatus = false;
      }
    });

    this.serviceFb.getActivateStatus().subscribe(data=>{
      data.forEach(docValues=>{
        this.buttonStatusValue = docValues.payload.doc.data()["status"];
        console.log(this.buttonStatusValue);
      })
    });

    //Check Internet Connection
  this.allDataService.checkOnlineStatus$().subscribe(isOnline =>{
    this.onlineValue = isOnline;
  });


  }

  activateUser(){
    this.statuService.progressBarStatus = true;
    this.serviceFb.addToAppUser().then(()=>{
      this.statuService.progressBarStatus = false;
      this.snackBar.open("Successful Activated 🥳🥳","",{duration:2000})
    })
  }




}
