const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');
require('dotenv').config();

const mcqSchema = new Schema({
    mcqTitle:{
        type: String,
        required: 'mcqtitle is Required'
    },
    answer:{
        type: Boolean,
        default: false
    },
    mcqtype:{
        type: Boolean,
        deafult: false  // if false then one and if true the multiple
    },
    marks:{
        type: Number
    }
});

const QuestionSchema = new Schema({
    title:{
        type: String,
        required: 'title is Required'
    },
    questionType:{
        type: String,
        default: 'mcq'
    },
    totalMcq:{
        type: Number,
        required: 'required TotalMCQ'
    },
    mcqQuestions:[{
        type: mcqSchema,
    }],
    totalMarks:{
        type: Number
    }
});


const testSchema = new Schema({
    teacherAssigned:[{
        type: Schema.Types.ObjectId,
        ref: 'teacher'
    }],
    isduration:{
        type: Boolean,
        default: false
    },
    duration:{
        type: Number
    },
    startDate:{
        type: Number
    },
    endDate:{
        type: Number
    },
    isBranchSpecific:{
        type: Boolean,
        default: false
    },
    branch:{
        type: String
    },
    section:{
        type: String
    },
    question: {
        type: QuestionSchema
    },
}, { timestamps: true });

module.exports = mongoose.model('test', testSchema);