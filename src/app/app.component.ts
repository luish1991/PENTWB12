import { Component,OnInit } from '@angular/core';
import { DatosService } from './app.datos-service';
import {Router} from '@angular/router'

const usuariosBD = [
     {nombre:'Luis Ponce',edad:'25',correo:'luis.ponce@softtek.com'},
     {nombre:'Ana Morales',edad:'28',correo:'anam.morales@softtek.com'},
     {nombre:'Ramon Lopez',edad:'27',correo:'ramonl.lopez@softtek.com'},
     {nombre:'Viridiana Hernandez',edad:'26',correo:'viridiana.hernandez@softtek.com'}
];

//Definicion de HomeComponent
@Component({
    selector: 'app-home',
    template: ``
})

export class HomeComponent{
    constructor(){}
}
//Definicion de RegistroComponent
@Component({
    selector: 'app-registro',
    templateUrl: './formRegistro.html',
    styleUrls: ['./styles.css']
})

export class RegistroComponent implements OnInit{

    nombre:string = "";
    edad=0;
    correo="";

    constructor(private datosService: DatosService, private router: Router){}

    ngOnInit(){}

    registrar(){
        let user = {nombre:this.nombre,edad:this.edad,correo:this.correo};
        this.datosService.getQueue().push(user);
        alert("El usuario ha sido registrado");
        this.router.navigate(['index']);
    }
}
//Definicion de VerUsuariosComponent
@Component({
    selector: 'app-ver-usuarios',
    templateUrl: './verUsuarios.html'
})

export class VerUsuariosComponent implements OnInit{

    usuarios = [];

    constructor(private datosService: DatosService){}
    ngOnInit(){
        let aux = usuariosBD.slice(0,usuariosBD.length);
        let queue = this.datosService.getQueue();
        if(queue.length>0){
            for(let i=0;i<queue.length;i++){
                aux.push(queue[i]);
            }
        }
        this.usuarios = aux;
    }
}
//Definicion de BuscarUsuarioComponent
@Component({
    selector: 'app-buscar-usuario',
    templateUrl: './buscarUsuario.html'
})

export class BuscarUsuarioComponent implements OnInit{

    usuarios = [];

    constructor(private datosService: DatosService){}

    ngOnInit(){
        let aux = usuariosBD.slice(0,usuariosBD.length);
        let queue = this.datosService.getQueue();
        if(queue.length>0){
            for(let i=0;i<queue.length;i++){
                aux.push(queue[i]);
            }
        }
        this.usuarios=aux;
    }
}

//Definicion de AppComponent
@Component({
    selector: 'app-root',
    templateUrl: './home.html',
    styleUrls: ['./styles.css']
})

export class AppComponent implements OnInit{
    constructor(){}

    ngOnInit(){}
}