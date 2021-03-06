import { Component, OnInit,ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { AllFireService } from '../all-fire.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { StatusCheckService } from '../status-check.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerModel } from './customer.model';
import { ServiceModelService } from '../all-data-service/service-model.service';
import * as moment from 'moment';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerObjectFromFirebase:any;
  onlineValue:any;
  noDataStatus:any;

  layoutChoose:"register"|"all"|"portifolio"="all";
  fileImg:File;
  clientId;
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
    private allDataService:ServiceModelService,
    private statuService:StatusCheckService,
    private afAuth:AngularFireAuth,
    private db: AngularFirestore,
    private snackBar:MatSnackBar,
    private afStorage: AngularFireStorage) {}

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
        console.log("No data")
        this.statuService.progressBarStatus = false;

      }

    });

    //Check Internet Connection
    this.allDataService.checkOnlineStatus$().subscribe(isOnline =>{
      this.onlineValue = isOnline;
    });
  }

  changeLayout(status){
    this.layoutChoose = status;
  }

  changeAndPassCustomerData(data:CustomerModel){
    this.layoutChoose = "portifolio";
    this.allDataService.customerData = data;
    this.allDataService.customerId = data.customerCode;
    console.log(data.name);
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
        customerCode:this.clientId,
        name:this.customerName,
        nature:this.customerNature,
        phone:this.customerPhone,
        gender:this.customerGender,
        birth:this.customerBirth,
        maritalStatus:this.customerMarital,
        id_type:this.customerIdType,
        id_number:this.customerIdNumber,
        spauseName:this.customerSpauseName === 'married'?this.customerSpauseName:"No Spause",
        residentAddress:this.customerResidentalAddress

      }).then(()=>{

        this.serviceFb.uploadCustomerDetail(this.clientId,{
          customerImgFile:this.imgCustomerUrl,
          customerCode:this.clientId,
          name:this.customerName,
          nature:this.customerNature,
          phone:this.customerPhone,
          gender:this.customerGender,
          birth:this.customerBirth,
          maritalStatus:this.customerMarital,
          id_type:this.customerIdType,
          id_number:this.customerIdNumber,
          spauseName:this.customerSpauseName === 'married'?this.customerSpauseName:"No Spause",
          residentAddress:this.customerResidentalAddress
        }).then(()=>{
        this.statuService.progressBarStatus = false;
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
        this.snackBar.open("Customer Detail Published 😁😁","",{duration:2000});
        })

      })

    });
  });
}


}
