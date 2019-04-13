const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

// FONECONTATO VARCHAR(12),
// CELULARCONTATO VARCHAR(12), 
// CELULARCONTATOISWHATSAPP CHAR(1),
// CELULARISWHATSAPP CHAR(1), 

const ParceiroSchema = new mongoose.Schema({
    Nome : {
        type: String
    },
    Razao : {
        type: String
    },
    Cnpj : {
        type: String,
        maxlength:14
    },
    Cpf : {
        type: String,
        maxlength: 11
    },
    Inscricao : {
        type: String,
        maxlength: 14
    },
    Identidade : {
        type: String,
        maxlength: 16
    },
    Sexo : {
        type: String
    },
    Email :{
        type: String
    },
    Localizacao : {
        type: mongoose.Schema.Types.ObjectId, 
        ref : 'Localizacao'
    },
    Telefone :{
        type: String, 
        maxlength: 15
    },
    Celular :{
        type: String,
        maxlength: 15
    },
    CelularEhWhatsapp :{
        type: Boolean
    },
    Contato :{
        type: String
    },
    TelefoneContato :{
        type: String,
        maxlength: 15
    },
    CelularContato :{
        type: String,
        maxlength: 15
    },
    CelularContatoEhWhatsapp :{
        type: Boolean
    },
    DhInclusao : {
        type: Date, 
        default : Date.now
    }    
});

mongoose.plugin(mongoosePaginate);
mongoose.model('Parceiro', ParceiroSchema);
