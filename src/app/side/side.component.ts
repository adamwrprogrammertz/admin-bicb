import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {

  switchLayoutType :"home"|"payment"|"balance"|"customer"|"connected_account"|"reports"|"setting"="home";

  changeLayoutDesign(status) {
    this.switchLayoutType = status;
  }


  constructor() {
  }

  ngOnInit(): void {
  }

  

}
