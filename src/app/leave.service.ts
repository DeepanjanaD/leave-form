import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  urlLeave= 'http://localhost:3000/formData';
  urlLog = 'http://localhost:3000/logData';


  constructor(private http:HttpClient) { }
  saveLeaveData(data:any){
    return this.http.post(this.urlLeave, data);
    // console.log(data);
  }
  getAllLog(){
    return this.http.get(this.urlLog);
  }
}
