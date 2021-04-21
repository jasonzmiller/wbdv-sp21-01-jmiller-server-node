const questionsModel = require('../models/questions/questions-model')
const quizzesModel = require('../models/quizzes/quizzes-model')

const findAllQuestions = () => questionsModel.find()

const findQuestionsById = (questionId) => questionsModel.findById(questionId)

const findQuestionsForQuiz = (quizId) => questionsModel.find({quizId})

// const findQuestionsForQuiz = (quizId) => quizzesModel.findById(quizId).populate('questions').then(quiz => console.log(quiz))

module.exports = {
    findAllQuestions,
    findQuestionsById,
    findQuestionsForQuiz
}