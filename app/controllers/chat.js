module.exports.iniciaChat = function(application, req, res){

	var dadosForm = req.body;

	req.assert('apelido', 'Nome/Apelido é obrigatório.').notEmpty();
	req.assert('apelido', 'Nome/Apelido deve conter entre 3 e 15 caracteres.').len(3, 10);

	var erros = req.validationErrors();

	if(erros){
		res.render('index', {validacao : erros});
		return;
	}

	res.render('chat');
}