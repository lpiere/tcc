let cod_pessoa;
let nome = document.getElementById("usr");
let senha = document.getElementById("pass");
let cod_pessoaRef;

cod_pessoaRef = firebase.database().ref('/cod_pessoa');
cod_pessoaRef.on('value', function(snapshot) {
    console.log(snapshot.val().value);
    cod_pessoa =  1 + snapshot.val().value;
    console.log(cod_pessoa);    
});

function prep(){
    n = nome.value;
    s = hashCode(senha.value);
    
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

hashCode = function(s){
    return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
  }