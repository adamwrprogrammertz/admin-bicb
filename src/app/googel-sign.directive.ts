import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Directive({
  selector: '[appGoogelSign]'
})
export class GoogelSignDirective {

  constructor(private afAuth: AngularFireAuth,private router:Router) {}

  @HostListener('click')
  onclick() {
    
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());

  }

}
