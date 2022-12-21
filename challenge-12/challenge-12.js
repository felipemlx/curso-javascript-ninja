(function(){
  /*
  Envolva todo o conteúdo desse arquivo em uma IIFE.
  */

  /*
  Crie um objeto chamado `person`, com as propriedades:
      `name`: String
      `lastname`: String
      `age`: Number
  Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
  de valor para cada propriedade.
  */
  // ?
  console.log( 'Propriedades de "person":' );
  var person = {
    name: 'Felipe',
    lastName: 'Martins',
    age: '23'
  };
  

  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  var array = Object.keys(person);
  console.log(array);

  /*
  Crie um array vazio chamado `books`.
  */
  var books = [];

  /*
  Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
  seguintes propriedades:
  `name`: String
  `pages`: Number
  */
  console.log( '\nLista de livros:' );
  var livro1 = {
    name: 'A',
    pages: 3
  };
  var livro2 = {
      name: 'B',
      pages: 4
  };
  var livro3 = {
      name: 'C',
      pages: 5
  };
  books.push(livro1,livro2,livro3);
  /*
  Mostre no console todos os livros.
  */
  for (i=0;i < books.length; i++){

    console.log(books[i]);
  }

  console.log( '\nLivro que está sendo removido:' );
  /*
  Remova o último livro, e mostre-o no console.
  */
  var last = books.pop();
  console.log(last);

  console.log( '\nAgora sobraram somente os livros:' );
  /*
  Mostre no console os livros restantes.
  */
  for (i=0;i < books.length; i++){

    console.log(books[i]);
  }

  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  // ?
  console.log( '\nLivros em formato string:' );
  var string = JSON.stringify(books);
  

  /*
  Mostre os livros nesse formato no console:
  */
  console.log(string);
  
  /*
  Converta os livros novamente para objeto.
  */
  // ?
  console.log( '\nAgora os livros são objetos novamente:' );
  JSON.parse(string);
  console.log(string);
  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
  for (i = 0; i < books.length; i++){
    for (var x in books[i]){
        console.log(x + ':' + books[i][x]);
    }
  }

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  var myName = ['F','e','l','i','p','e','m','a','r','t','i','n','s'];
  console.log( '\nMeu nome é:' );

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  console.log(myName.join(''));

  console.log( '\nMeu nome invertido é:' );

  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  console.log(myName.reverse());

  console.log( '\nAgora em ordem alfabética:' );
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log(myName.sort());
})();
