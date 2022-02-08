const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const jwt = require('jsonwebtoken');

require('dotenv').config();

const branchSchema = new Schema({
    branchName:{
        type: String,
        required: 'mcqtitle is Required'
    },
    totalSections:{
        type: Number,
        default: 0
    }
});


module.exports = mongoose.model('branch', branchSchema);