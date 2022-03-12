//ejercicio 2
```
```javascript
console.log(bar); //undefined
console.log(baz); //error de sintaxis, hizo hoisting y no tiene idea de que existe, aqui termina la ejecucio porque se rompio
foo();
function foo() { console.log('Hola!'); } // sabe que existe y se imprime 
var bar = 1; // esta declara, pero no definida
baz = 2; // no estaba declarada ni definida
```

```javascript
