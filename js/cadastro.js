var cod_pessoa;
var nome = document.getElementById("usr");
var senha = document.getElementById("pass");
var cod_pessoaRef;

cod_pessoaRef = firebase.database().ref('/cod_pessoa');
cod_pessoaRef.on('value', function(snapshot) {
    console.log(snapshot.val().value);
    cod_pessoa =  1 + snapshot.val().value;
    console.log(cod_pessoa);    
});

function prep(){
    n = nome.value;
    s = senha.value;
    
    var data = {
      nome: n,
      senha : s,
      saldo: 0
    };
    console.log(data);
    var jooj = {value: cod_pessoa}
    console.log(jooj)
    firebase.database().ref("/cod_pessoa").set(jooj);
    firebase.database().ref("/pessoa/"+cod_pessoa+"/").set(data);
    window.location.replace("./login.html"); 
}