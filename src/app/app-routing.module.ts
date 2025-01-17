import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [
  {path:"inicio", component: InicioComponent},
  {path:"nosotros", component: NosotrosComponent},
  {path:"contacto", component: ContactoComponent},
  {path: 'mensajes',
    loadChildren: ()=> import('./pages/mensajes/mensajes.module').then(m=> m.MensajesModule)
  },
  {path: 'ofertas',
    loadChildren: ()=> import('./pages/ofertas/ofertas.module').then(m=> m.OfertasModule)
  },
  {path:"usuarios", component: UsuariosComponent},
  {path:"**", redirectTo: "inicio"},

];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
