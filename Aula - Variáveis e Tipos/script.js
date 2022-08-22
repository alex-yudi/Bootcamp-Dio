function verificadorPalindromo(string) {
    let palindromoInverso = ""
    for(let i=string.length-1; i>=0; i--){
        palindromoInverso += string[i];
    }
    (string === palindromoInverso)? console.log("A palavra "+ string + " é um palíndromo!") : console.log("A palavra "+ string + " não é um palíndromo!");
}

