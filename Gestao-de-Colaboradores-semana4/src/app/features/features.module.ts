import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { ColorDirective } from './directives/color.directive';



@NgModule({
  declarations: [
    ColaboradoresComponent,
    ColorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ColaboradoresComponent
  ]
})
export class FeaturesModule { }
