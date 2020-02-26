import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../shared/models/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = environment.api + 'usuarios/';

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

   getAllEmployees(){
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
  }

   createUsuario(obj){

   return this.http.post(this.url,obj)

   }

   getAllUsuarios(){
    console.log();
    return this.http.get<UsuarioModel[]>(this.url);
  }

  getOneUser(id_user){
    return this.http.get<UsuarioModel>(this.url+id_user);
  }

   deleteUsuario(id_user){
     return this.http.delete(this.url+id_user);
   }
  
   updateUser(id_user, obj){
    return this.http.post(this.url+id_user,obj);
  }
}
