*String
*Number
  *integer
  *float
*undefined
*null
*boolean
*symbol

null vs. undefined
undefined indica o não apontamento para algum local da memória
já o null aponta para um local específico e que foi definido que este local não possui valor algum

Com dados primitivos, não se pode trabalhar com apontamentos para o mesmo espaço de memória. Isso só ocorre com os dados por referência (array, object,...)
)

Tipos de dados

* Primitivos (imutáveis)
  * string
  * number
  * boolean
  * undefined
  * null
  * bigint
  * symbol

* Por referência (mutáveis)
  * Objects
  * Array
  * Function

let nome = 'Eduardo'
nome[0] = 'L'
console.log(nome[0]) //Returns 'E'

How to copy an array (spread operator)
