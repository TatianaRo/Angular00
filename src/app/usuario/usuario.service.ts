import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http : HttpClient) { }

 

  getAll(){
    return [
      {id: 1, primeironome : 'Tatiana', sobrenome: 'Olveira', apelido :'trodrigues'},
      {id: 2, primeironome : 'Marcelo', sobrenome: 'Dantas', apelido :'rdantas'},
      {id: 3, primeironome : 'Clara', sobrenome: 'Rodrigues', apelido :'claras'},
      {id: 4, primeironome : 'Tássio', sobrenome: 'Souza', apelido :'tasouza'},
      {id: 5, primeironome : 'Cesar', sobrenome: 'Dias', apelido :'rolar'},
    ];

  }

  getAllPokemons(offset,limit){
    console.log(offset,limit);
    return this.http.get('https://pokeapi.co/api/v2/pokemon-form?limit='+limit+'&offset='+ offset);
  }

  getAllEmployees(){
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
  }

  getOnePokemon(url){
    return this.http.get(url);
  }
}
