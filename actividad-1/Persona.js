//Autor : Wilfer Orlando Acosta Rodriguez

// creao la clase padre Persona
export class Persona{
    //creo los atribtos con sus modificador de acceso.
    #nombre
    #edad
    #genero
    // creo un funtion statica.
    static esMayorDeEdad;
    // creo el constructor y paso los atributos como argumentos.
    constructor(nombre,edad,genero){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#genero = genero;
    }
    //creo el encapsulamiento de mis atributos con los metodos get y set
    setNombre(nombre){
        this.#nombre = nombre;
    }
    getNombre(){
        return this.#nombre;
    }
    setEdad(edad){
        this.#edad = edad;
    }
    getEdad(){
        return this.#edad;
    }
    setGenero(genero){
        this.#genero = genero;
    }
    getGenero(){
        return this.#genero;
    }
    //creo los metodos
    saludar(){
        return `Bienvenido ${this.#nombre}`;
    }
    esMayorDeEdad(){
        return this.#edad >= 18 ? true : false;
    }
}




