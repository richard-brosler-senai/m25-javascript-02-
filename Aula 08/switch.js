/**
 * Exemplos de uso do switch no JS
 */
console.log("Menu de opções");
console.log("1 - Cadastro");
console.log("2 - Consulta");
console.log("3 - Alteração");
console.log("4 - Exclusão");
let op = 6;
if (op==1){
    console.log("escolheu Cadastro!");
} else if (op == 2){
    console.log("escolheu consulta!");
} else if (op == 3){
    console.log("escolheu Alteração!");
} else if (op == 4){
    console.log("escolheu Exclusão!");
} else {
    console.log("escolheu uma opção inválida");
}
//Usando o switch para a mesma situação
switch(op){
    case 1: console.log("escolheu Cadastro"); break;
    case 2: console.log("escolheu Consulta"); break;
    case 3: console.log("escolheu Alteração"); break;
    case 4: console.log("escolheu Exclusão"); break;
    default: console.log("escolheu uma opção inválida");
}