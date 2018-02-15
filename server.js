const express = require('express');
const app = express();

const server = app.listen(8888,encender);
app.use(express.static('public'))

app.get('https://api.linkedin.com/v1/people/~:(id,num-connections,picture-url)?format=json',sendFriend);
function sendFriend(request,response){

    const data = request.params;
    console.log(data);
  response.send('la cantidad de amigos '+ data + ' en tu linkedin');
}
function encender(){
    console.log('servidor encendido¡¡');
}
