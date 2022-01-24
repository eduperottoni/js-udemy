<h1>Operadores</h1>

Os operadores servem para, como o próprio nome diz, realizar operações entre variáveis.

Eles podem ser:
*Aritméticos
  * ``` + ``` (adição - ou concatenação em strings)
  * ``` - ``` (subtração)
  * ```/``` (divisão)
  * ```*``` (multiplicação)
  * ``` ** ``` (potenciação)
  * ``` % ``` (módulo, que é o resto da divisão inteira)

<h2>Precedêmcia de operadores</h2>
* ()
* * / %
* + -

<h2>Incremento</h2>
Operador pode ser inserido tanto antes quanto depois da variável (pré ou pós decremento)
* ```++```
* ```--```
Também pode-se incrementar com um número maior como passo e com as demais operações

* ``` *= ```
* ``` **= ```
* ``` /= ```
* ``` %= ```
* ``` += ```
* ``` -= ```
Que é o mesmo que fazer
var = var + x

## Comparation operators (relational operators)
These operators return a boolean value
* > 
* <
* <=
* >=
* !=
* !==
* ==
* ===

## Logic operators
The expression constructed with these operators also returns a boolen value
* ! (not)
* && (and)
* || (or)

## Short Circuit
This type of expression uses the && and || operators to define the flow of the program.

### How is the operation of these operators

#### && check operation
&& always stop when it finds a false value (and it returns this false value). If it doesn't find the false expression, it returns the last true expression.
#### || check operation
|| always stop when it find a true expression. In this case, it returns this true value. If it does not find a true expression, it returns the last false expression.

### The data types and this boolean values
Everything in JS can be evaluated as true and false
The values that evaluate as false, but aren't boolean are called <strong>FALSY VALUES</strong>

#### FALSY VALUES
* 0
* "" / '' / ``
* null
* undefined
* NaN

Others values returns true in case of comparation.

Examples with && operator
```
console.log('Luiz' && 'Maria') //Returns 'Maria'
console.log('Luiz' && '' && 'Maria') //Returns ''
```
Short-circuit can be used to improve the performance of the code
```
function falaOi(){
  console.log('Olá')
}
let vaiExecutar = false
vaiExecutar && falaOi() //Prints nothing on the screen
```
Examples with || operator
```
console.log(0 || false || null || 'Luiz Otávio' || true) //Returns 'Luiz Otávio', cause it is the first true value
```
```
let userColor = null
const defaultColor = 'black'
const systemColor = userColor || defaultColor
console.log(systemColor) //returns 'black', cause defaultColor is the first true value
```