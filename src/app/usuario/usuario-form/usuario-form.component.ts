import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuarios : any = [];
  employees: any = [];
  

  textoBotao = "Meu Botão";
  isHabilitado = true;

  
  color = 'yellow';
    
  constructor(private usuarioService : UsuarioService) {   
    //this.usuarioService = new UsuarioService();
    this.usuarios = this.usuarioService.getAll();
    
    this.usuarioService.getAllEmployees().subscribe(
      (qualquer_nome) => {
        this.employees = qualquer_nome;
      }
    );
  }

  ngOnInit(): void {
  }

  
  trocarHabilitado(){

    this.isHabilitado = !this.isHabilitado;
    //if ternário
    this.color = this.isHabilitado == true ? 'red' : 'pink';
    
  }

  getColor(){
    return this.color;
  }

}
