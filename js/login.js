var nome = document.getElementById("usr");
var senha = document.getElementById("pass");


function log(){
    console.log(nome.value);
    console.log(senha.value)
    firebase.database().ref('pessoa/').on('value', function(snapshot){
        snapshot.forEach(function (item){
            if(nome.value == item.val().nome){
                if(senha.value == item.val().senha){
                    window.location.replace("./telausuario.html");
                }else{
                    alert("senha errada");
                }
            }
        });
    });
    console.log("dsghjfgdfkha");
    
}
