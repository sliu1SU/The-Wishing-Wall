/*
this is my model
 */
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/documentsHomework2');

const DocumentSchema = mongoose.model('DocumentSchema', {
    // no need for id because mongoDB will generate id for me automatically
    title: String,
    content: String,
    time: {type: Date, default: Date.now}
});

module.exports = {
    DocumentSchema
}