import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../service/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
               private authService: AuthService,  private snackBar: MatSnackBar,
               private router: Router) {}

  canActivate(): boolean  {
    if (this.authService.loggedIn()){
      return true;
    }
    this.snackBar.open('Bad Request !!!', '' , { duration: 2000 }).afterDismissed() ;
    this.router.navigate(['/home']);
    return false;
    }
}
