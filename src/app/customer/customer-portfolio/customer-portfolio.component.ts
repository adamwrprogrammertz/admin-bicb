import { Component, OnInit } from '@angular/core';

import { ServiceModelService } from '../../all-data-service/service-model.service';

@Component({
  selector: 'app-customer-portfolio',
  templateUrl: './customer-portfolio.component.html',
  styleUrls: ['./customer-portfolio.component.css']
})
export class CustomerPortfolioComponent implements OnInit {
  
  constructor(public allDataService:ServiceModelService) { }

  ngOnInit(): void {
  }



}
