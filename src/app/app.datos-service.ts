import {Injectable} from '@angular/core';

@Injectable()
export class DatosService {
    queue = [];

    setQueue(lista){
        this.queue = lista;
    }

    getQueue(){
        return this.queue;
    }
}