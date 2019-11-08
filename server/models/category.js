const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;


let categorySchema = new Schema({

    name: {
        type: String,
        unique: true,
        required: [true, 'Campo \'name\' es necesario']
    },
    description: {
        type: String,
        default: 'Sin descripción'
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    modifiedBy: {
        type: String,
        default: null
    }

});


categorySchema.plugin(uniqueValidator, {
    message: '{PATH} debe ser único'
});


// para la BBDD
module.exports = mongoose.model('categories', categorySchema);