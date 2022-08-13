// recuperando o modulo express
const express = require('express');
const porta = process.env.PORT || 80;

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
app.listen(porta, function(){
    // isto é uma função de callback
    console.log('Servidor web rodando com Express');
})
