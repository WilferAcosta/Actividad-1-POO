class Empleado{
    #nombre
    #edad
    #sueldo
    constructor({nombre,edad,sueldo}){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#sueldo = sueldo;
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
    set setSueldo(sueldo){
        this.#sueldo = sueldo;
    }
    get getSueldo(){
        return this.#sueldo;
    }
    calcularSalarioAnual(){
        return this.#sueldo * 12;
    }
}

// let empleado1 = new Empleado({nombre:"wilfer", edad:28, sueldo:1160000});
// console.log(empleado1);
// console.log(empleado1.calcularSalarioAnual());
class Gerente extends Empleado{
    #departamento
    constructor({nombre,edad,sueldo,departamento}){
        super({nombre,edad,sueldo});
        this.#departamento = departamento;
    }
    set setDepartamento(departamento){
        this.#departamento = departamento;
    }
    get getDepartamento(){
        return this.#departamento;
    }
    calcularSalarioAnual(){
        return ((this.getSueldo * 0.1) + this.getSueldo) * 12;
    }
}
let generente1 = new Gerente({nombre:"wilfer",edad:28,sueldo:1000,departamento:"santander"});
console.log(generente1);
console.log(generente1.calcularSalarioAnual());