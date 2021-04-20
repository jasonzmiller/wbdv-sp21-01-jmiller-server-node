const questions = require('./questions.json')
const questionsModel = require('../models/questions/questions-model')
const questionsDao = require('../daos/questions-dao')

const findAllQuestions = () => questionsDao.findAllQuestions()
const findQuestionsById = (questionId) => questionsDao.findQuestionsById(questionId)
const findQuestionsForQuiz = (quizId) => questionsDao.findQuestionsForQuiz(quizId)

module.exports = {
    findAllQuestions,
    findQuestionsById,
    findQuestionsForQuiz
}
