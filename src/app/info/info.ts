export class Info{
    placa: string;
    modelo: string;
    color_vehiculo: string;
    marca: string;
    id: number;
    color_vehiculo_nombre: string;

    public constructor(id:number, placa:string, modelo:string, color_vehiculo:string, marca:string, color_vehiculo_nombre:string){
        this.id = id;
        this.placa = placa;
        this.modelo = modelo;
        this.color_vehiculo = color_vehiculo;
        this.marca = marca;
        this.color_vehiculo_nombre = color_vehiculo_nombre;
    }
}
//CAMBIAR ATRIBUTOS
