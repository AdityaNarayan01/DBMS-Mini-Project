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

const testSubmittedSchema = new Schema({
        testId:{
            type: Schema.Types.ObjectId,
            ref: 'test'
        },
        studentId:{
            type: Schema.Types.ObjectId,
            ref: 'student'
        },
        QuestionSubmiited:{
            type: QuestionSchema
        },
        marks:{
            type: Number,
        }
});


module.exports = mongoose.model('testSubmitted', testSubmittedSchema);