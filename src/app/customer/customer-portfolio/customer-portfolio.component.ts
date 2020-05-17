import { Component, OnInit } from '@angular/core';
import { ServiceModelService } from '../../all-data-service/service-model.service';

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
  constructor(public allDataService:ServiceModelService) { }

  ngOnInit(): void {
  }



}
