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

import { MatInputModule } from '@angular/material/input';
import { AllPaymentComponent } from './payment/all-payment/all-payment.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    MatInputModule,


    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,// storage

    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
