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
  pokemonSelecionado : any;
  
  employee: any = [];

  offset: number = 0;
  limit : number = 10;

  color = 'yellow';

  textoBotao = 'Meu Botão';
  isHabilitar = true;



  constructor(private usuarioService: UsuarioService) {
    this.usuarios = this.usuarioService.getAll();

    this.usuarioService.getAllPokemons(this.offset,this.limit).subscribe(
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

  SelecionarPokemon(url){
     this.usuarioService.getOnePokemon(url).subscribe(
      (success) => {
        this.pokemonSelecionado = success;
        console.log(this.pokemonSelecionado);
      }
     )
  }

  

  proximaPagina() {
    this.offset += 20;

    this.usuarioService.getAllPokemons(this.offset,this.limit).subscribe(
      (success) => {
        console.log(success)
        this.pokemons = success;
      },
      (error) => { console.log(error) }

    );
  }

  trocarLimit(value){
    this.limit = value;

    this.usuarioService.getAllPokemons(this.offset,this.limit).subscribe(
      (success) => {
        console.log(success)
        this.pokemons = success;
      },
      (error) => { console.log(error) }

    );
    
  }

  habilitar() {
   this.isHabilitar = !this.isHabilitar;
   this.color = this.isHabilitar ? 'red' : 'pink';
  }
  
  getColor(){
    return this.color;
  }

  ngOnInit(): void {
  }

}
