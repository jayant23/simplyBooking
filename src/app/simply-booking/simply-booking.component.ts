import { Component, OnInit } from '@angular/core';
import {BookingService} from '../booking.service'

@Component({
  selector: 'app-simply-booking',
  templateUrl: './simply-booking.component.html',
  styleUrls: ['./simply-booking.component.css']
})
export class SimplyBookingComponent implements OnInit {

   

  constructor(private bookservice:BookingService) { }

  ngOnInit() {
    this.login();
    this.geteventlist();
    this.getunitList();
    this.getFirstWorkingDay();


  }


  login()
  {
    this.bookservice.login().subscribe( (res)=>{
      console.log("simplybook.me returs "+JSON.stringify(res))
  })

    }
    geteventlist()
  {
    this.bookservice.geteventlist().subscribe( (res)=>{
      console.log("simplybook.me returs time matrix "+JSON.stringify(res))
  })
    }
    getunitList()
    {
      this.bookservice.getUnitList().subscribe((res)=>{
        console.log("simplybook.me return unit list "+JSON.stringify(res))
      })
    }
    
    getFirstWorkingDay()
    {
      this.bookservice.getFirstWorkingDay().subscribe((res)=>{
        console.log("simplybook.me return unit getFirstWorkingDay "+JSON.stringify(res))
      })
    }


    
}
