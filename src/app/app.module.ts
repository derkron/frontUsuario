import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './components/add/add.component';
import { EditarComponent } from './components/editar/editar.component';
import { ListarComponent } from './components/listar/listar.component';
import { ServiceService } from './Service/service.service';
import { AddAreaComponent } from './components/add-area/add-area.component';
import { EditarAreaComponent } from './components/editar-area/editar-area.component';
import { ListarAreaComponent } from './components/listar-area/listar-area.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditarComponent,
    ListarComponent,
    AddAreaComponent,
    EditarAreaComponent,
    ListarAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
