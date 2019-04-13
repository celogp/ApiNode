const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProdutoSchema = new mongoose.Schema({
    Nome : {
        type: String
    },
    Volume : {
        type: String,
        default: 'UN'
    },
    VlrPreco: {
        type : Number,
        default: 0
    },
    VlrCusto: {
        type: Number,
        default: 0
    },
    QtdEstoque : {
        type: Number,
        default: 0
    },
    Classificacao: {
        type: ['Final', 'Base', 'Acabamento', 'Acessorio', 'Servico']
    },
    DhInclusao : {
        type: Date, 
        default : Date.now
    }    
});

mongoose.plugin(mongoosePaginate);
mongoose.model('Produto', ProdutoSchema);
