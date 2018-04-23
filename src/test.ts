import { BusquedaUsuarioFiltro } from "./app/app.filtro-buscar";
import { DatosService } from "./app/app.datos-service";

describe("Mi Test",()=>{
    it("1 es 1",()=>{
        expect(1).toBe(1);
    });

    it("Crear filtro",()=>{
        const pipe = new BusquedaUsuarioFiltro();
        expect(pipe).toBeTruthy();
    })

    it("Probar filtro",()=>{
        const pipe = new BusquedaUsuarioFiltro();
        var arr = [{nombre:"Luis"},{nombre:"Vanesa"}];
        var res=[{nombre:"Luis"}];
        var busqueda = "Luis";
        expect(pipe.transform(arr,busqueda)).toEqual(res);
    })

    it("Probar servicio",()=>{
        var servicio = new DatosService();
        expect(servicio).toBeTruthy();
        var arr = [{nombre:"Luis"},{nombre:"Vanesa"}];
        servicio.setQueue(arr);
        expect(servicio.getQueue()).toEqual(arr);
    })

});