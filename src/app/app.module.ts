import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule }     from './app-routing.module';
import { FormsModule }    from '@angular/forms';
import { AppComponent,RegistroComponent,HomeComponent,VerUsuariosComponent,BuscarUsuarioComponent } from './app.component';
import { BusquedaUsuarioFiltro} from './app.filtro-buscar'
import { DatosService } from './app.datos-service';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    VerUsuariosComponent,
    BuscarUsuarioComponent,
    BusquedaUsuarioFiltro
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
