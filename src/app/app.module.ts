import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OdooRPCService } from 'angular7-odoo-jsonrpc';
import { BookingService } from './booking.service';
import { SimplyBookingComponent } from './simply-booking/simply-booking.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { book } from './book';

@NgModule({
  declarations: [
    AppComponent,
    SimplyBookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [OdooRPCService,BookingService,book],
  bootstrap: [AppComponent]
})
export class AppModule { }
