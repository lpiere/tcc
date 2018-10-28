let saldo = document.getElementById("saldo");
const nome = require("./login.js");
let disponivel;

firebase.database().ref('pessoa/').on('value', function(snapshot){
    snapshot.forEach(function (item){
        if(nome == item.val().nome){
            console.log("esse é o nome1: " + item.val().saldo);
            saldo.innerText = item.val().saldo;
            disponivel = item.val().saldo;
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
        firebase.database().ref("/maquina/"+maquinaid.value+"/disponivel").set(0);
    }else{   
        alert("coloque o numero da maquina")
    }

}