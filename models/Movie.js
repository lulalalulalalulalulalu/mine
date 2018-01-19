"use strict"
const mongodb = require('./mongodb');
const Schema = mongodb.mongoose.Schema;

const MoviesSchema = new Schema({
    name: String,
    alias: [String],
    publish: Date,
    create_date: {
        type: Date,
        default: Date.now
    },
    images: {
        coverSmall: String,
        coverBig: String,
    },
    source: [{
        source: String,
        link: String,
        swfLink: String,
        quality: String,
        version: String,
        lang: String,
        subtitle: String,
        create_date: {
            type: Date,
            default: Date.now
        }
    }]
});

var Movies = mongodb.mongoose.model("Movie", MoviesSchema);