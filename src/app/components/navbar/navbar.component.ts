import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  loggedIn = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.loggedIn = !this.loggedIn;
    
  }

}
