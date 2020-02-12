import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  getAll(){
    return [
      {id: 1, primeironome : 'Tatiana', sobrenome: 'Olveira', apelido :'trodrigues'},
      {id: 2, primeironome : 'Marcelo', sobrenome: 'Dantas', apelido :'rdantas'},
      {id: 3, primeironome : 'Clara', sobrenome: 'Rodrigues', apelido :'claras'},
      {id: 4, primeironome : 'Tássio', sobrenome: 'Souza', apelido :'tasouza'},
      {id: 5, primeironome : 'Cesar', sobrenome: 'Dias', apelido :'rolar'},
    ];

  }
}
