import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http : HttpClient) { }

  getCep(value){
    return this.http.get(`http://viacep.com.br/ws/${value}/json`)
  }


}
