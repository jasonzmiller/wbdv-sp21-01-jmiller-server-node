const quizzes = require('./quizzes.json')

const findAllQuizzes = () => {
    return quizzes
}

const findQuizById = (quizId) => {
    return quizzes.find(quiz => quiz._id === quizId)
}

module.exports = {
    findAllQuizzes,
    findQuizById
}
