import { CepService } from './../../shared/services/cep.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuarios : any = [];
  employees: any = [];
  

  textoBotao = "Meu Botão";
  isHabilitado = true;

  
  color = 'yellow';
  
  isEdicao = false;
  idUsuario = 0;

  addusuarios : FormGroup;

  mensagem : any;
  titulo : any;

  constructor(
    private usuarioService : UsuarioService,
    private formBuilder : FormBuilder,
    private cepService : CepService,
    private toastr: ToastrService,
    private router : Router,
    private activatedRoute : ActivatedRoute  
    ) {   

      console.log( this.activatedRoute );

      this.activatedRoute.params.subscribe(
      (rota)=>{
        if(rota.id)
        {
          console.log('é edição');
          this.isEdicao = true;
          this.idUsuario = rota.id;
          this.mensagem = 'Cadastrar';
          this.titulo = "Formulário de cadastro";

          this.usuarioService.getOneUser( rota.id ).subscribe(
            (success : any) => 
            {
              let obj = {
                nomeInput : success.nome,
                emailInput : success.email,
                senhaInput : success.senha,
                cepInput : success.cep,
                cidadeInput : success.localidade,
                logradouroInput : success.logradouro,
                bairroInput : success.bairro,
                estadoInput : success.uf,
                numeroInput : success.numero,
                complementoInput : success.complemento,
                

              }
              this.addusuarios.patchValue(obj);
            }
            ,(error) => 
            {
              
            }
          )}
        else{
          console.log('é criação')
          this.isEdicao = false;
          this.mensagem = 'Alterar';
          this.titulo = "Formulário de Alteração";
        }
      }

      );

      this.addusuarios = this.formBuilder.group(
        {
          nomeInput  : ['',[ ]],
          senhaInput  : ['',[ ]],
          emailInput   : ['',[ ]],
          cepInput    : ['',[ ]],
          cidadeInput  : ['',[ ]], 
          numeroInput   : ['',[ ]],
          complementoInput  : ['',[ ]],
          bairroInput   : ['',[ ]],
          logradouroInput  : ['',[ ]],
          estadoInput    : ['',[ ]]
        }
      );
    
  }

  ngOnInit(): void {
    //this.usuarioService = new UsuarioService();
    this.usuarios = this.usuarioService.getAll();
    
    this.usuarioService.getAllEmployees().subscribe(
      (qualquer_nome) => {
        this.employees = qualquer_nome;
      }
    );
  }

  
  trocarHabilitado(){

    this.isHabilitado = !this.isHabilitado;
    //if ternário
    this.color = this.isHabilitado == true ? 'red' : 'pink';
    
  }

  getColor(){
    return this.color;
  }

  getEndereco(){
    let cep = this.addusuarios.value.cepInput;
    
    this.cepService.getCep( cep ).subscribe(
      (response : any)=>{ 
        console.log(response) ;
        this.addusuarios.patchValue(
          {
            cidadeInput : response.localidade,
            logradouroInput : response.logradouro,
            bairroInput : response.bairro,
            estadoInput : response.uf,

          }
          );
      },
      (error) => {
        console. log (error);
      }

    )
    

    console.log('blur')
  }

onSubmit(){
  console.log(this.addusuarios);

  let obj = {

         nome : this.addusuarios.value.nomeInput,
         email: this.addusuarios.value.emailInput,
         senha : this.addusuarios.value.senhaInput,
         tipo_usuario: 1,
         cep : this.addusuarios.value.cepInput,
         logradouro : this.addusuarios.value.logradouroInput,
         numero :this.addusuarios.value.numeroInput,
         complemento : this.addusuarios.value.complementoInput,
         cidade: this.addusuarios.value.cidadeInput,
         bairro: this.addusuarios.value.bairroInput,
         estado: this.addusuarios.value.estadoInput
  };

  if(this.isEdicao == false)
  {
  this.usuarioService.createUsuario(obj).subscribe
  (
    (response : any) =>
    { 
      console.log(response);
      this.toastr.success('Usuário inserido com sucesso: '+ response.id);
      this.router.navigate(['/usuarios']);
      
      
    },
    (erro) =>{ }

  );

  }else{
    this.usuarioService.updateUser (this.idUsuario, obj).subscribe(
      (response : any) =>
    { 
      console.log(response);
      this.toastr.success('Usuário alterado com sucesso: '+ response.id);
      this.router.navigate(['/usuarios']);
      
      
    },
    (erro) =>{ }
    );
  }

 
}

}
