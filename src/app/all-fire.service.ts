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

  //Upload Customer Detail
  async uploadCustomerDetail(customerId:string,data: CustomerModel) {
    const user = await this.afAuth.currentUser;
    this.db.collection('Customer').doc(customerId).set({
      ...data,
      adminName: user.displayName
    }).catch((error) => {
      console.log(error);
    });
  }

  //Add to App Users
  async addToAppUser() {
    const user = await this.afAuth.currentUser;
    this.db.collection('AppUsers').add({
      status:"Activated",
      adminName: user.displayName
    }).catch((error) => {
      console.log(error);
    });
  }


  //Load all Customers
  getAllCustomerDetail(){
    return this.db.collection('CustomerDetails').snapshotChanges();
  }

  //Get App Status
  getActivateStatus(){
    return this.db.collection('AppUsers').snapshotChanges();
  }

}
