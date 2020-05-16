import { Component, OnInit } from '@angular/core';
import { StatusCheckService } from '../status-check.service';
import { AllFireService } from '../all-fire.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-connected-account',
  templateUrl: './connected-account.component.html',
  styleUrls: ['./connected-account.component.css']
})
export class ConnectedAccountComponent implements OnInit {
  customerObjectFromFirebase: any;
  buttonStatusValue:any;

  buttonSettingStatus:"activated"|"no"="no";

  constructor(public serviceFb:AllFireService,
    private statuService:StatusCheckService,
    private afAuth:AngularFireAuth,
    private snackBar:MatSnackBar,) { }

  ngOnInit(): void {
    this.statuService.progressBarStatus = true;
    this.serviceFb.getAllCustomerDetail().subscribe(datas=>{
      if(datas != null){
        this.customerObjectFromFirebase = datas;
        this.statuService.progressBarStatus = false;
      console.log(datas)
      }else{
        //No data
      }
    });

    this.serviceFb.getActivateStatus().subscribe(data=>{
      data.forEach(docValues=>{
        console.log(docValues.payload.doc.data()["status"]);
      })
    });
  }

  activateUser(){
    this.statuService.progressBarStatus = true;
    this.serviceFb.addToAppUser().then(()=>{
      this.statuService.progressBarStatus = false;
      this.snackBar.open("Successful Activated 🥳🥳","",{duration:2000})
    })
  }

  setButtonTitle(value){
    this.buttonSettingStatus = value;
  }

}
