var table = document.getElementById("datatables");
let atualiza = false


function atualizar(){
    if(atualiza){
        atualiza = false;
        window.location.replace("./telaprincipal.html");
    }
    setTimeout(console.log("asdasd"), 1000);
    atualizando();
    
}
function atualizando(){
    firebase.database().ref('pessoa/').on('value', function(snapshot){
        snapshot.forEach(function (item){
            let nome = item.val().nome
            let saldo = item.val().saldo
            adicionar_coluna(nome, saldo)
        });
    });
    atualiza = true;
}

function adicionar_coluna(nome, saldo){
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    nome = document.createTextNode(nome);
    td.appendChild(nome);
    tr.appendChild(td);
    table.appendChild(tr);

    var td = document.createElement("td");
    saldo = document.createTextNode(saldo);
    td.appendChild(saldo);
    tr.appendChild(td);
    table.appendChild(tr);
}
