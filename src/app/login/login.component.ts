import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { StatusCheckService } from '../status-check.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuths:AngularFireAuth,public statusServ:StatusCheckService){}

  ngOnInit(): void {
  }


  logOut(){
    
    this.statusServ.progressBarStatus = true;
    this.afAuths.signOut().then(()=>{
      this.statusServ.checkStatus = false;
      this.statusServ.progressBarStatus = false;

    });
  }
}
