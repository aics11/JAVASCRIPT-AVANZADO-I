//EJERCICIO 5
var instructor = "Tony"; // variable global  = tony
let pm = "Franco"; // variable pm scout = Franco
if (true) {   // verdadero entonces
    var instructor = "The Flash"; //cambia la variable global instructor de tony a "The Flash"
    let pm = "Reverse Flash"; // la variable pm es "Reverse Flash" dentro del if
    console.log(instructor); // devuelve the flash
    console.log(pm); // devuelve Reverse Flash
}
console.log(instructor); // The Flash
console.log(pm); // Franco