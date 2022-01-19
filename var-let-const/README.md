<h1>var, let e const</h1>
<h2>O que são variáveis? Por que utilizá-las?</h2>

<h2>var vs let</h2>
var é mais antigo
let não precisa de atribuição na declaração
var pode ser redeclarado
let não pode ser redeclarado
const não pode ser redeclarada
const não pode ser reinicializada

<h2>Consts</h2>
Usadas para valores constantes

<h2>Consts com valores mutáveis</h2>
Consts não podem ter seu valor alterado quando o mesmo representa um tipo imutável. Ou seja, quando a essa variável definida como constante for atribuído um valor dos tipos number, string, boolean, undefined, null, symbo, ou bigint (todos os tipos primitivos são imutáveis).
const nome = 'luiz';
nome = 'joão'; // Erro: Assignment to constant variable.

Agora, quando se declara um tipo de dado mutável (object, array) utilizando const, a variável continua sendo constante, porém os dados de tipos imutáveis que estão dentro do objeto podem ser alterados. Isso ocorre pois quando alteramos algum valor primitivo dentro de uma estrutura mutável, ela continua apontando para o mesmo local da memória, apenas alterando um valor primitivo dentro do objeto.

Isso pode:

const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array); // [ 1024, 2, 3, 4 ]
 
Isso NÃO pode:

const array = [1, 2, 3, 4, 5];
array = 'Legal'; // Assignment to constant variable.

<h2>Regras para nomes de variáveis e constantes</h2>
<ul>
  <li>Não podem ser palavras reservadas</li>  
  <li>Não pode começar com números</li>  
  <li>Não podem conter espaços ou caracteres especiais (exceto o underscore _)</li>

  <li>Padrões de nomenclatura:
    <ul>
      <li>camelCase</li>
      <li>snake case</li>
      <li></li>
    </ul>
  </li>

  <li>Devem ser nomes significativos</li>  
</ul>