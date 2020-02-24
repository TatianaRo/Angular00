import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EprodutosService {

  url = environment.api;

  constructor(private http: HttpClient) { }


  getAllProducts() {
    return this.http.get(this.url + 'produtos');
  }
  
  getOneProduct(id) {
    return this.http.get(this.url + 'produtos/'+ id);
  }
  setProduct(obj) {
    return this.http.post(this.url + 'produtos',obj);
  }
  
  
  deletarProduto(id_user){
    return this.http.delete(this.url+'produtos/'+id_user);
  }
 
  updateProduto(id_user, obj){
   return this.http.post(this.url+'produtos/'+id_user,obj);
 }


}
