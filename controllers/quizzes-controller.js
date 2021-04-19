const quizService = require('../services/quiz-service')

module.exports = (app) => {

    const findAllQuizzes = (req, res) => {
        quizService.findAllQuizzes()
            .then(quizzes => res.send(quizzes))
    }

    const findQuizById = (req, res) => {
        quizService.findQuizById(req.params['qid'])
            .then(quiz => res.send(quiz))
    }

    app.get('/api/quizzes', findAllQuizzes)
    app.get('/api/quizzes/:qid', findQuizById)
}