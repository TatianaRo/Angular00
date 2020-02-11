import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  xxx:number = 10;
  nome = "Fábio";


  mostrar(){
     
    console.log("Mensagem");
  }
  
  show(){
   console.log(this.nome);
 }

 alterar(){
   this.nome = "123456";
 }
}
