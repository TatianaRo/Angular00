import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/guards/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  searchGroup : FormGroup;
  

  constructor(private loginService : LoginService,
              private formBuilder : FormBuilder,
              private toastr : ToastrService,
              private router  : Router
    ) {

   
   }
  

  ngOnInit(): void {
    // this.searchGroup = new FormGroup(
    //   control
    this.searchGroup = this.formBuilder.group(
      {
        senha  : ['',[ ]],
        email  : ['',[ ]]
    
      }
    )

  }
  // login(){
  //   this.loginService.setIsAutenticado(true);
  // }

  onSubmit(){
    
    let obj = {
  
           email: this.searchGroup.value.email,
           senha: this.searchGroup.value.senha
         
    };
    console.log(obj)
    this.loginService.getPassword(obj).subscribe
    (
      ( response ) =>
      { 
        console.log(response);
        this.loginService.setIsAutenticado(response);
        
        if(response == true){
          
          this.toastr.success('Login efetuado');
          this.router.navigate(['/admin']);
        }
        else{
          this.toastr.error('Usuário não encontrado');
          
        }
          
        }
        
      ,
      (erro) =>{ console.log(erro); }
  
    );
    }
    

  

}
