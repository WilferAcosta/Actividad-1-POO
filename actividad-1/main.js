import { Persona } from "./persona.js";
import { Estudiante } from "./estudiante";

const boton = document.querySelector('#sumit');
boton.addEventListener('click', e =>{
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let genero = document.getElementById("genero").value;
    let carrera = document.getElementById("carrera").value;
    let estudiante1 = new Estudiante(nombre,edad,genero,carrera);
    localStorage.setItem('estudiante', JSON.stringify(estudiante1));
    let estudianteGuardado = localStorage.getItem('estudiante');
    if (estudianteGuardado) {
        let estudianteRecuperado = JSON.parse(estudianteGuardado);
        document.getElementById("nombre").value = estudianteRecuperado.getNombre();
        document.getElementById("edad").value = estudianteRecuperado.getEdad();
        document.getElementById("genero").value = estudianteRecuperado.getGenero();
        document.getElementById("carrera").value = estudianteRecuperado.getCarrera();
    }
    alert("El estudiante es mayor de edad :  "+Persona.esMayorDeEdad(estudiante1.getEdad));
    alert(estudiante1.saludar());
    alert(estudiante1.estudiar());
});