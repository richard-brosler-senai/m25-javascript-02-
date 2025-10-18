/**
 * Aqui iremos ver como trabalhar com conjuntos em JS
 */
/* Não podemos usar dessa forma abaixo
let nome1 = "Andre";
let nome2 = "Amarildo";
...
let nome31 = "Zaqueu";
*/
//Abaixo estou definindo um vetor com 4 nomes
//posições     0         1          2        3
let nomes = ["Andre","Amarildo","Joaquim","Zaqueu"];
console.log(nomes[2]);
//listando os nomes usando laço for (1ª opção)
//vetor.length devolve o tamanho do vetor
for (let i=0;i<nomes.length;i++){
    console.log(nomes[i])
}
console.log("Fim do for (1ª opção)");
console.log("=+".repeat(20))
//listando os nomes usando o laço for (2ª opção)
for (const it of nomes){
    console.log(it);
}
console.log("Fim do for (2ª opção)")
console.log("=+".repeat(20))
//usando o while para listar os nomes
let i=0;
while(i<nomes.length){
    console.log(nomes[i++]);
}
console.log("Fim do while")