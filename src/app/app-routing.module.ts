import { AddComponent } from './Usuario/add/add.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Usuario/listar/listar.component';
import { DescargarComponent } from './Usuario/descargar/descargar.component';

const routes: Routes = [
  {path: 'listar', component:ListarComponent},
  {path: 'add', component:AddComponent},
  {path: 'descargar', component:DescargarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
