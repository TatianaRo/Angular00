import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ToastrService } from 'ngx-toastr';
import { UsuarioModel } from 'src/app/shared/models/usuario.model';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  
  usuarios : UsuarioModel[] = [];

  constructor(private usuarioService : UsuarioService,
    private toastr : ToastrService,
    private router : Router) {  
    
   }


   private getAllUsuarios(){
    this.usuarioService.getAllUsuarios().subscribe(
      (success) => {
        console.log (success);
        this.usuarios = success;
      },
      (error)=> {
        console.log (error);
        this.toastr.error ('Erro ao consultar API')
      }
    );
   }

  editarUsuario(id_usuario){
    this.router.navigate(['/usuarios/edit/',id_usuario])

  }

  deletarUsuario(id_usuario){
    this.usuarioService.deleteUsuario(id_usuario).subscribe(
      (success) =>  {this.toastr.success ('Usuário deletado com sucesso');
      //this.getAllUsuarios();  ou
      // desta forma chama apenas uma requisição:

      let index = this.usuarios.findIndex((elemento) => {return elemento.id == id_usuario});
      this.usuarios.splice( index, 1 );
    }
      ,(error) => {this.toastr.error ('Erro ao deletar')}
    )
  }

  ngOnInit(): void {
    this.getAllUsuarios();
  }

  

}
