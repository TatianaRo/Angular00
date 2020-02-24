import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EprodutosService } from '../eprodutos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-eprodutos-form',
  templateUrl: './eprodutos-form.component.html',
  styleUrls: ['./eprodutos-form.component.css']
})
export class EprodutosFormComponent implements OnInit {

  cadastroProduto : FormGroup;
  isEdicao = false;
  idUsuario : 0;

  constructor(private produtosService : EprodutosService,
    private formBuilder : FormBuilder,
    private toastr : ToastrService,
    private router  : Router,
    private activatedRoute : ActivatedRoute) {   }

  ngOnInit(): void 
  {  //Inicialização dos controles do form
    this.cadastroProduto = this.formBuilder.group(
      {
        nome  : [' ',[ ]],
        preco  : [' ',[ ]],
        descricao  : [' ',[ ]]
    
      }
    );

    //Decisão se alteração ou cadastro

    this.activatedRoute.params.subscribe(
      (rota)=>{
        if(rota.id)
        {
          console.log('é edição');
          this.isEdicao = true;
          this.idUsuario = rota.id;
          
          this.produtosService.getOneProduct( rota.id ).subscribe(
            (success : any) => 
            {
              let obj = {
                nome : success.nome,
                preco : success.preco,
                descricao : success.descricao                      

              }
              this.cadastroProduto.patchValue(obj);
            }
            ,(error) => { }
          )}
        else{
          console.log('é criação')
          this.isEdicao = false;
         
        }
      }

      );



  }

 addProduto(){
    let obj = {
  
      nome: this.cadastroProduto.value.nome,
      preco: this.cadastroProduto.value.preco,
      descricao : this.cadastroProduto.value.descricao 
};

    if (this.isEdicao == false) {

    this.produtosService.setProduct(obj).subscribe(
     (response) => {
       this.cadastroProduto.reset();
       this.toastr.success("Produto inserido com sucesso!")
       },
     (error) => {console.log('Erro na API');}

    )
 }
 else
 {
    this.produtosService.updateProduto(this.idUsuario, obj).subscribe(
    (response : any) =>
  { 
    this.router.navigate(['/produtos']);
       
  },
  (erro) =>{ }
  );
}
 }


}

