const object = {
  nome:'Eduardo',
  sobrenome:'Perottoni',
  idade:20,
}

console.log(object.sobrenome)

const criaPessoa = (nome, sobrenome, idade) => {
  return {nome,sobrenome,idade} //the same as nome:nome, sobrenome:sobrenome,idade:idade
}

const pessoa1 = criaPessoa('Eduardo','Perottoni',25)
console.log(pessoa1.idade)

const pessoa5 = {
  nome:'Jussara',
  sobrenome:'Oliveira',
  idade:45,
  fala(){
    console.log(`Olá, mundo! Me chamo ${this.nome} e tenho ${this.idade} anos.`)
  },
  incrementsAge(){
    ++this.idade
  }
}
pessoa5.fala()
pessoa5.incrementsAge()
pessoa5.fala()
pessoa5.incrementsAge()
pessoa5.fala()
pessoa5.incrementsAge()
pessoa5.fala()
pessoa5.incrementsAge()
pessoa5.fala()
