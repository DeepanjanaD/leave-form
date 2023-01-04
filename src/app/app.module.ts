import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LeaveComponent } from './leave/leave.component';
import { HomeComponent } from './home/home.component';
import { EmpPersonalComponent } from './emp-personal/emp-personal.component';
import { NewLogComponent } from './new-log/new-log.component';



const appRoute: Routes = [
  {path:'', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'Leave', component: LeaveComponent},
  {path: 'EmpPersonal', component: EmpPersonalComponent},
  {path: 'NewLog' , component: NewLogComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LeaveComponent,
    HomeComponent,
    EmpPersonalComponent,
    NewLogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
