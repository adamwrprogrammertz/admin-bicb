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
    this.db.collection('CustomerDetails').add({
      ...data,
      adminName: user.displayName
    }).catch((error) => {
      console.log(error);
    });
  }


  //Load all Customers
  getAllCustomerDetail(){
    return this.db.collection('CustomerDetails').snapshotChanges();
  }

}
