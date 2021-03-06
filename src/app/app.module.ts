import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { SideComponent } from './side/side.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { BalanceComponent } from './balance/balance.component';
import { CustomerComponent } from './customer/customer.component';
import { ConnectedAccountComponent } from './connected-account/connected-account.component';
import { ReportComponent } from './report/report.component';
import { SettingComponent } from './setting/setting.component';
import {  FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { GoogelSignDirective } from './googel-sign.directive';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';

import { MatInputModule } from '@angular/material/input';
import { AllPaymentComponent } from './payment/all-payment/all-payment.component';
import { MomentPipe } from './moment.pipe';
import { CustomerPortfolioComponent } from './customer/customer-portfolio/customer-portfolio.component';
import { SuccesedPaymentComponent } from './payment/succesed-payment/succesed-payment.component';

import { MatListModule } from '@angular/material/list';
import { SummaryPaymentComponent } from './payment/summary-payment/summary-payment.component';


import { NgCircleProgressModule } from 'ng-circle-progress';
import { UserTasksComponent } from './home/user-tasks/user-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SideComponent,
    HomeComponent,
    PaymentComponent,
    BalanceComponent,
    CustomerComponent,
    ConnectedAccountComponent,
    ReportComponent,
    SettingComponent,
    LoginComponent,
    GoogelSignDirective,
    AllPaymentComponent,
    MomentPipe,
    CustomerPortfolioComponent,
    SuccesedPaymentComponent,
    SummaryPaymentComponent,
    UserTasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    MatInputModule,
    MatListModule,
    MatDialogModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,// storage

    MatNativeDateModule,

    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "rgb(212, 183, 255)",
      innerStrokeColor: "#EDE7F6",
      animationDuration: 300,
      unitsColor:"grey",
      titleColor:"grey",
      animation: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
