import { CepService } from './../../shared/services/cep.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioModel } from 'src/app/shared/models/usuario.model';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuarios : any = [];
  usuario : UsuarioModel ;

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
            (success : UsuarioModel) => 
            //Objeto foi substituido por usuario
             {
            //   let obj = {
            //     nomeInput : success.nome,
            //     emailInput : success.email,
            //     senhaInput : success.senha,
            //     cepInput : success.cep,
            //     cidadeInput : success.localidade,
            //     logradouroInput : success.logradouro,
            //     bairroInput : success.bairro,
            //     estadoInput : success.uf,
            //     numeroInput : success.numero,
            //     complementoInput : success.complemento,
                

            //   }
              this.usuario = success;
              this.addusuarios.patchValue( { usuario : this.usuario } );
            }
            ,(error) => { }
          )}
        else{
          console.log('é criação')
          this.isEdicao = false;
          this.mensagem = 'Alterar';
          this.titulo = "Formulário de Alteração";
        }
      }

      );

    //   this.addusuarios = this.formBuilder.group(
    //     {
    //       usuario : {
    //       nome  : ['',[ Validators.required ]],
    //       senha  : ['',[ ]],
    //       email  : ['',[ ]],
    //       cep   : ['',[ ]],
    //       cidade : ['',[ ]], 
    //       numero   : ['',[ ]],
    //       complemento  : ['',[ ]],
    //       bairro   : ['',[ ]],
    //       logradouro  : ['',[ ]],
    //       estado  : ['',[ ]]
    //     }
    // }
     // );

     this.addusuarios = new FormGroup({

      usuario: new FormGroup({
        nome: new FormControl(''),
        senha: new FormControl(''),
        email: new FormControl(''),
        cep:new FormControl(''),
        cidade: new FormControl(''),
        numero: new FormControl(''),
        complemento: new FormControl(''),
        bairro : new FormControl(''),
        logradouro: new FormControl(''),
        estado: new FormControl('')
      })
    });

    
  }

  ngOnInit(): void {
    //this.usuarioService = new UsuarioService();
    //this.usuarios = this.usuarioService.getAll();
    
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
    let cep = this.addusuarios.get('usuario.cep');
    //let cep = this.addusuarios.value.cepInput;
    
    this.cepService.getCep( cep.value ).subscribe(
      (response : any)=>{ 
        console.log(response) ;
         
        let obj = {
          cidade: response.localidade,
          logradouro: response.logradouro,
          bairro: response.bairro,
          estado: response.uf,
          cep: response.cep
        }

        this.addusuarios.patchValue( { usuario : obj } );
      },
      (error) => {
        console. log (error);
      }

    )
    

    console.log('blur')
  }

onSubmit(){

  this.usuario = Object.assign({}, this.addusuarios.value.usuario)
  console.log(this.addusuarios);

  // O objeto pode ser descartado, pois o objeto usuario armazena já os valores
  //let obj = {

  //        nome : this.addusuarios.value.nomeInput,
  //        email: this.addusuarios.value.emailInput,
  //        senha : this.addusuarios.value.senhaInput,
  //        tipo_usuario: 1,
  //        cep : this.addusuarios.value.cepInput,
  //        logradouro : this.addusuarios.value.logradouroInput,
  //        numero :this.addusuarios.value.numeroInput,
  //        complemento : this.addusuarios.value.complementoInput,
  //        cidade: this.addusuarios.value.cidadeInput,
  //        bairro: this.addusuarios.value.bairroInput,
  //        estado: this.addusuarios.value.estadoInput
  // };

  if(this.isEdicao == false)
  {
  this.usuarioService.createUsuario(this.usuario).subscribe
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
    this.usuarioService.updateUser(this.idUsuario, this.usuario).subscribe(
      (response : any) =>
    { 
      console.log(response);
      this.toastr.success('Usuário alterado com sucesso');
      this.router.navigate(['/usuarios']);
      
      
    },
    (erro) =>{ }
    );
  }

 
}

}
