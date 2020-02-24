import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isAutenticado : boolean = false;
  router : Router;

  url = environment.api; 

  constructor(private http : HttpClient) { }

  isUsuarioAutenticado(){
    return this.isAutenticado;
  }

   setIsAutenticado(value){
      this.isAutenticado = value;            
   }

   getPassword(obj){
     console.log(this.url + 'usuarios/auth');
    return this.http.post(this.url + 'usuarios/auth',obj);
   }

}
