import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { StatusCheckService } from '../status-check.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  hideButton;
  nameFromGoogleAccount;
  imageUrlFromGoogleAccount;

  constructor(private afAuth:AngularFireAuth,private router:Router,private serv:StatusCheckService) {
    afAuth.authState.subscribe(data=>{
      if(data != null){
        //Login
        this.hideButton = true;
        this.nameFromGoogleAccount = data.displayName;
        this.imageUrlFromGoogleAccount = data.photoURL;
      }else{
        //No user
        this.hideButton = false;
      }
    })
   }

  ngOnInit(): void {
  }

  logOut(){
    this.serv.progressBarStatus = true;
    this.afAuth.signOut().then(()=>{
      this.hideButton = false;
      this.serv.progressBarStatus = false;

    });

  }

}
