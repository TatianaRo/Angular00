import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private loginService : LoginService,
    private router : Router
  ) {  }

  canActivate(){
    if( this.loginService.isUsuarioAutenticado() == false){
      this.router.navigate(['/home'])
    }

      return true;


    }
  
}
