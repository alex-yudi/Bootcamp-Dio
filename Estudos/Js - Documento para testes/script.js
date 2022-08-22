/*function comparadorDeNumeros(num1, num2) {
    let frase ="";
      (num1 === num2)? frase += "Os números "+num1+" e "+num2+" são iguais. ": frase += "Os números "+num1+" e "+num2+" não são iguais. ";
      (num1+num2>10)? frase += "A soma de "+num1+" e "+num2+" é maior que 10. ":frase +="A soma de "+num1+" e "+num2+" é menor que 10. ";
      (num1+num2<20)? frase += "A soma de "+num1+" e "+num2+" é menor que 20.": frase +="A soma de "+num1+" e "+num2+" é maior que 20.";
    return frase;
    console.log(frase);
  }

  function soma(x, ...y) {
    console.log(x + " o " + y);
  }

  let array = [1, 1, 1 ,1];*/

  function jogo(jogador1, jogador2){

  //Para casos repetidos
  if((jogador1 === "Ataque" && jogador2 === "Ataque") || (jogador2 === "Ataque" && jogador1 === "Ataque"))
        console.log("Aniquilacao mutua");
    else if ((jogador1 === "Papel" && jogador2 === "Papel") || (jogador2 === "Papel" && jogador1 === "Papel") ) 
          console.log("Ambos venceram");
    else if ((jogador1 === "Pedra" && jogador2 === "Pedra") || (jogador1 === "Pedra" && jogador2 === "Pedra") )
          console.log("Sem ganhador");
  //Para ataques
    else if (jogador1 === "Ataque" && (jogador2 === "Pedra" || jogador2 === "Papel"))
          console.log("Jogador 1 venceu");
    else if (jogador2 === "Ataque" && (jogador1 === "Pedra" || jogador1 === "Papel"))
          console.log("Jogador 2 venceu");
  // Para pedras
    else if (jogador1 === "Pedra" && (jogador2 === "Papel"))
          console.log("Jogador 1 venceu");
    else if (jogador2 === "Pedra" && (jogador1 === "Papel"))
          console.log("Jogador 2 venceu");
  // Para papel
    else if (jogador1 === "Papel" && jogador2 === "Pedra")
          console.log("Jogador 2 venceu");
    else if (jogador2 === "Papel" && jogador1 === "Pedra")
          console.log("Jogador 1 venceu");
  }

