import { Persona } from "./persona.js";
export class Estudiante extends Persona{
    #carrera
    constructor(nombre,edad,genero,carrera){
        //uso del super para heredar sus atributos de la clase padre
        super(nombre,edad,genero);
        this.#carrera = carrera;
    }
    set setCarrera(carrera){
        this.#carrera = carrera;
    }
    get getCarrera(){
        return this.#carrera;
    }
    estudiar(){
        return `Esta estudiando la carrera ${this.#carrera}`;
    }
}