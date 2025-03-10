const nombre = prompt("¿Cuál es tu nombre?");
const edad = prompt("¿Cuántos años tienes?");
const lenguajeDeProgramacion = prompt("¿Qué lenguaje de programación estás estudiando?");

alert(Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguajeDeProgramacion});

const respuesta = prompt(¿Te gusta estudiar ${lenguajeDeProgramacion}? Responde con el número 1 para SÍ o 2 para NO);

if (respuesta == 1) {
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else if (respuesta == 2) {
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
}