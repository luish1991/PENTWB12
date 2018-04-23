import { Pipe, PipeTransform } from '@angular/core';

// let usuario of usuarios | BusquedaUsuario: busqueda
@Pipe({name:'BusquedaUsuario'})
export class BusquedaUsuarioFiltro implements PipeTransform{
    transform(usuarios,busqueda){
        let filtro = [];
        if(!busqueda){
            return usuarios;
        }
        for(let usuario of usuarios){
            if(usuario.nombre.toLowerCase().indexOf(busqueda.toLowerCase())!=-1){
                filtro.push(usuario);
            }
        }
        return filtro;
    }
}