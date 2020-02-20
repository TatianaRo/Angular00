import { CicloComponent } from './ciclo/ciclo.component';

import { UsuarioFormComponent } from './usuario-form/usuario-form.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';
import { DataFormComponent } from './data-form/data-form.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';


const routes: Routes = [
  {path : '', component : UsuarioListComponent},
  {path : 'new', component : UsuarioFormComponent},
  {path : 'edit/:id', component : UsuarioFormComponent},
  {path : 'template-form', component : TemplateFormComponent},
  {path : 'data-form', component : DataFormComponent},
  {path : 'ciclo', component : CicloComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
