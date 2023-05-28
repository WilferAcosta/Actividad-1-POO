export class Estudiante extends Persona{
    #carrera
    constructor(nombre,edad,genero,carrera){
        //uso del super para heredar sus atributos de la clase padre
        super(nombre,edad,genero);
        this.#carrera = carrera;
    }
    setCarrera(carrera){
        this.#carrera = carrera;
    }
    getCarrera(){
        return this.#carrera;
    }
    estudiar(){
        return `Esta estudiando la carrera ${this.#carrera}`;
    }
}