var app = require('./config/server'); //importing config server file.

var server = app.listen(80, function(){ //open connection on port 80.
    console.log('Servidor ON');
});

var io = require('socket.io').listen(server); //importing socket.io module.

app.set('io', io); //setting global variable using express.

//start conn using socket.
io.on('connection', function(socket){
	console.log('Usuario conectou');

	socket.on('disconnect', function(){
		console.log('Usuario desconectou.');
	});

	socket.on('msgParaServidor', function(data){

		  /* emit event to client about dialog messages */
          socket.emit('msgParaCliente', {apelido: data.apelido, mensagem: data.mensagem});

          socket.broadcast.emit('msgParaCliente', {apelido: data.apelido, mensagem: data.mensagem});

          /* emit evento to client about chat list */
          if(parseInt(data.apelido_atualizado) == 0){

            socket.emit('participantesParaCliente', {apelido: data.apelido});

            socket.broadcast.emit('participantesParaCliente', {apelido: data.apelido});
          
          }

          	
	});
}); 
