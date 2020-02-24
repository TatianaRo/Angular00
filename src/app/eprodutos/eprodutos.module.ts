import { EprodutosRoutingModule } from './eprodutos-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EprodutosFormComponent } from './eprodutos-form/eprodutos-form.component';
import { EprodutosListComponent } from './eprodutos-list/eprodutos-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EprodutosSaleComponent } from './eprodutos-sale/eprodutos-sale.component';



@NgModule({
  declarations: [EprodutosFormComponent, EprodutosListComponent, EprodutosSaleComponent],
  imports: [
    CommonModule,
    EprodutosRoutingModule,
    FormsModule,
    ReactiveFormsModule
    //BrowserModule

    
  ],
  exports : [EprodutosFormComponent]
})
export class EprodutosModule { }
