var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StudentSchema = new Schema({
    uid: { type: String },
    created_at: { type: Date },
    updated_at: { type: Date },
    rollNo: { type: String },
    name: { type: String },
    class: { type: String }
});

// Removed Flow statics and pre save - 20th sept 2017

mongoose.model('Student', StudentSchema);