/*
Crie uma IIFE que envolva todo o código desse arquivo. Faça também a
indentação correta do código, para ficar dentro da IIFE.
*/

/*
Analise as funções abaixo (`myFunction`, `myFunction2` e `myFunction3`, e
ajuste o posicionamento das variáveis e funções internas, para que os códigos
dentro de `console.log` que estão retornando `undefined` retornem o valor
correto da variável ou função chamada.
*/
(function(){
    function myFunction() {
    var number1 = 10;
    var number2 = 20;
    console.log( 'Na função `myFunction`, o primeiro número é', number1 );
    console.log( 'Na função `myFunction`, o segundo número é', number2 );
    return number1 + number2;
  }
  myFunction();

  function myFunction2() {
    var number1 = 10;
    var number2 = 20;  
    var sum = function sum() {
      console.log( 'A soma de 10 e 20 é igual a', sum ? sum() : undefined );
      return number1 + number2;
    };
    return sum();
  }
  myFunction2();

  function myFunction3() {
    var number2 = 50;
    var number1 = 40;
    function sum() {
      console.log( 'A soma de 40 e 50 é igual a', sum() );
      console.log( 'Na função myFunction3, number1 é igual a', number1 );
      return number1 + number2;
    };
      return sum();
  }
  myFunction3();

  /*
  No desafio anterior criamos uma calculadora, usando uma estrutura funcional.
  Agora vamos criar uma outra calculadora, usando uma outra abordagem :D
  - Crie uma função `calculator` que recebe dois valores (números)
  por parâmetro.
  - Essa função deve retornar uma outra função, que recebe um parâmetro
  chamado `callback`.
  - Esse `callback` será uma função, que passaremos por parâmetro ao invocar
  o retorno de `calculator`.
  - O retorno dessa segunda função deve ser a função de `callback` passada
  por parâmetro, INVOCADA, e passando a ela por parâmetro os dois valores
  que foram passadas para a primeira função `calculator`.
  */
  function calculator (x,y){
    return function(callback){
      return callback(x,y);
    }
  }

  /*
  Declare uma variável chamada `sum`, e atribua a ela a função `calculator`,
  passando dois números por parâmetro.
  */
  var sum = calculator(10,20);

  /*
  Sabemos que `sum` agora tem uma função atribuída a ela, que é o retorno de
  `calculator`. E essa função espera um parâmetro `callback`. O `callback`
  tem dois parãmetros disponíveis, que são os números que você acabou de passar
  para a chamada à `calculator` acima.
  - Mostre no console o retorno da invocação de `sum`, passando por parâmetro
  uma função anônima que irá retornar a soma dos dois números que essa função
  anônima tem como seus argumentos.
  */
  console.log( 'O resultado da soma é:' );
  console.log(sum(function(x,y){return x + y;}));

  /*
  Agora declare outra variáveis chamadas `subtraction`, `multiplication`,
  `division` e `mod`, e atribua à elas `calculator`, passando números
  diferentes para cada chamada.
  */
  var subtraction = calculator(25,20);
  var multiplication = calculator(5,1);
  var division = calculator(10,2);
  var mod = calculator (6,2);

  /*
  Mostre as variáveis acima no `console` (uma chamada de console por variável),
  criando a função de `callback` que faz o cálculo para subração, multiplicação,
  divisão e módulo (resto de divisão), conforme a função utilizada.
  As suas respostas devem estar abaixo dos `console.log` referentes à cada
  chamada.
  */
  console.log( 'O resultado da subtração é:' );
  console.log(subtraction(function(x,y){return x - y;}));

  console.log( 'O resultado da multiplicação é:' );
  console.log(multiplication(function(x,y){return x * y;}));

  console.log( 'O resultado da divisão é:' );
  console.log(division(function(x,y){return x / y;}));

  console.log( 'O resto da divisão é:' );
  console.log(mod(function(x,y){return x % y;}));

})();
