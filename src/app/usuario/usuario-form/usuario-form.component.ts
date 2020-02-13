import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuarios: any = [];
  pokemons: any = [];
  employee: any = [];
  offset: number = 0;




  constructor(private usuarioService: UsuarioService) {
    this.usuarios = this.usuarioService.getAll();

    this.usuarioService.getAllPokemons(this.offset).subscribe(
      (success) => {
        console.log(success)
        this.pokemons = success;
      },
      (error) => { console.log(error) }

    );

    this.usuarioService.getAllEmployees().subscribe(
      (success) => {
        console.log(success)
        this.employee = success;
      },
      (error) => { console.log(error) }

    );


  }

  proximaPagina() {
    this.offset += 20;

    this.usuarioService.getAllPokemons(this.offset).subscribe(
      (success) => {
        console.log(success)
        this.pokemons = success;
      },
      (error) => { console.log(error) }

    );
  }



  ngOnInit(): void {
  }

}
