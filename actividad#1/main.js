import { Persona } from "./Persona";
import { Estudiante } from "./Estudiante";


const boton = document.querySelector('#sumit');
boton.addEventListener('click', e =>{
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let genero = document.getElementById("genero").value;
    let carrera = document.getElementById("carrera").value;
    estudiante1 = new Estudiante(nombre,edad,genero,carrera);
    alert("El estudiante es mayor de edad :  "+estudiante1.esMayorDeEdad());
    alert(estudiante1.saludar());
    alert(estudiante1.estudiar());
});