
import { HomeComponent } from './home/home.component';
import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'home', component : HomeComponent},
  {path : 'usuarios',
    loadChildren : () => import('./usuario/usuario.module')
      .then(m => m.UsuarioModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
