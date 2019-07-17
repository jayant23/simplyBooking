import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookingService {
  body =   {"jsonrpc":"2.0","method":"getToken","params":["mib","f43618e37b82004066d60db3431f4a06392599a6cfcafa8268bf25becc0ec7d7"],"id":1}
  eventlist = {"jsonrpc":"2.0","method":"getEventList","params":[],"id":1}
  getunitList = {"jsonrpc":"2.0","method":"getUnitList","params":[],"id":2}
  firstworkingDay ={"jsonrpc":"2.0","method":"getFirstWorkingDay","params":["1"],"id":3}
  constructor(private http:HttpClient) { }

  
  login(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'POST' })
    };
    console.log(this.body);
    return this.http.post<any>('https://user-api.simplybook.me/login', this.body);
  }

  geteventlist(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'POST,OPTIONS',
        'X-Company-Login': 'mib',
        'X-Token': 'db50a982bddc22e2fd0ea71970bd2b53cc2a9f33c53241a345993ff49ae868ec'
      })
    };
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Company-Login': 'mib',
      'X-Token': 'db50a982bddc22e2fd0ea71970bd2b53cc2a9f33c53241a345993ff49ae868ec'
    });
    let options = { headers: headers };
    console.log(this.eventlist);

    return this.http.post<any>('https://user-api.simplybook.me', this.eventlist, options);
  }

  getUnitList(): Observable<any> {
    let headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'X-Company-Login': 'mib',
        'X-Token': 'db50a982bddc22e2fd0ea71970bd2b53cc2a9f33c53241a345993ff49ae868ec'
      }
    );
    let options = { headers: headers };
    console.log(this.getunitList)
    return this.http.post<any>('https://user-api.simplybook.me', this.getunitList, options)

  }

  getFirstWorkingDay(): Observable<any> {
    let headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'X-Company-Login': 'mib',
        'X-Token': 'ae5814dbb4a33d1170a7f3fce456ced0a9cef38896126081bf751f9597d856ce'
      }
    );
    let options = { headers: headers };
    console.log(this.firstworkingDay)
    return this.http.post<any>('https://user-api.simplybook.me', this.firstworkingDay, options)
  }

}
