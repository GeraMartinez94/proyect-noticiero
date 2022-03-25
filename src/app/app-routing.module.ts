import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { CableComponent } from './components/cable/cable.component';
import { InternetComponent } from './components/internet/internet.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { RadioComponent } from './components/radio/radio.component';
const routes: Routes = [
   {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }, 
   {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  }, 
  {
    path: 'internet',
    component: InternetComponent
  },

  {
    path: 'cable',
    component: CableComponent
  },
  {
    path: 'ofertas',
    component: OfertasComponent
  },
  {
    path: 'radio',
    component: RadioComponent
  },
 
  { path:'**', redirectTo:'inicio', pathMatch:'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
