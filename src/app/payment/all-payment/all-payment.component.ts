import { Component, OnInit } from '@angular/core';
import { AllFireService } from 'src/app/all-fire.service';
import { StatusCheckService } from '../../status-check.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-all-payment',
  templateUrl: './all-payment.component.html',
  styleUrls: ['./all-payment.component.css'],
})
export class AllPaymentComponent implements OnInit {
  panelOpenState = false;
  customerObjectFromFirebase: any;
  
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
      }else{
        //No data
      }
    });
  }

}


