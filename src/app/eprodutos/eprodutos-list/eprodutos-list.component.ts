import { Router} from '@angular/router';
import { PrimeiroComponent } from './../../primeiro/primeiro.component';
import { Component, OnInit } from '@angular/core';
import { EprodutosService } from '../eprodutos.service';

@Component({
  selector: 'app-eprodutos-list',
  templateUrl: './eprodutos-list.component.html',
  styleUrls: ['./eprodutos-list.component.css']
})
export class EprodutosListComponent implements OnInit {
  
  produtos : any = [] 

  constructor(private produtosService : EprodutosService,
              private router : Router) { 
    
  }
  
  private getAllProducts(){
    this.produtosService.getAllProducts().subscribe(
     (response) => {
       console.log (response)
       this.produtos = response;
     },
     (error) => {console.log('Erro na API');}

    )
 }

  deletarProduto(id){

  this.produtosService.deletarProduto(id).subscribe(
    (response)=> {

      let index = this.produtos.findIndex((elemento) => {return elemento.id == id});
      this.produtos.splice( index, 1 );
     }

    ,(error) =>{ }
  )

 }

  updateProduto(id_usuario){
  this.router.navigate(['/produtos/cadastro',id_usuario]);

}

  ngOnInit(){
    this.getAllProducts();
    
  }
  
  
}
