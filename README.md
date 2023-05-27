# Actividad-1-POO
ACTIVIDAD #1 DE P.O.O
Crea una clase llamada Persona que tenga las siguientes
propiedades:nombre,edad, sexoyunmétodollamadosaludar
que imprima en la consola un saludo con el nombre de la
persona.

Crea una instancia de la clase Persona llamada persona1 y
asigna valores a sus propiedades. Luego, llama al método
saludar()paraquelapersonaimprimasusaludo.

Crea una clase llamada Estudiante que herede de la clase
Persona. Agrega una nueva propiedad llamada carrera y un
método llamado estudiar que imprima en la consola un
mensajeindicandolacarreraqueestáestudiando.

Crea una instancia de la clase Estudiantellamada estudiante1 y
asigna valores a sus propiedades. Luego, llama al método
saludar() para que el estudiante imprima su saludo y al método
estudiar() para que el estudiante imprima el mensaje de su
carrera.
Agrega un método estático a la clase Persona llamado
esMayorDeEdad que reciba la edad de una persona como
parámetro y retorne true si la persona es mayor de edad (18
añosomás),ofalseencasocontrario.

Llama al método estático esMayorDeEdad() pasando la edad de
lapersona1ymuestrael resultadoenlaconsola
Crea una clase llamada Animal con las siguientes propiedades:
nombre y edad. La clase debe tener un método llamado
hacerSonidoqueimprimaenlaconsolael sonidodelanimal.

Crea una instancia de la clase Animal llamada animal1 y asigna
valores a sus propiedades. Luego, llama al método
hacerSonido()paraqueelanimalimprimasusonido.

Crea una clase llamada Perro que herede de la clase Animal.
Agregaunanuevapropiedadllamadarazayunmétodollamado
moverCola que imprima en la consola un mensaje indicando
queelperroestámoviendolacola.

Crea una clase llamada Figura con las siguientes propiedades:
color y area. La clase debe tener un método llamado
calcularArea()queretorneeláreadelafigura.

Crea una instancia de la clase Figura llamada figura1 y asigna
valores a sus propiedades. Luego, llama al método
calcularArea()ymuestrael resultadoenelHTML.

Crea una clase llamada Circulo que herede de la clase Figura.
Agrega una nueva propiedad llamada radio y redefine el
métodocalcularArea()paraquecalculeeláreadelcírculo.

Crea una instancia de la clase Circulo llamada circulo1 y asigna
valores a sus propiedades. Luego, llama al método
calcularArea()ymuestrael resultadoenelHTML.
Crea una clase llamada Rectangulo que herede de la clase
Figura. Agrega nuevas propiedades llamadas largo y ancho y
redefine el método calcularArea() para que calcule el área del
rectángulo.

CreaunainstanciadelaclaseRectangulollamadarectangulo1y
asigna valores a sus propiedades. Luego, llama al método
calcularArea()ymuestrael resultadoenelHTML.
Creauna clasellamadaVehiculoconlas siguientespropiedades:
marca, modelo y velocidad. La clase debe tener un método
llamado acelerar() que incremente la velocidad del vehículo en
10unidades.

Crea una instancia de la clase Vehiculo llamada vehiculo1 y
asigna valores a sus propiedades. Luego, llama al método
acelerar() y muestra la velocidad actual en el HTML.
Crea una clase llamada Coche que herede de la claseVehiculo.
Agrega una nueva propiedad llamada combustible y redefineel
método acelerar() para que incremente la velocidad del coche
en20unidades.
Crea una instancia de la clase Coche llamada coche1 y asigna
valores a sus propiedades. Luego, llama al método acelerar() y
muestralavelocidadactualenelHTML.

Agrega un método estático a la clase Vehiculo llamado
convertirKmHEnMph() que reciba una velocidad en kilómetros
por hora y retorne la velocidad equivalente en millas por hora.
Para ello, divide la velocidad en kilómetros por hora entre
1.60934.

Llama al método estático convertirKmHEnMph() pasando una
velocidad en kilómetros por hora y muestra el resultado en el
HTML.

Crea una clase llamada Empleado con las siguientes
propiedades: nombre, edad y sueldo. La clase debe tener un
método llamado calcularSalarioAnual() que retorne el salario
anualdelempleadomultiplicandoel sueldomensualpor12.

Crea una instancia de la clase Empleado llamada empleado1 y
asigna valores a sus propiedades. Luego, llama al método
calcularSalarioAnual()ymuestrael resultadoenelHTML.

Crea una clase llamada Gerente que herede de la clase
Empleado.Agregaunanuevapropiedadllamadadepartamento
y redefine el método calcularSalarioAnual() para que calcule el
salario anual del gerente sumando un bono del 10% al salario
mensualantesdemultiplicarlopor12.

Crea una instancia de la clase Gerente llamada gerente1 y
asigna valores a sus propiedades. Luego, llama al método
calcularSalarioAnual()ymuestrael resultadoenelHTML.

Agrega un método estático a la clase Empleado llamado
generarIdEmpleado() que retorne un ID único para cada
empleado. Puedes utilizar una variable estática para ir
incrementando el ID cada vez que se cree una instancia de
Empleado.

Llama al método estático generarIdEmpleado() y muestra el
resultadoenlaconsola.