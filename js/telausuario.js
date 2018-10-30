let saldo = document.getElementById("saldo");
// const nome = require("./login.js");
let nome = "TESTE"
let disponivel;
let idpessoa;

firebase.database().ref('pessoa/').on('value', function(snapshot){
    snapshot.forEach(function (item){
        if(nome == item.val().nome){
            saldo.innerText = item.val().saldo
            disponivel = item.val().saldo
            idpessoa = item.val().idpessoa
        }
    });
});


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
        subtrair();
        firebase.database().ref("/maquina/"+maquinaid.value+"/disponivel").set(0);
    }else{   
        alert("coloque o numero da maquina");
    }   
}

function subtrair(){
    let maquinaid = document.getElementById("maquinaid")
    let servido;
    firebase.database().ref('maquina/').on('value', function(snapshot){
        snapshot.forEach(function (item){
        if(item.val().maquinaid == maquinaid.value){
            servido = item.val().servido
            console.log("if")
            console.log("servido: ", servido)
            console.log("disponivel: ", item.val().disponivel)
            firebase.database().ref("pessoa/"+idpessoa+"/saldo").set(parseInt(item.val().disponivel)-parseInt(servido));
            firebase.database().ref("maquina/"+maquinaid.value+"/servido").set(0);
            maquinaid.value = ""
            }
        });
    });
}