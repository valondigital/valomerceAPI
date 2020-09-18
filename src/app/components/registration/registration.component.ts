import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  isLoading = false;
  model: User = new User();
  private credential = {'username':'', 'password' : ''};
  constructor(private authService: AuthService,
              private router: Router) {}

  ngOnInit(): void {
  }

  onSubmit(){
    this.isLoading = true;
    this.register();
    }

  register(){
    this.authService.login(this.model).subscribe( next => {
    //this.alertify.success('registration successfully');
   // this.router.navigate(['/home']);
    this.isLoading = false;
    }, error => {
         //this.alertify.error(error);
         this.isLoading = false;
    });
  }
}
