const jwt = require('jsonwebtoken');
const confJwt = require('../config/Jwt');
const mongoose = require('mongoose');
const UsuarioModel = mongoose.model('Usuario');

module.exports = {
    async showAll(req, res){
        const { page = 1 } = req.query;
        const usuarios = await UsuarioModel.paginate({}, {page, limit: 10});
        return res.json(usuarios);
    },
    async show(req, res){
        const usuario = await UsuarioModel.findById(req.params.id);
        return res.json(usuario);
    },
    async save(req, res){
        const usuario = await UsuarioModel.create(req.body);
        return res.json(usuario);
    },
    async update(req, res){
        const usuario = await UsuarioModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(usuario);
    },
    async delete(req, res){
        await UsuarioModel.findByIdAndDelete(req.params.id);
        return res.send();
    },
    async login(req, res){
        const [_senha, _email] = [req.params.senha, req.params.email];
        const usuario =  await UsuarioModel.where(senha == _senha && email == _email);

        if (usuario._email === _email && usuario.senha === _senha) {
        const token = jwt.sign({email: _email},
            config.secret,
            { 
                expiresIn: confJwt.expira  // expires in 2 hours
            }
          );
        return res.json({
            success: true,
            message: 'Authenticaticação com successo!',
            token: token
          });
        }else{
            return res.send(400).json({
                success: false,
                message: 'Authenticação falhou! Por favor verifique os dados informados.'
              });
        }
    },

}