import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  myScriptElement: HTMLScriptElement;
  constructor(){
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "src/assets/Dashboard.js";
    document.body.appendChild(this.myScriptElement);
  }

  logoSrc:string = "assets/Brudhu-Logo-BG-Removed.png";
  logo2Src:string = "assets/logo.png";

}
