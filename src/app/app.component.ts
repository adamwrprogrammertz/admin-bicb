import { Component } from '@angular/core';
import { StatusCheckService } from './status-check.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bicb';

  constructor(public statusService:StatusCheckService,private afAuth:AngularFireAuth,private snackBar:MatSnackBar){
    afAuth.authState.subscribe(data=>{
      if(data != null){
        statusService.checkStatus = true;
        this.snackBar.open("Welcome "+data.displayName,"",{duration:2000});
      }else{

      }
    })
  }


}
