let nome = document.getElementById("nome");
let quantidade = document.getElementById("quantidade");
let saldonovo = 0;

function adicionar(){
    firebase.database().ref('pessoa/').on('value', function(snapshot){
        snapshot.forEach(function (item){
            item.val();
                if(nome.value == item.val().nome){
                console.log(item.val());
                setTimeout(saldonovo = parseInt(item.val().saldo) + parseInt(quantidade.value), 2000);
                console.log("saldo novo: "+saldonovo);
            }
        });
        console.log("atualizando");
        atualizar(saldonovo, nome.value);
    });
}
function atualizar(saldo, nome){
    firebase.database().ref('pessoa/').on('value', function(snapshot){
        snapshot.forEach(function (item){
            if(nome == item.val().nome){
                console.log("rarara")
                let jooj = {
                    nome: item.val().nome,
                    senha: item.val().senha,
                    saldo: saldo,
                    idpessoa: item.val().idpessoa,
                }
                firebase.database().ref("pessoa/"+item.val().idpessoa).set(jooj);
                window.location.replace("./telaadicionar.html");

            }
        });
    });
}