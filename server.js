// recuperando o modulo express
const express = require('express');

// criando instancia do express
const app =  express();

// 
app.use(express.static(__dirname + '/dist/'));

// express é um framework para montagem de servidor

// responder as requisisç~poes feitas ao servidor por meio da rota get
app.get('/', function(requisicao, resposta){
   resposta.sendFile(__dirname + '/dist/index.html');
})

// ouvindo a porta 
app.listen(3000, function(){
    // isto é uma função de callback
    console.log('Servidor web rodando com Express');
})
