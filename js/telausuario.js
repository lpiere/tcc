var saldo = document.getElementById("saldo");
var nome = "luan"

firebase.database().ref('pessoa/').on('value', function(snapshot){
    snapshot.forEach(function (item){
        if(nome == item.val().nome){
            console.log("esse é o nome1: " + item.val().saldo);
            saldo.innerText = item.val().saldo
        }
    });
});
