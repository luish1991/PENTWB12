import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent, RegistroComponent,HomeComponent,VerUsuariosComponent,BuscarUsuarioComponent} from './app.component'

const rutas: Routes = [
    {path: '',redirectTo:'/index',pathMatch:'full'},
    {path: 'index',component: HomeComponent},
    {path: 'registrar',component:RegistroComponent},
    {path: 'verUsuarios',component:VerUsuariosComponent},
    {path: 'buscarUsuario',component:BuscarUsuarioComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(rutas)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}