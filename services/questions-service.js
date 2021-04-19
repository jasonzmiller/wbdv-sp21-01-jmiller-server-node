const questions = require('./questions.json')
const questionsModel = require('../models/questions/questions-model')

findQuestionsForQuiz = (quizId) => {
    return questionsModel.find({quizId: quizId})
}

module.exports = {
    findQuestionsForQuiz
}
