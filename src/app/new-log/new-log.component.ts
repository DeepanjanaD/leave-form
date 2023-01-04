import { Component } from '@angular/core';
import { LeaveService } from '../leave.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-log',
  templateUrl: './new-log.component.html',
  styleUrls: ['./new-log.component.css']
})
export class NewLogComponent {

  myScriptElement: HTMLScriptElement;
  constructor(private leave:LeaveService){
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "src/assets/FormValidation.js";
    document.body.appendChild(this.myScriptElement);
  }

  newLog = new FormGroup({
    Date: new FormControl(''),
    FirstName: new FormControl(''),
    LastName: new FormControl(''),
    LoginTime: new FormControl(''),
    LogoutTime: new FormControl(''),
    Task: new FormControl(''),
    Remarks: new FormControl('')
    
});

  onSubmit(){
    console.log(this.newLog)
  }

}
