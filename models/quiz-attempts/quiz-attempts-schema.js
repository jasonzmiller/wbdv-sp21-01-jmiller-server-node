const mongoose = require('mongoose')
const questionsSchema = require('../questions/questions-schema')

const quizAttemptsSchema = mognoose.Schema({
    _id: String,
    score: Number,
    quiz: {
        type: String,
        ref: 'QuizzesModel',
        answers: [questionsSchema]
    }
}, {collection: 'quizAttempts'})