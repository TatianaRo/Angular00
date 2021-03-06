import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  
  meuForm : FormGroup;

  constructor(private formBuilder : FormBuilder) {
    this.meuForm = this.formBuilder.group(
      {
        emailInput : ['',[Validators.required, Validators.email]],
        senhaInput : ['',[ Validators.required ]]
      }
    );
   }

   onSubmit(){
     console.log(this.meuForm);
   }

   getCampo(value){
     //meuForm.controls.emailInput
     return this.meuForm.get(value);
    }
   
   isError(value){
     let meuCampo= this.getCampo(value);
     return (meuCampo.valid == false && meuCampo.touched == true);
     //opcional: return (!meuCampo.valid && meuCampo.touched);

        
   }

   isSuccess(value){
    let meuCampo= this.getCampo(value);
    return (meuCampo.valid == true && meuCampo.touched == true)
  }  

  ngOnInit(): void {
  }

}
