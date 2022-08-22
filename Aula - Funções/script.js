function comparadorDeNumeros(num1, num2) {
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

  let array = [1, 1, 1 ,1];
