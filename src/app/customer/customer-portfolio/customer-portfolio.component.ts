import { Component, OnInit } from '@angular/core';
import { ServiceModelService } from '../../all-data-service/service-model.service';
import { AllFireService } from 'src/app/all-fire.service';
import { StatusCheckService } from 'src/app/status-check.service';

export interface Repayments {
  date: string;
  position: number;
  debit: number;
  credit: number;
}

const ELEMENT_DATA: Repayments[] = [
  { position: 1, date: '02/02/2020', debit: 90000, credit: 30000 },
  { position: 2, date: '02/09/2020', debit: 60000, credit: 30000 },
  { position: 3, date: '02/16/2020', debit: 30000, credit: 30000 },
  { position: 4, date: '02/23/2020', debit: 0, credit: 30000 }
]

@Component({
  selector: 'app-customer-portfolio',
  templateUrl: './customer-portfolio.component.html',
  styleUrls: ['./customer-portfolio.component.css']
})
export class CustomerPortfolioComponent implements OnInit {

  displayedColumns: string[] = ['position', 'date', 'debit', 'credit'];
  dataSource = ELEMENT_DATA;
  onlineValue:any;
  noDataStatus:any;

  panelOpenState = false;


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

  constructor(public allDataService:ServiceModelService,
    private statuService:StatusCheckService,
    public serviceFb:AllFireService,) { }

  ngOnInit(): void {
    this.statuService.progressBarStatus = true;
    this.serviceFb.getCustomerDetail(this.allDataService.customerId).subscribe(datas=>{
      if(datas.length != 0){
        this.statuService.progressBarStatus = false;
        this.noDataStatus = false;

        datas.forEach(value=>{
          console.log(value)
          this.clientId = value['customerCode'];
          this.customerImg = value['customerImgFile'];
          this.customerName = value['name'];
          this.customerNature = value['nature'];
          this.customerPhone = value['phone'];
          this.customerResidentalAddress = value['residentAddress'];
          this.customerGender = value['gender'];
          this.customerBirth = new Date(value['birth'].toDate());
          console.log(this.customerBirth);
          this.customerMarital = value['maritalStatus'];
          this.customerIdType = value['id_type'];
          this.customerIdNumber = value['id_number'];
        })
      }else{
        //No data
        this.noDataStatus = true;
        this.statuService.progressBarStatus = false;
      }
    });
  }



}
