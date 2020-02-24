import { Component, OnInit } from '@angular/core';
import { EprodutosService } from '../eprodutos.service';

@Component({
  selector: 'app-eprodutos-sale',
  templateUrl: './eprodutos-sale.component.html',
  styleUrls: ['./eprodutos-sale.component.css']
})
export class EprodutosSaleComponent implements OnInit {

  produtos : any = [];

  constructor(private produtosService : EprodutosService) { 
    
  }

  ngOnInit(): void {
    this.getAllProducts();
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

}
