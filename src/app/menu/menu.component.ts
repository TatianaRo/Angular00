import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/guards/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
  }

  
  logout(){
    this.loginService.setIsAutenticado(false);
  }
}
