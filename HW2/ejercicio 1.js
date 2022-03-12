// HOISTING BUSCA LAS PALABRAS RESERVADAS (VAR , LET , CONST Y FUNCION)
//EJERCICIO 1
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

//EJERCICIO 3 


var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);
```

```javascript
var instructor = "Tony";
console.log(instructor);
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
console.log(instructor);
```
```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
console.log(instructor);
console.log(pm);
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
7 / 0
{}[0]
parseInt("09")
5 && 2
2 && 5
5 || 0
0 || 5
[3]+[3]-[10]
3>2>1
[] == ![]
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

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

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);
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
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
```
