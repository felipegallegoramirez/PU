import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioDeSesionComponent } from './inicio-de-sesion/inicio-de-sesion.component';

const routes: Routes = [
 { path: "inicio-de-sesion", component: InicioDeSesionComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
