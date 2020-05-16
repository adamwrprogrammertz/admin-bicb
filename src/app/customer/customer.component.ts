import { Component, OnInit,ViewChild } from '@angular/core';

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

  @ViewChild('form') customerForm: any;

  constructor() { }

  ngOnInit(): void {
  }

  changeLayout(status){
    this.layoutChoose = status;
  }

uploadImg(event){
  this.fileImg = event.target.files[0];
}

onSubmit(){
  if(this.customerForm.valid){
    this.customerForm.reset();
  }
}


}
