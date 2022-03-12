
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
// HOISTING BUSCA LAS PALABRAS RESERVADAS (VAR , LET , CONST Y FUNCION)

x = 1; // x vale 1
var a = 5; // reserva la variable a toma el valor 5 
var b = 10; // reserva la variable b toma el valor 5
var c = function(a, b, c) { //reserva la variable c y toma el valor de la funcion a,b,c
  var x = 10; // reserva la variable x y toma el valor 10
  console.log(x); // vale 10
  console.log(a); // vale 8
  var f = function(a, b, c) { // reserva la variable f y toma la funcion de la funcion a,b,c
    b = a; // b es igual 8 
    console.log(b);  // 8
    b = c; // b = 10
    var x = 5; // 
  }
  f(a,b,c);  // llama a la funcion 8 , 9 , 10
  console.log(b); // 9
}
c(8,9,10); //  le da valor a,b y c
console.log(b); // tira el valor 10
console.log(x); // tira el valor 1


```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // = 2
"2" * "3" // = 6
4 + 5 + "px" // = 9px
"$" + 4 + 5 // = $45
"4" - 2 // = 2 
"4px" - 2 // = NaN, porque no puedo desconcatenar
7 / 0 = // infinito, por que? ni idea xD
{}[0] // no entendi, pero retorna 0 o undefined
parseInt("09") // Retorna 9, pero no entiendo porque 
5 && 2 // = 2
2 && 5 // = 5
5 || 0 // = 5
0 || 5 // = 5
[3]+[3]-[10] // = [3]+[3] lo toma como una concatenacion de caracteres y da 33 - 10 = 23
3>2>1 // = false
[] == ![] // = true, pero no lo entiendo
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // undefined, esta declarada, pero definida
   console.log(foo()); // porque la ejecucion de fu retorna 2 y por eso muestra 2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) { // supuesta variable food
    if (food) { // porque food es false por getFood salta al retornar
        var snack = 'Friskies'; 
        return snack;
    }
    return snack; //  no  entra al if y al tener su propio contexto de ejecucion no busca la variable fuera del scout porque si esta definido y aparte al tener un return finaliza la ejecucion sin tomar el if porque es false
}

getFood(false); //getFood es undefined
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname; // el this hace  referencia al fullname del objeto propio 
      }
   }
};

console.log(obj.prop.getFullname()); // muestra aurelio porque esta haciendo uso del this y dentro del obj pro,estoy llamando la funcion

var test = obj.prop.getFullname;

console.log(test()); // undefined, porque esta siendo llamada fuera del conexto propio, entonces no esta definida y esta vacia

// las funciones cunado usan el this, van a estar ligadas al conexto global, aun conexto, pero es al contexto, donde esta siendo llamada
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() { // orden 1, 4, 3 ,2
   console.log(1); // 
   setTimeout(function() { console.log(2); }, 1000); //
   setTimeout(function() { console.log(3); }, 0); // 
   console.log(4); //
}

printing();
```
