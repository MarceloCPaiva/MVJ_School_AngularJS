import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';


@NgModule({ // Decorator que passa os meta-dados
  declarations: [
    AppComponent, // Declara os componentes que fazem parte(compõe) desse módulo
  ],
  imports: [ // Importa funcionalidades de outros Módulos
    BrowserModule,
    FeaturesModule,
    SharedModule // Módulo do Angular ultilizado para visualizar no navegador
  ],
  providers: [], // Para colocar configurações padrões de serviço
  bootstrap: [AppComponent] // Será o primeiro componente carregado da aplicação
})
export class AppModule { }
