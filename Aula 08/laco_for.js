/**
 * Usos do laço for
 */
// 1a parte => inicialização de variáveis
// 2a parte => condição de permanência
// 3a parte => atribuição / incremento de valor
for (let i=0; i<10; i++){
    console.log("Valor de i=" + i);
}
//nesse caso abaixo, dá erro de inexistência da variavel i
//porque pertence somente ao bloco do for a variável i por 
//conta do let i dentro do for
console.log("Fim do For" + i);