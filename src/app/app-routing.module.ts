import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AuthGuardService } from './shared/guards/auth-guard.service';



const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'home', component : HomeComponent},
  {path : 'login', component : LoginComponent},
  {path : 'usuarios',
    loadChildren : () => import('./usuario/usuario.module')
      .then(m => m.UsuarioModule)},
 {path : 'produtos',
    loadChildren : () => import('./eprodutos/eprodutos.module')
      .then(m => m.EprodutosModule)},
  {path : 'admin',
      loadChildren : () => import('./admin/admin.module')
       .then(m => m.AdminModule),
      canActivate : [AuthGuardService]  } //chama o serviço que diz se pode acessar a rota ou não

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
