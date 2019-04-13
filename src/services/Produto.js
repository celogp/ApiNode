const mongoose = require('mongoose');
const Produto = mongoose.model('Produto');

module.exports = {
    async showAll(req, res){
        const { page = 1 } = req.query;
        const produtos = await Produto.paginate({}, {page, limit: 10});
        return res.json(produtos);
    },
    async show(req, res){
        const produto = await Produto.findById(req.params.id);
        return res.json(produto);
    },
    async save(req, res){
        //gravar o registro
        const produto = await Produto.create(req.body);
        return res.json(produto);
    },
    async update(req, res){
        const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(produto);
    },
    async delete(req, res){
        await Produto.findByIdAndDelete(req.params.id);
        return res.send();
    }
}