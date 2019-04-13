const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PedidoSchema = new mongoose.Schema({
    Numero : {
        type: Number
    },
    Usuario : {
        type: mongoose.Schema.Types.ObjectId, 
        ref : 'Usuario'
    }, 
    Cliente : {
        type: mongoose.Schema.Types.ObjectId, 
        ref : 'Cliente'
    }, 
    Valor : {
        type: Number
    },
    Observacao : {
        type : String
    },
    DhInclusao : {
        type: Date, 
        default : Date.now
    }, 
});


mongoose.plugin(mongoosePaginate);
mongoose.model('Pedido', PedidoSchema);
