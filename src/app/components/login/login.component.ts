import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  isLoading = false;
  model: User = new User();


  title = 'materialApp'; 
  color = 'primary';
  mode = 'determinate';
  value = 50;

  constructor(private authService: AuthService, private snackBar: MatSnackBar,
              private router: Router) {}


  ngOnInit(): void {
  }

  onSubmit(){
    this.isLoading = true;
    this.SignUp();
    
    }

  SignUp() {
      this.authService.login(this.model).subscribe( next => { 
         this.snackBar.open('Admin log in  successfully', '' , { duration: 2000 }).afterDismissed() ;
         this.isLoading = false;
   }, error => {
        this.isLoading = false;
        console.log(error);
    }, () => {
       this.router.navigate(['/profile']);
   });
 }

}
