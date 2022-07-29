import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosDetalhesComponent } from './pages/produtos-detalhes/produtos-detalhes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from '../login/pages/login/login.component';

@NgModule({
  declarations: [ProdutosDetalhesComponent],
  imports: [CommonModule, SharedModule],
  exports: [ProdutosDetalhesComponent],
})
export class DetalhesModule {}
