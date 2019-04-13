const mongoose = require('mongoose');
const Parceiro = mongoose.model('Parceiro');

module.exports = {
    async showAll(req, res){
        const { page = 1 } = req.query;
        const lstParceiro = await Parceiro.paginate({}, {page, limit: 10});
        return res.json(lstParceiro);
    },
    async show(req, res){
        const parceiro = await Parceiro.findById(req.params.id);
        return res.json(parceiro);
    },
    async save(req, res){
        //gravar o registro
        const parceiro = await Parceiro.create(req.body);
        return res.json(parceiro);
    },
    async update(req, res){
        const parceiro = await Parceiro.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(parceiro);
    },
    async delete(req, res){
        await Parceiro.findByIdAndDelete(req.params.id);
        return res.send();
    }
}