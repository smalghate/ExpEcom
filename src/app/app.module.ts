import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReimbursementScreenComponent } from './reimbursement-screen/reimbursement-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputScreenHotelComponent } from './input-screen-hotel/input-screen-hotel.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatInputModule} from  '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { RegisterComponent } from './register/register.component';
import { HttpClientJsonpModule, HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ReimbursementScreenComponent,
    InputScreenHotelComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDatepickerModule,

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
