import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  layoutChoose:"register"|"all"="all";

  constructor() { }

  ngOnInit(): void {
  }

  changeLayout(status){
    this.layoutChoose = status;
  }

}
