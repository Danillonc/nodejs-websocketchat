var app = require('./config/server'); //importing config server file.

var server = app.listen(80, function(){ //open connection on port 80.
    console.log('Servidor ON');
});

var io = require('socket.io').listen(server); //importing socket.io module.

app.set('io', io); //setting global variable using express.

//start conn using socket.
io.on('connection', function(){
	console.log('Usuario conectou');

	io.on('disconnect', function(){
		console.log('Usuario desconectou.');
	})
}); 
