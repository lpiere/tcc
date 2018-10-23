
var saldo = document.getElementById("saldo");
var nome = "luan"
// var mqtt = require('mqtt')
// var client  = mqtt.connect('mqtt://test.mosquitto.org')
 
// client.on('connect', function () {
//   client.subscribe('presence', function (err) {
//     if (!err) {
//       client.publish('presence', 'Hello mqtt')
//     }
//   })
// })
 
// client.on('message', function (topic, message) {
//   // message is Buffer
//   console.log(message.toString())
//   client.end()
// })

firebase.database().ref('pessoa/').on('value', function(snapshot){
    snapshot.forEach(function (item){
        if(nome == item.val().nome){
            console.log("esse é o nome1: " + item.val().saldo);
            saldo.innerText = item.val().saldo
        }
    });
});


function open(){

}

function close(){

}