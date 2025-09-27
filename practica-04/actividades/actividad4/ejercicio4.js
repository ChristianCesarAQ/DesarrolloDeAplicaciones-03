//inicializadores de objetos
const persona1 = {
  nombre: "Juan",
  edad: 30,
  ocupacion: "Programador",
};

//Constructores
function Persona(nombre, edad, ocupacion) {
  this.nombre = nombre;
  this.edad = edad;
  this.ocupacion = ocupacion;
}

const persona2 = new Persona("Carl", 25, "Arquitecto");

//Object.create()
const personaBase = {
  nombre: "Desconocido",
  edad: 0,
  ocupacion: "Desempleado",
};

const persona3 = Object.create(personaBase);
persona3.nombre = "María";
persona3.edad = 35;
persona3.ocupacion = "Gerente";

//Imprimir objetos creados
console.log(persona1);
console.log(persona2);
console.log(persona3);
