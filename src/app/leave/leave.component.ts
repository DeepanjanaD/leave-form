import { Component } from '@angular/core';
import { LeaveService } from '../leave.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent {

  myScriptElement: HTMLScriptElement;
  constructor(private leave:LeaveService){
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "src/assets/FormValidation.js";
    document.body.appendChild(this.myScriptElement);
  }

  newLeaveForm = new FormGroup({
    FirstName: new FormControl(''),
    LastName: new FormControl(''),
    EmpID: new FormControl(''),
    Email: new FormControl(''),
    Cause: new FormControl(''),
    FromDate: new FormControl(''),
    EndDate: new FormControl(''),
    Comments: new FormControl(''),
    Attachments: new FormControl('')
});

isChecked= false;
isDisabled = true;
LeaveDataBody = "Fill in the details appropriately.";

onSubmit(){
  this.leave.saveLeaveData(this.newLeaveForm.value)
  .subscribe((result)=> {
    console.log(result); 
   });
  ;
  this.onChange();
  alert('Application Sent');

}

onChange(){
  this.isChecked = true;
  this.LeaveDataBody = "Your application has been sent Successfully.";
}

}

