"use strict"
const mongoose = require('mongoose');
mongoose.connect('mongoose://localhost/nodejs');
exports.mongoose = mongoose;