const quizzes = require('./quizzes.json')
const quizzesModel = require('../models/quizzes/quizzes-model')
const quizzesDao = require('../daos/quizzes-dao')

const findAllQuizzes = () => quizzesDao.findAllQuizzes()

const findQuizById = (quizId) => quizzesDao.findQuizById(quizId)

module.exports = {
    findAllQuizzes,
    findQuizById
}
