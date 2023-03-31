import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAreaComponent } from './components/add-area/add-area.component';
import { AddComponent } from './components/add/add.component';
import { EditarAreaComponent } from './components/editar-area/editar-area.component';
import { EditarComponent } from './components/editar/editar.component';
import { ListarAreaComponent } from './components/listar-area/listar-area.component';
import { ListarComponent } from './components/listar/listar.component';

const routes: Routes = [
  {path:'listar',component:ListarComponent},
  {path:'add',component:AddComponent},
  {path:'edit',component:EditarComponent},
  {path:'listar_ar',component:ListarAreaComponent},
  {path:'add_ar',component:AddAreaComponent},
  {path:'edit_ar',component:EditarAreaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
