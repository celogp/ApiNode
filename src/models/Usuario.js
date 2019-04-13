const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const UsuarioSchema = new mongoose.Schema({
    Nome : {
        type: String
    }, 
    Senha : {
        type: String
    },
    Email :{
        type: String
    },
    DhInclusao : {
        type: Date, 
        default : Date.now
    }
});

mongoose.plugin(mongoosePaginate);
mongoose.model('Usuario', UsuarioSchema);
