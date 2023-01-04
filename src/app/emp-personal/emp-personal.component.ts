import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../leave.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-personal',
  templateUrl: './emp-personal.component.html',
  styleUrls: ['./emp-personal.component.css']
})
export class EmpPersonalComponent implements OnInit{

  constructor(private log: LeaveService){}

  logdata:any =[]

  OnEdit(item:any){
    debugger;
    item.isEdit = true;
  }
  
  ngOnInit(): void {

    this.log.getAllLog().subscribe((allData =>{
      this.logdata = allData;
      console.log(this.logdata);
    }));
  }

}
