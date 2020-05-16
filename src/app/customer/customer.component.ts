import { Component, OnInit,ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { AllFireService } from '../all-fire.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { StatusCheckService } from '../status-check.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  layoutChoose:"register"|"all"="all";
  fileImg:File;

  customerName;
  customerNature;
  customerPhone;
  customerGender;
  customerBirth;
  customerMarital;
  customerIdType;
  customerIdNumber;
  customerSpauseName;
  customerResidentalAddress;
  customerImg;

  imgCustomerUrl: any;

  constructor(public serviceFb:AllFireService,
    private statuService:StatusCheckService,
    private afAuth:AngularFireAuth,
    private db: AngularFirestore,
    private snackBar:MatSnackBar,
    private afStorage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  changeLayout(status){
    this.layoutChoose = status;
  }

uploadImg(event){
  this.fileImg = event.target.files[0];
}

onSubmit(){
  this.statuService.progressBarStatus = true;
  let storageRef = firebase.storage().ref();
  let imgRef = storageRef.child('Customers/Img/'+this.customerName+"_"+this.customerIdNumber);
  imgRef.put(this.fileImg).then(()=>{
    imgRef.getDownloadURL().then(url=>{
      this.imgCustomerUrl = url;

      this.serviceFb.uploadCustomerDetails({
        customerImgFile:this.imgCustomerUrl,
        name:this.customerName,
        nature:this.customerNature,
        phone:this.customerPhone,
        gender:this.customerGender,
        birth:this.customerBirth,
        maritalStatus:this.customerMarital,
        id_type:this.customerIdType,
        spauseName:this.customerSpauseName === 'married'?this.customerSpauseName:"No Spause",
        residentAddress:this.customerResidentalAddress

      }).then(()=>{
        this.statuService.progressBarStatus = false;
        this.snackBar.open("Customer Detail Published 😁😁","",{duration:2000});
        this.customerName = "";
        this.customerNature = "";
        this.customerPhone = "";
        this.customerGender = "";
        this.customerBirth = "";
        this.customerMarital = "";
        this.customerIdType = "";
        this.customerIdNumber = "";
        this.customerSpauseName = "";
        this.customerResidentalAddress = "";
        this.customerImg = "";

      })

    });
  });
}


}
