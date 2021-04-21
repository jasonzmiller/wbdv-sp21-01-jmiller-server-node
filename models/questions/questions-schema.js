const mongoose = require('mongoose')

const questionsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    quizId: String,
    question: String,
    correct: String,
    answer: String,
    type: {
        type: String,
        enum: ['TRUE_FALSE', 'MULTIPLE_CHOICE', 'FILL_BLANKS']
    },
    choices: [String]  
}, {collection: 'questions'})

module.exports = questionsSchema