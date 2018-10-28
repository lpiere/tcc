var table = document.getElementById("datatables");

firebase.database().ref('pessoa/').on('value', function(snapshot){
    snapshot.forEach(function (item){
        console.log(item.val().nome);
        console.log(item.val().saldo);
        let nome = item.val().nome;
        let saldo = item.val().saldo;
        adicionar_coluna(nome, saldo)
    });
});
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
