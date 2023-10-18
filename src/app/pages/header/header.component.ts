import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  eventList = new Array<string>();
  ActiveID = 1
  routerName;
  constructor(private router:Router) { 

  }

  ngOnInit() {
    this.routerName = window.location.pathname
    console.log( window.location.pathname);
    if(this.routerName == '/vid'){
      this.ActiveID = 2
    }
    let elment: HTMLElement = document.getElementById('myModala') as HTMLElement
    elment.click()
  }

  active(id){
    if(id == 1){
      this.ActiveID = 1
    }else{
      this.ActiveID = 2
    }
   
  }
}
