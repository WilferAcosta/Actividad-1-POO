export class Persona{
    #nombre
    #edad
    #genero
    constructor(nombre,edad,genero){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#genero = genero;
    }
    set setNombre(nombre){
        this.#nombre = nombre;
    }
    get getNombre(){
        return this.#nombre;
    }
    set setEdad(edad){
        this.#edad = edad;
    }
    get getEdad(){
        return this.#edad;
    }
    set setGenero(genero){
        this.#genero = genero;
    }
    get getGenero(){
        return this.#genero;
    }
    saludar(){
        return `Bienvenido ${this.#nombre}`;
    }
    static esMayorDeEdad(edad){
        return edad >= 18 ? true : false;
    }
}




