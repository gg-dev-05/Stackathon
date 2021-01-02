const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    empID: Schema.Types.ObjectId,
    type: String,
    description: String,
    duration: Number,
    Status: String
})

const Request = mongoose.model('request' , RequestSchema);

module.exports = Request;