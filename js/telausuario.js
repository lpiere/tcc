var saldo;

var database = firebase.database()

function getsaldo(setor, nome){
    firebase.database().ref('/pessoa/1').on('value', function(snapshot){
        snapshot.forEach(function (item){
                console.log("esse é o nome"+item.val().nome);
                console.log("esse é o saldo"+item.val().saldo);
        });
    });

}
