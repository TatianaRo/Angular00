import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

    emailModel;
    senhaModel;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(meuForm){
    console.log(meuForm);
  }
  isError(campo){
   return (campo.valid == false && campo.touched == true)
    }

  isSuccess(campo){
      return (campo.valid == true && campo.touched == true)
    }  

}
