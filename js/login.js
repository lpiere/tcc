let nome = document.getElementById("usr");
let senha = document.getElementById("pass");

function log(){
    console.log(nome.value);
    console.log(senha.value);
    firebase.database().ref('pessoa/').on('value', function(snapshot){
        snapshot.forEach(function (item){
            if(nome.value == item.val().nome){
                if(hashCode(senha.value) == item.val().senha){
                    window.location.replace("./telausuario.html");
                }else{
                    alert("senha errada");
                }
            }
        });
    });
    console.log("dsghjfgdfkha");
    
}

hashCode = function(s){
    return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
  }