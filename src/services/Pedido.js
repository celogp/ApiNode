const mongoose = require('mongoose');
const Pedido = mongoose.model('Pedido');

module.exports = {
    async showAll(req, res){
        const { page = 1 } = req.query;
        const lstPedido = await Pedido.paginate({}, {page, limit: 10, populate : ['Usuario', 'Parceiro']} );
        return res.json(lstPedido);
    },
    async show(req, res){
        const pedido = await Pedido.findById(req.params.id);
        return res.json(pedido);
    },
    async save(req, res){
        //gravar o registro
        const pedido = await Pedido.create(req.body);
        return res.json(pedido);
    },
    async update(req, res){
        const pedido = await Pedido.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(pedido);
    },
    async delete(req, res){
        await Pedido.findByIdAndDelete(req.params.id);
        return res.send();
    }
}