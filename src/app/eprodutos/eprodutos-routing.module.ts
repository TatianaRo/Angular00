

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EprodutosListComponent } from './eprodutos-list/eprodutos-list.component';
import { EprodutosFormComponent } from './eprodutos-form/eprodutos-form.component';
import { EprodutosSaleComponent } from './eprodutos-sale/eprodutos-sale.component';


const routes: Routes = [
  {path : 'cadastro', component : EprodutosFormComponent},
  {path : 'cadastro/:id', component : EprodutosFormComponent},
  {path : '', component : EprodutosListComponent},
  {path : 'vendas', component : EprodutosSaleComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EprodutosRoutingModule { }
