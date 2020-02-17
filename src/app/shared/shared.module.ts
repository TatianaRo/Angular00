import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowErrosComponent } from './messages/show-erros/show-erros.component';
import { DebugCampoComponent } from './messages/debug-campo/debug-campo.component';
import { DebugFormComponent } from './messages/debug-form/debug-form.component';





@NgModule({
  declarations: [
    ShowErrosComponent,
    DebugCampoComponent,
    DebugFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ShowErrosComponent,
    DebugCampoComponent,
    DebugFormComponent
  ]

})
export class SharedModule { }
