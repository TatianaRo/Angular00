import { MenuDataService } from './../shared/services/menu-data.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/guards/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  esconderAdmin = false;

  constructor(private loginService : LoginService,
              private menuDataService : MenuDataService,
              private router : Router) { }

  ngOnInit(): void {
   
    this.menuDataService.menuMessageBus.subscribe(
      (response) => {
        console.log('menu comp',response);
        this.esconderAdmin = response;
      }
    );
    
    


  }

  
  logout(){
    this.loginService.setIsAutenticado(false);
    this.esconderAdmin = false ;
    this.router.navigate(['/login']);
  }
}
