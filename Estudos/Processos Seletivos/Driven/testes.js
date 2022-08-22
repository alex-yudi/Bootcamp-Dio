//repetição de frase;
function vezes10(texto) {
    let frase = ""
    for (let i = 0; i < 10; i++ ){
      frase = frase + texto;
    }
    return frase;
  }
//repetições desejadas;
  function multiplica(texto, repeticoes) {
    let frase = "";
    for (let i = 0; i < repeticoes; i++){
        frase = frase + texto;
    }
    return frase;
  }

//dobra a soma de tudo no array;
  function dobraASoma(lista) {
    let somaArray = 0;
  for (let i = 0; i < lista.length; i++){
      somaArray = somaArray + lista[i];
  }
  return somaArray*2;
}

//comparador de índices no array;
function maiorIndice(lista) {
    let indice;
    let verificador = 0;
    for(let i = 0; i<lista.length; i++){
        if(lista[i] > verificador) {
            indice = i;
            verificador = lista[i];
        }
      } return indice;
  }

/*
  Média Ponderada numa Turma
Implemente a função ao lado que recebe dois arrays como parâmetros: listaValores e listaPesos. A sua função deve retornar a média ponderada utilizando os arrays passados. A média é calculada a partir da soma da multiplicação de cada valor por seu respectivo peso, e dividindo o total dessa soma pela soma dos pesos.



Exemplo:



Se forem passados listaValores = [5, 8, 10] com a listaPesos = [1, 2, 3], a função deve retornar 8,5 porque primeiro multiplicamos o valor 5 pelo peso 1, somamos ao valor 8 multiplicado pelo peso 2, e somamos ao valor 10 multiplicado pelo peso 3. Em seguida pegamos esse total acumulado e dividimos pela soma dos pesos (1 + 2 + 3).
*/

//Avançar dias da semana
function avancarDias(dia, quantidade) {
  let diasDaSemana = ["Segunda-feira", "Terca-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado", "Domingo"];
  let contagemDias = 0;
  for (let i = 0; i < diasDaSemana.length; i++){
      if (dia === diasDaSemana[i]){
          contagemDias = i + quantidade;
      }
  }
  return diasDaSemana[contagemDias%7];
}


//retorna array com intervalos pares
function intervaloPares(inicio, fim, quantidade) {
  let arr = [];
  for (let i=inicio+1; i<fim; i++ ){
      if (arr.length < quantidade){
          if (i%2 === 0){
              arr.push(i);
          }
      }
  }
  return arr;
}
// retorna array de múltiplos de 5
function proximosMultiplosDe5 (valorInicial, quantidade) {
  let array = [];
  for (let i = valorInicial;array.length < quantidade; i++){
      if (array.length<quantidade){
        if (i % 5 === 0 ){
          array.push(i);
        }
      }
  }
  return array;
}


//contador letra
function contaLetras(string, letra) {
  let contador = 0;
  for( let i = 0; i < string.length; i++) {
    if (letra === string[i]) {
      contador++;
    }
  }
  return contador;
}

// Trocar vogais por 1
function trocaVogais(string) {
  let novaPalavra ="";
  for(let i = 0; i <string.length; i++){
      if (string[i] === "a"
          || string[i] === "e"
          || string[i] === "i"
          || string[i] === "o"
          || string[i] === "u") {
              novaPalavra = novaPalavra + "1";
      } else {
                  novaPalavra = novaPalavra  + string[i];
      }
  } return novaPalavra;
}

// Tirar números de uma string
function tiraNumeros(string) {
  let stringNova = "";
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] !== "0" && string[i] !== "1" && string[i] !== "2" && string[i] !== "3" && string[i] !== "4" && string[i] !== "5" && string[i] !== "6" && string[i] !== "7" && string[i] !== "8" && string[i] !== "9"
    ) {
      stringNova = stringNova + string[i];
    }
  } return stringNova;
}

// Retorna array de soma de númeroa até meta
function somaAteMeta(inicio, meta) {
  let numerosSoma = [ ];

  for (let i = inicio+1; meta > 0; i++){
    if(meta>0){
        meta = meta - i;
       numerosSoma.push(i);
    }
  } return numerosSoma;
}


// Retornar letras repetidas 
function letrasRepetidas(string) {
	let array = [];
	for (let i = 0; i < string.length; i++){
		for (let u = i + 1; u < string.length; u++) {
			if (string[i] === string[u]){
				array.push(string[i]);
			}
		}
	} return array;
}

// encriptar palabra
function encriptarPalavra (palavra, chave) {
  let alfabeto = "abcdefghijklmnopqrstuvwxyz";
  let palavraEncriptada = "";
  for (let i = 0; i < palavra.length; i++){ // para a letra da palavra
    for (let u = 0; u < alfabeto.length; u++) {// para as letras do alfabeto
              if(palavra[i] === alfabeto[u]){
                palavraEncriptada = palavraEncriptada + alfabeto[u+chave];
              }
    }
  } return palavraEncriptada;
}




for (let i = 0; i<botoesApertados.length; i++){
  if(botoesApertados[i] === A1){
      btnA1 = btnA1 + 1;
  } else if (botoesApertados[i] === A2){
      btnA2 = btnA2 + 1;
  }
} 
