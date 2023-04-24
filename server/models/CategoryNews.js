const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    category_name: {
        type: String
    },
    created:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('CategoryNews', CategorySchema)