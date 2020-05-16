import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerModel } from './customer/customer.model';

@Injectable({
  providedIn: 'root'
})
export class AllFireService {

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore,private matSnack:MatSnackBar) { }

   //Upload Customer Details
   async uploadCustomerDetails(data: CustomerModel) {
    const user = await this.afAuth.currentUser;
    this.db.collection('CustomerDetails').doc(user.uid).collection(user.uid).add({
      ...data,
      adminId: user.uid
    }).catch((error) => {
      console.log(error);
    });
  }

}
