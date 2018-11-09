let saldo = document.getElementById("saldo");
let disponivel;
let idpessoa;
//const nome = "luan"

console.log(login.name)
chamardados()


function chamardados(){
    firebase.database().ref('pessoa/').on('value', function(snapshot){
        snapshot.forEach(function (item){
            if(nome == item.val().nome){
                saldo.innerText = item.val().saldo
                disponivel = item.val().saldo
                idpessoa = item.val().idpessoa
            }
        });
    });
}

function abrir(){
    let maquinaid = document.getElementById("maquinaid");
    if(maquinaid.value != ""){
        firebase.database().ref("/maquina/"+maquinaid.value+"/ligar").set("true");
        firebase.database().ref("/maquina/"+maquinaid.value+"/disponivel").set(disponivel);
    }else{
        alert("coloque o numero da maquina")
    }
}

function fechar(){
    let maquinaid = document.getElementById("maquinaid");
    if(maquinaid.value != ""){
        firebase.database().ref("/maquina/"+maquinaid.value+"/ligar").set("false");
        let servido;
        
        {//
        firebase.database().ref('maquina/').on('value', function(snapshot){
            snapshot.forEach(function (item){            
                if(maquinaid.value == item.val().maquinaid){
                    servido = item.val().servido
                    firebase.database().ref("/pessoa/"+idpessoa+"/saldo").set(disponivel-servido);
                }
            });
        });
        }//

        firebase.database().ref("/maquina/"+maquinaid.value+"/disponivel").set(0);
    }else{   
        alert("coloque o numero da maquina");
    }
}
