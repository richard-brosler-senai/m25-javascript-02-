/**
 * JS responsável pelo cadastro
 */
const maior_id = () => {
    //buscando os dados
    return axios.get('http://localhost:3000/produtos').then((ret) => {
        console.log(ret);
        return ret.data.reduce((a, b) => (a > b?.id ? a : b?.id), 0);
    })
}

const gravar = () => {
    //inibir o botão gravar e reset para o usuário não clicar enquanto grava
    document.getElementById("modal-cadastro").classList.add("show");
    //buscando os dados do formulário
    const id = document.querySelector("#id").value;
    const descricao = document.querySelector("#iddesc").value;
    const saldo = parseInt(document.querySelector("#idsaldo").value);
    const preco = parseFloat(document.querySelector("#idpreco").value);
    //Montando o JSON para gravar
    maior_id().then((ret) => {
        const dados = {
            "id": ""+(id == "null" ? parseInt(ret) + 1 : parseInt(id)),
            "descricao": descricao,
            "saldo": saldo,
            "preco": preco
        }
        if (id == "null") {
            axios.post("http://localhost:3000/produtos", dados)
                .then((ret) =>
                    console.log("Produto Criado com sucesso!"))
        } else {
            axios.put("http://localhost:3000/produtos/" + id, dados)
                .then((ret) =>
                    console.log("Produto gravado com sucesso!"))
        }
    })

}

const carregar = async () => {
    const parametros = new URLSearchParams(window.location.search);
    const id = parametros.get("id");
    if (id){
        document.getElementById("id").value = id;
        const res = await axios.get("http://localhost:3000/produtos/"+id);
        document.getElementById("iddesc").value = res.data.descricao;
        document.getElementById("idpreco").value = res.data.preco;
        document.getElementById("idsaldo").value = res.data.saldo;
    }
}
//Colocando os eventos no formulário
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    //tirar a submissão do form
    e.preventDefault();
    //chamando a gravação do registro
    gravar();
    //voltando para a página inicial
    setTimeout(() => {
        window.location.href = "index.html";
    }, 3000);
})
//colocando um evento de carregamento da página
document.addEventListener("DOMContentLoaded",function (){
    carregar();
})
