import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductsListComponent, HomeComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [HomeComponent],
})
export class HomeModule {}
