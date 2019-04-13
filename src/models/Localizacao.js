const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const LocalizacaoSchema = new mongoose.Schema({
    Logradouro : {
        type: String
    }, 
    Complemento : {
        type: String
    },
    Localidade :{
        type: String
    },
    Uf :{
        type: String,
        maxlength: 2
    },
    Bairro :{
        type: String
    },
    Longitude :{
        type: Number
    },
    Latitude :{
        type: Number
    },
    DhInclusao : {
        type: Date, 
        default : Date.now
    }
});

mongoose.plugin(mongoosePaginate);
mongoose.model('Localizacao', LocalizacaoSchema);
